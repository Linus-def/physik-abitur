// ══ AUFGABEN-RENDERER ══
const tasksRenderer = (() => {
  let currentTopic = null;
  let currentFilter = 'all';
  let eventsBound = false;

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;

    container.addEventListener('click', e => {
      const pill = e.target.closest('.year-pill');
      if (pill) { setFilter(pill.dataset.year); return; }

      const pdfImg = e.target.closest('.pdf-page-img');
      if (pdfImg) { openLightbox(pdfImg.dataset.src); return; }

      // PDF-Panel ein-/ausklappen
      const pdfHeader = e.target.closest('[data-action="toggle-pdf"]');
      if (pdfHeader) { togglePdfPanel(pdfHeader.dataset.domId); return; }

      const hintBtn = e.target.closest('[data-action="hint"]');
      if (hintBtn) { toggleHint(hintBtn.dataset.domId); return; }

      const deeperBtn = e.target.closest('[data-action="deeper"]');
      if (deeperBtn) { toggleDeeper(deeperBtn.dataset.domId); return; }

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
    setTimeout(() => mathjaxTypeset([container]).catch(() => {}), 0);
  }

  function bePtsClass(pts) {
    if (!pts) return '';
    const n = parseInt(pts);
    if (n <= 2) return 'be-low';
    if (n <= 4) return 'be-mid';
    return 'be-high';
  }

  function taskCardHtml(topicId, task) {
    const taskDomId = `${topicId}_${task.id}`;
    const totalPts = task.subtasks.reduce((sum, s) => sum + (parseInt(s.points) || 0), 0);
    const hasImages = task.pdfImages && task.pdfImages.length > 0;

    const pdfPanelHtml = hasImages ? `
      <div class="task-pdf-panel">
        <button class="task-pdf-header" data-action="toggle-pdf" data-dom-id="${taskDomId}">
          <span>📄 Original-Abituraufgabe</span>
          <span class="task-pdf-chevron" id="pdf-chevron-${taskDomId}">▲</span>
        </button>
        <div class="task-pdf-body open" id="pdf-body-${taskDomId}">
          ${task.pdfHint ? `<p class="task-pdf-hint">${task.pdfHint}</p>` : ''}
          <div class="task-pdf-images">
            ${task.pdfImages.map((src, i) =>
              `<img class="pdf-page-img" src="img/${src}" data-src="img/${src}" alt="Seite ${i+1}" loading="lazy">`
            ).join('')}
          </div>
        </div>
      </div>
    ` : '';

    return `
      <div class="task-card">
        <div class="task-card-header">
          <span class="task-year-badge">Abi ${task.year}</span>
          <span class="task-card-title">${task.title}</span>
          ${totalPts > 0 ? `<span class="task-card-pts">${totalPts}&thinsp;BE</span>` : ''}
        </div>
        ${pdfPanelHtml}
        ${task.context ? `<div class="task-context">${task.context}</div>` : ''}
        <div class="task-subtasks">
          ${task.subtasks.map((sub, si) => subtaskHtml(topicId, task.id, sub, si)).join('')}
        </div>
      </div>
    `;
  }

  function subtaskHtml(topicId, taskId, sub, si) {
    const key = `${taskId}_${si}`;
    const domId = `${topicId}_${key}`;
    const saved = progress.getTaskRating(topicId, key);
    const ratingLabels = { good: '✓ Verstanden', partial: '~ Teilweise', bad: '✗ Nochmal' };
    const beClass = bePtsClass(sub.points);
    const hasDeeper = !!sub.deeperExplanation;

    return `
      <div class="subtask-item">
        <div class="subtask-question-header">
          <span class="subtask-label">${sub.label}</span>
          ${sub.points ? `<span class="subtask-pts ${beClass}">${sub.points}&thinsp;BE</span>` : ''}
          <span id="done-badge-${domId}" class="subtask-done-badge ${saved || ''}">${saved ? ratingLabels[saved] : ''}</span>
        </div>
        <div class="subtask-question-text theory-text">${sub.text}</div>
        <div class="subtask-tools">
          ${sub.hint ? `<button class="subtask-action-btn" data-action="hint" data-dom-id="${domId}" id="hint-btn-${domId}">💡 Hinweis</button>` : ''}
          <button class="subtask-action-btn sol-btn" data-action="solution" data-dom-id="${domId}" data-topic-id="${topicId}" data-key="${key}" id="sol-btn-${domId}">→ Lösung zeigen</button>
        </div>
        ${sub.hint ? `<div class="hint-box" id="hint-box-${domId}"><div class="hint-label">💡 Hinweis</div>${sub.hint}</div>` : ''}
        <div class="solution-box" id="sol-box-${domId}"><div class="solution-label">✓ Lösung</div>${sub.solution}</div>
        ${hasDeeper ? `
          <button class="deeper-toggle-btn" style="display:none" data-action="deeper" data-dom-id="${domId}" id="deeper-btn-${domId}">🧠 Tiefer verstehen</button>
          <div class="deeper-box" id="deeper-box-${domId}">
            <div class="deeper-label">🔍 Tiefere Erklärung</div>
            <div class="deeper-content">${sub.deeperExplanation}</div>
          </div>
        ` : ''}
        <div class="rating-row" id="rating-${domId}">
          <span class="rating-row-label">Wie lief's?</span>
          ${['good','partial','bad'].map(r =>
            `<button class="rating-btn ${r === 'good' ? 'easy' : r === 'partial' ? 'medium' : 'hard'}${saved === r ? ' active sel' : ''}" data-action="rate" data-topic-id="${topicId}" data-key="${key}" data-r="${r}" data-dom-id="${domId}">${r==='good'?'✓ Verstanden':r==='partial'?'~ Teilweise':'✗ Nochmal üben'}</button>`
          ).join('')}
        </div>
      </div>
    `;
  }

  function togglePdfPanel(taskDomId) {
    const body = document.getElementById(`pdf-body-${taskDomId}`);
    const chevron = document.getElementById(`pdf-chevron-${taskDomId}`);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    if (chevron) chevron.textContent = isOpen ? '▲' : '▼';
  }

  function toggleHint(domId) {
    const box = document.getElementById(`hint-box-${domId}`);
    const btn = document.getElementById(`hint-btn-${domId}`);
    if (!box) return;
    const isOpen = box.classList.toggle('open');
    if (btn) btn.classList.toggle('active', isOpen);
    if (isOpen) mathjaxTypeset([box]);
  }

  function toggleDeeper(domId) {
    const box = document.getElementById(`deeper-box-${domId}`);
    const btn = document.getElementById(`deeper-btn-${domId}`);
    if (!box) return;
    const isOpen = box.classList.toggle('open');
    if (btn) {
      btn.classList.toggle('active', isOpen);
      btn.textContent = isOpen ? '🧠 Weniger anzeigen' : '🧠 Tiefer verstehen';
    }
    if (isOpen) mathjaxTypeset([box]);
  }

  function toggleSolution(domId, topicId, key) {
    const solBox = document.getElementById(`sol-box-${domId}`);
    if (solBox) solBox.classList.add('open');
    const ratingRow = document.getElementById(`rating-${domId}`);
    const btn = document.getElementById(`sol-btn-${domId}`);
    const deeperBtn = document.getElementById(`deeper-btn-${domId}`);
    if (ratingRow) ratingRow.classList.add('open');
    if (btn) btn.classList.add('revealed');
    if (deeperBtn) deeperBtn.style.display = 'inline-flex';
    const els = [solBox].filter(Boolean);
    mathjaxTypeset(els);
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

  return { render, toggleHint, toggleDeeper, toggleSolution, togglePdfPanel, rate, setFilter };
})();
