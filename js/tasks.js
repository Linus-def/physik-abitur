// ══ AUFGABEN-RENDERER ══
const tasksRenderer = (() => {
  let currentTopic = null;
  let currentFilter = 'all';
  let eventsBound = false;

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;

    // Jahr-Filter Pills
    container.addEventListener('click', e => {
      const pill = e.target.closest('.year-pill');
      if (pill) {
        setFilter(pill.dataset.year);
        return;
      }

      const pdfToggle = e.target.closest('.pdf-pages-toggle');
      if (pdfToggle) { togglePdf(pdfToggle.dataset.pdfId); return; }

      const pdfImg = e.target.closest('.pdf-page-img');
      if (pdfImg) { openLightbox(pdfImg.dataset.src); return; }

      const hintBtn = e.target.closest('[data-action="hint"]');
      if (hintBtn) { toggleHint(hintBtn.dataset.domId); return; }

      const solBtn = e.target.closest('[data-action="solution"]');
      if (solBtn) { toggleSolution(solBtn.dataset.domId, solBtn.dataset.topicId, solBtn.dataset.key); return; }

      const ratingBtn = e.target.closest('[data-action="rate"]');
      if (ratingBtn) { rate(ratingBtn.dataset.topicId, ratingBtn.dataset.key, ratingBtn.dataset.r, ratingBtn.dataset.domId); return; }
    });
  }

  function render(topicId, filter) {
    currentTopic = topicId;
    currentFilter = filter || 'all';
    const container = document.getElementById('tab-tasks');
    if (!container) return;

    const all = TASKS_DATA[topicId] || [];
    const years = [...new Set(all.map(t => t.year))].sort((a,b) => b-a);
    const tasks = currentFilter === 'all' ? all : all.filter(t => String(t.year) === String(currentFilter));

    const pillsHtml = `
      <div class="year-pills">
        <label>Jahr:</label>
        <button class="year-pill${currentFilter === 'all' ? ' active' : ''}" data-year="all">Alle</button>
        ${years.map(y => `<button class="year-pill${String(currentFilter) === String(y) ? ' active' : ''}" data-year="${y}">${y}</button>`).join('')}
        <span class="tasks-count" style="margin-left:auto;font-size:12px;color:var(--text-3);">${tasks.length} Aufgabe${tasks.length!==1?'n':''}</span>
      </div>
    `;

    container.innerHTML = `
      ${pillsHtml}
      ${tasks.length ? tasks.map(t => taskCardHtml(topicId, t)).join('') : '<p style="color:var(--text-3);font-size:14px;padding:8px 0">Keine Aufgaben für dieses Jahr.</p>'}
    `;
    bindEvents(container);
    if (window.MathJax) MathJax.typesetPromise([container]);
  }

  function bePtsClass(pts) {
    if (!pts) return '';
    const n = parseInt(pts);
    if (n <= 2) return 'be-low';
    if (n <= 4) return 'be-mid';
    return 'be-high';
  }

  function taskCardHtml(topicId, task) {
    const imgHtml = pdfImagesHtml(task);
    return `
      <div class="task-card">
        <div class="task-card-header">
          <span class="task-card-title">${task.title}</span>
          <span class="task-year-tag">Abi ${task.year}</span>
        </div>
        ${task.context ? `<div class="task-context">${task.context}</div>` : ''}
        ${imgHtml}
        ${task.subtasks.map((sub, si) => subtaskHtml(topicId, task.id, sub, si)).join('')}
      </div>
    `;
  }

  function pdfImagesHtml(task) {
    if (!task.pdfImages || !task.pdfImages.length) return '';
    const id = `pdf-${task.id}`;
    const imgs = task.pdfImages.map((src, i) =>
      `<img class="pdf-page-img" src="img/${src}" data-src="img/${src}" alt="Seite ${i+1}" loading="lazy">`
    ).join('');
    return `
      <div style="padding: 0 20px 4px">
        <button class="pdf-toggle-btn pdf-pages-toggle" data-pdf-id="${id}">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 4.5h5M6 8.5h3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>
          Original-Aufgabe anzeigen (PDF)
        </button>
        <div class="pdf-pages-wrap" id="${id}">${imgs}</div>
      </div>
    `;
  }

  function togglePdf(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  }

  function subtaskHtml(topicId, taskId, sub, si) {
    const key = `${taskId}_${si}`;
    const domId = `${topicId}_${key}`;
    const saved = progress.getTaskRating(topicId, key);
    const ratingLabels = { good: '✓ Verstanden', partial: '~ Teilweise', bad: '✗ Nochmal' };
    const beClass = bePtsClass(sub.points);
    return `
      <div class="subtask">
        <div class="subtask-header">
          <span class="subtask-label">${sub.label}</span>
          ${sub.points ? `<span class="subtask-pts ${beClass}">${sub.points} BE</span>` : ''}
          <span class="subtask-text-preview" style="flex:1;padding:0 8px">${sub.text ? sub.text.substring(0,80) + (sub.text.length > 80 ? '…' : '') : ''}</span>
          <span id="done-badge-${domId}" class="subtask-done-badge ${saved || ''}">${saved ? ratingLabels[saved] : ''}</span>
        </div>
        <div class="subtask-body" id="body-${domId}">
          <div class="subtask-inner">
            <div class="theory-text">${sub.text}</div>
            ${sub.hint ? `<button class="pdf-toggle-btn" data-action="hint" data-dom-id="${domId}" id="hint-btn-${domId}">💡 Hinweis</button>` : ''}
            <button class="pdf-toggle-btn" data-action="solution" data-dom-id="${domId}" data-topic-id="${topicId}" data-key="${key}" id="sol-btn-${domId}">Ø Lösung aufdecken</button>
            ${sub.hint ? `<div class="hint-box" id="hint-box-${domId}"><div class="hint-label">💡 Hinweis</div>${sub.hint}</div>` : ''}
            <div class="solution-box" id="sol-box-${domId}"><div class="solution-label">✓ Lösung</div>${sub.solution}</div>
            ${sub.deeperExplanation ? `<div class="deeper-box" id="deeper-box-${domId}"><div class="deeper-label">🔍 Tiefere Erklärung</div>${sub.deeperExplanation}</div>` : ''}
            <div class="rating-row" id="rating-${domId}">
              <span class="rating-row-label">Wie lief's?</span>
              ${['good','partial','bad'].map(r =>
                `<button class="rating-btn ${r === 'good' ? 'easy' : r === 'partial' ? 'medium' : 'hard'}${saved === r ? ' active sel' : ''}" data-action="rate" data-topic-id="${topicId}" data-key="${key}" data-r="${r}" data-dom-id="${domId}">${r==='good'?'✓ Verstanden':r==='partial'?'~ Teilweise':'✗ Nochmal üben'}</button>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function toggleHint(domId) {
    const box = document.getElementById(`hint-box-${domId}`);
    const btn = document.getElementById(`hint-btn-${domId}`);
    if (!box) return;
    const isOpen = box.classList.toggle('open');
    if (btn) btn.classList.toggle('revealed', isOpen);
    if (isOpen && window.MathJax) MathJax.typesetPromise([box]);
  }

  function toggleSolution(domId, topicId, key) {
    ['sol','deeper'].forEach(p => {
      const el = document.getElementById(`${p}-box-${domId}`);
      if (el) el.classList.add('open');
    });
    const ratingRow = document.getElementById(`rating-${domId}`);
    const btn = document.getElementById(`sol-btn-${domId}`);
    if (ratingRow) ratingRow.classList.add('open');
    if (btn) btn.classList.add('revealed');
    const els = ['sol','deeper'].map(p => document.getElementById(`${p}-box-${domId}`)).filter(Boolean);
    if (window.MathJax) MathJax.typesetPromise(els);
  }

  function rate(topicId, key, rating, domId) {
    progress.setTaskRating(topicId, key, rating);
    const badge = document.getElementById(`done-badge-${domId}`);
    if (badge) {
      badge.className = `subtask-done-badge ${rating}`;
      badge.textContent = {good:'✓ Verstanden', partial:'~ Teilweise', bad:'✗ Nochmal üben'}[rating];
    }
    const row = document.getElementById(`rating-${domId}`);
    if (row) row.querySelectorAll('.rating-btn').forEach(b => b.classList.toggle('sel', b.dataset.r === rating));
    app.refreshTopicProgress(topicId);
  }

  function setFilter(val) {
    if (currentTopic) render(currentTopic, val);
  }

  return { render, toggleHint, toggleSolution, rate, setFilter, togglePdf };
})();
