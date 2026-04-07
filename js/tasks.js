// ══ AUFGABEN-RENDERER ══
const tasksRenderer = (() => {
  let currentTopic = null;
  let currentFilter = 'all';

  function render(topicId, filter) {
    currentTopic = topicId;
    currentFilter = filter || 'all';
    const container = document.getElementById('tab-tasks');
    if (!container) return;

    const all = TASKS_DATA[topicId] || [];
    const years = [...new Set(all.map(t => t.year))].sort((a,b) => b-a);
    const tasks = currentFilter === 'all' ? all : all.filter(t => String(t.year) === String(currentFilter));

    container.innerHTML = `
      <div class="tasks-toolbar">
        <label>Jahr:</label>
        <select class="filter-select" onchange="tasksRenderer.setFilter(this.value)">
          <option value="all"${currentFilter==='all'?' selected':''}>Alle Jahre</option>
          ${years.map(y => `<option value="${y}"${String(currentFilter)===String(y)?' selected':''}>${y}</option>`).join('')}
        </select>
        <span class="tasks-count">${tasks.length} Aufgabe${tasks.length!==1?'n':''}</span>
      </div>
      ${tasks.length ? tasks.map(t => taskCardHtml(topicId, t)).join('') : '<p style="color:var(--text-3);font-size:14px;padding:8px 0">Keine Aufgaben für dieses Jahr.</p>'}
    `;
    if (window.MathJax) MathJax.typesetPromise([container]);
  }

  function taskCardHtml(topicId, task) {
    const imgHtml = pdfImagesHtml(task);
    return `<div class="task-card">
      <div class="task-card-head">
        <span class="task-card-title">${task.title}</span>
        <span class="task-year-tag">Abi ${task.year}</span>
      </div>
      ${task.context ? `<div class="task-context">${task.context}</div>` : ''}
      ${imgHtml}
      ${task.subtasks.map((sub, si) => subtaskHtml(topicId, task.id, sub, si)).join('')}
    </div>`;
  }

  function pdfImagesHtml(task) {
    if (!task.pdfImages || !task.pdfImages.length) return '';
    const id = `pdf-${task.id}`;
    const imgs = task.pdfImages.map((src, i) =>
      `<img class="pdf-page-img" src="img/${src}" alt="Seite ${i+1}"
        onclick="openLightbox('img/${src}')" loading="lazy">`
    ).join('');
    return `
      <div style="padding: 0 20px 4px">
        <button class="pdf-pages-toggle" onclick="tasksRenderer.togglePdf('${id}')">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="1" y="1" width="11" height="11" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
            <path d="M4 4.5h5M4 6.5h5M4 8.5h3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          </svg>
          Original-Aufgabe anzeigen (PDF)
        </button>
        <div class="pdf-pages-wrap" id="${id}">${imgs}</div>
      </div>`;
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

    return `<div class="subtask-wrap">
      <div class="subtask" id="subtask-${domId}">
        <div class="subtask-label-row">
          <span class="subtask-label-badge">${sub.label}</span>
          ${sub.points ? `<span class="subtask-points-badge">${sub.points} BE</span>` : ''}
          <span class="subtask-done-badge ${saved||''}" id="done-badge-${domId}">${saved ? ratingLabels[saved] : ''}</span>
        </div>
        <div class="subtask-text">${sub.text}</div>
        <div class="subtask-actions">
          ${sub.hint ? `<button class="reveal-btn" id="hint-btn-${domId}" onclick="tasksRenderer.toggleHint('${domId}')">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M6.5 4v.5M6.5 6v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
            Hinweis
          </button>` : ''}
          <button class="reveal-btn" id="sol-btn-${domId}" onclick="tasksRenderer.toggleSolution('${domId}','${topicId}','${key}')">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M4.5 6.5L6 8L8.5 5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            Lösung aufdecken
          </button>
        </div>
        ${sub.hint ? `<div class="reveal-box" id="hint-box-${domId}">
          <div class="reveal-box-inner hint-inner">
            <div class="hint-inner-label">💡 Hinweis</div>${sub.hint}
          </div></div>` : ''}
        <div class="reveal-box" id="sol-box-${domId}">
          <div class="reveal-box-inner sol-inner">
            <div class="sol-inner-label">✓ Lösung</div>${sub.solution}
          </div></div>
        ${sub.deeperExplanation ? `<div class="reveal-box" id="deeper-box-${domId}">
          <div class="reveal-box-inner deeper-inner">
            <div class="deeper-inner-label">🔍 Tiefere Erklärung</div>${sub.deeperExplanation}
          </div></div>` : ''}
        <div class="rating-row${saved ? ' open' : ''}" id="rating-${domId}">
          <span class="rating-label">Wie lief's?</span>
          ${['good','partial','bad'].map(r => `
            <button class="rating-btn${saved===r?' sel':''}" data-r="${r}"
              onclick="tasksRenderer.rate('${topicId}','${key}','${r}','${domId}')">
              ${r==='good'?'✓ Verstanden':r==='partial'?'~ Teilweise':'✗ Nochmal üben'}
            </button>`).join('')}
        </div>
      </div></div>`;
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

  function setFilter(val) { if (currentTopic) render(currentTopic, val); }

  return { render, toggleHint, toggleSolution, rate, setFilter, togglePdf };
})();
