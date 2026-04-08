// ══ AUFGABEN-RENDERER ══
const tasksRenderer = (() => {
  let currentTopic = null;
  let currentFilter = 'all';
  let eventsBound = false;

  function detectOperator(text = '') {
    const normalized = text.toLowerCase();
    if (/(vergleiche|vergleich)/.test(normalized)) return { key: 'compare', label: 'Vergleichen' };
    if (/(begründe|warum|nimm stellung|beurteile)/.test(normalized)) return { key: 'justify', label: 'Begründen' };
    if (/(erkläre|erläutere|deute|interpretiere|skizziere)/.test(normalized)) return { key: 'explain', label: 'Erklären' };
    if (/(berechne|bestimme|weise nach|zeige|wie groß|wieviel)/.test(normalized)) return { key: 'calculate', label: 'Berechnen' };
    return { key: 'analyze', label: 'Anwenden' };
  }

  function summarizeOperators(subtasks) {
    const seen = new Set();
    const summary = [];
    subtasks.forEach(sub => {
      const operator = detectOperator(sub.text);
      if (!seen.has(operator.key)) {
        seen.add(operator.key);
        summary.push(operator);
      }
    });
    return summary;
  }

  function defaultExpectationItems(operator, sub) {
    const points = sub.points || 0;
    const compact = points > 0 && points <= 2;
    switch (operator.key) {
      case 'calculate':
        return compact
          ? ['passenden Ansatz nennen', 'richtig einsetzen und Einheit angeben']
          : ['passenden Ansatz oder die richtige Formel nennen', 'Zwischenschritte mit sinnvollen Einheiten zeigen', 'Endergebnis fachlich knapp einordnen oder plausibilisieren'];
      case 'explain':
        return compact
          ? ['zentralen physikalischen Zusammenhang benennen', 'Fachbegriffe korrekt verwenden']
          : ['Ursache und Wirkung physikalisch verknüpfen', 'passende Fachbegriffe sauber verwenden', 'nicht nur das Ergebnis nennen, sondern den Zusammenhang erklären'];
      case 'justify':
        return compact
          ? ['klare Aussage treffen', 'mit passendem Gesetz oder Prinzip begründen']
          : ['klare Aussage oder Entscheidung formulieren', 'mit Gesetz, Modell oder Formel begründen', 'die Begründung sichtbar auf die konkrete Situation beziehen'];
      case 'compare':
        return compact
          ? ['mindestens einen klaren Vergleichspunkt nennen', 'Unterschied oder Gemeinsamkeit deutlich machen']
          : ['einen sinnvollen Vergleichsmaßstab wählen', 'mindestens eine Gemeinsamkeit oder einen Unterschied sauber benennen', 'mit einem kurzen Fazit abschließen'];
      default:
        return compact
          ? ['relevante Information korrekt ablesen oder auswählen', 'passenden Schluss ziehen']
          : ['relevante Angaben aus Text, Diagramm oder Situation herausziehen', 'daraus einen physikalisch passenden Schluss ableiten', 'das Ergebnis knapp fachlich einordnen'];
    }
  }

  function expectationIntro(operator, sub) {
    const points = sub.points || 0;
    if (points >= 5) return `Bei ${points} BE wird ein sauberer, nachvollziehbarer Lösungsweg erwartet und nicht nur das Endergebnis.`;
    if (points >= 3) return `Bei ${points} BE solltest du den Kerngedanken klar zeigen und ihn sauber mit der Situation verknüpfen.`;
    return points ? `Bei ${points} BE zählt vor allem der zentrale Gedanke in knapper, richtiger Form.` : 'Hier zählt vor allem, dass der physikalische Kern richtig getroffen wird.';
  }

  function renderExpectation(sub, operator) {
    const items = Array.isArray(sub.expectation) && sub.expectation.length
      ? sub.expectation
      : defaultExpectationItems(operator, sub);

    return `
      <div class="expectation-box ${operator.key}">
        <div class="expectation-label">Erwartungshorizont</div>
        <div class="expectation-intro">${expectationIntro(operator, sub)}</div>
        <div class="expectation-list">
          ${items.map(item => `<span>${item}</span>`).join('')}
        </div>
      </div>
    `;
  }

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

      const pdfImg = e.target.closest('.pdf-page-img');
      if (pdfImg) { openLightbox(pdfImg.dataset.src); return; }

      const stepBtn = e.target.closest('.task-step-btn');
      if (stepBtn) {
        jumpToSubtask(stepBtn.dataset.domId);
        return;
      }

      const subtaskToggle = e.target.closest('[data-action="toggle-subtask"]');
      if (subtaskToggle) {
        toggleSubtask(subtaskToggle.dataset.domId);
        return;
      }

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

  // PDF-Bilder direkt sichtbar (keine Toggle-Taste mehr)
  function pdfImagesHtml(task) {
    if (!task.pdfImages || !task.pdfImages.length) return '';
    const imgs = task.pdfImages.map((src, i) =>
      `<img class="pdf-page-img" src="img/${src}" data-src="img/${src}" alt="Seite ${i+1}" loading="lazy" style="width:100%;border-radius:8px;margin-bottom:8px;border:1px solid var(--border);cursor:pointer;">`
    ).join('');
    return `
      <div class="task-images-side">
        <div class="images-side-label"> 📄 Original-Abituraufgabe</div>
        ${task.pdfHint ? `<div style="font-size:11px;color:var(--text-3);margin-bottom:6px;">${task.pdfHint}</div>` : ''}
        ${imgs}
      </div>
    `;
  }

  function taskCardHtml(topicId, task) {
    const imgHtml = pdfImagesHtml(task);
    const hasImages = task.pdfImages && task.pdfImages.length > 0;
    const operators = summarizeOperators(task.subtasks);
    const stepsHtml = task.subtasks.map((sub, si) => {
      const key = `${task.id}_${si}`;
      const domId = `${topicId}_${key}`;
      const saved = progress.getTaskRating(topicId, key);
      const operator = detectOperator(sub.text);
      const ratingLabels = { good: 'Verstanden', partial: 'Teilweise', bad: 'Nochmal' };
      return `
        <button class="task-step-btn" data-dom-id="${domId}">
          <span class="task-step-label">${sub.label}</span>
          <span class="task-step-operator ${operator.key}">${operator.label}</span>
          <span class="task-step-title">${sub.text ? sub.text.substring(0, 70) + (sub.text.length > 70 ? '…' : '') : 'Teilaufgabe'}</span>
          <span class="task-step-state ${saved || ''}">${saved ? ratingLabels[saved] : 'Offen'}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="task-card">
        <div class="task-learning-guide">
          <div class="task-learning-guide-title">Abi-Fokus dieser Aufgabe</div>
          <div class="task-operator-row">
            ${operators.map(operator => `<span class="task-operator-pill ${operator.key}">${operator.label}</span>`).join('')}
          </div>
          <div class="task-learning-guide-steps">
            <span>1. Operator erkennen</span>
            <span>2. Gegebenes markieren</span>
            <span>3. Rechnen oder begründen</span>
            <span>4. Lösung mit Erwartungshorizont prüfen</span>
          </div>
        </div>
        <div class="task-steps-overview">
          ${stepsHtml}
        </div>
        <div class="task-card-layout" style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;">
          <div style="flex:2;min-width:280px;">
            <div class="task-card-header">
              <span class="task-card-title">${task.title}</span>
              <span class="task-year-tag">Abi ${task.year}</span>
            </div>
            ${task.context ? `<div class="task-context">${task.context}</div>` : ''}
            ${task.subtasks.map((sub, si) => subtaskHtml(topicId, task.id, sub, si)).join('')}
          </div>
          ${hasImages ? `<div style="flex:1;min-width:260px;max-width:400px;position:sticky;top:80px;">${imgHtml}</div>` : ''}
        </div>
      </div>
    `;
  }

  function subtaskHtml(topicId, taskId, sub, si) {
    const key = `${taskId}_${si}`;
    const domId = `${topicId}_${key}`;
    const saved = progress.getTaskRating(topicId, key);
    const operator = detectOperator(sub.text);
    const ratingLabels = { good: '✓ Verstanden', partial: '~ Teilweise', bad: '✗ Nochmal' };
    const beClass = bePtsClass(sub.points);
    const hasDeeper = !!sub.deeperExplanation;
    const isOpen = si === 0;
    return `
      <div class="subtask" id="subtask-${domId}">
        <div class="subtask-header">
          <span class="subtask-label">${sub.label}</span>
          <span class="subtask-operator ${operator.key}">${operator.label}</span>
          ${sub.points ? `<span class="subtask-pts ${beClass}">${sub.points} BE</span>` : ''}
          <span class="subtask-text-preview" style="flex:1;padding:0 8px">${sub.text ? sub.text.substring(0,80) + (sub.text.length > 80 ? '…' : '') : ''}</span>
          <span id="done-badge-${domId}" class="subtask-done-badge ${saved || ''}">${saved ? ratingLabels[saved] : ''}</span>
          <button class="subtask-toggle-btn" data-action="toggle-subtask" data-dom-id="${domId}" id="toggle-btn-${domId}">
            ${isOpen ? 'Einklappen' : 'Öffnen'}
          </button>
        </div>
        <div class="subtask-body${isOpen ? ' open' : ''}" id="body-${domId}">
          <div class="subtask-inner">
            <div class="theory-text">${sub.text}</div>
            ${renderExpectation(sub, operator)}
            ${sub.hint ? `<button class="pdf-toggle-btn" data-action="hint" data-dom-id="${domId}" id="hint-btn-${domId}">💡 Hinweis</button>` : ''}
            <button class="pdf-toggle-btn" data-action="solution" data-dom-id="${domId}" data-topic-id="${topicId}" data-key="${key}" id="sol-btn-${domId}">Lösung aufdecken</button>
            ${sub.hint ? `<div class="hint-box" id="hint-box-${domId}"><div class="hint-label">💡 Hinweis</div>${sub.hint}</div>` : ''}
            <div class="solution-box" id="sol-box-${domId}"><div class="solution-label">✓ Lösung</div>${sub.solution}</div>
            ${hasDeeper ? `
              <div class="deeper-box" id="deeper-box-${domId}">
                <div class="deeper-label">🔍 Tiefere Erklärung</div>
                <div class="deeper-content">${sub.deeperExplanation}</div>
              </div>
              <button class="deeper-toggle-btn" data-action="deeper" data-dom-id="${domId}" id="deeper-btn-${domId}">
                🧠 Tiefer verstehen
              </button>
            ` : ''}
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
    if (isOpen) mathjaxTypeset([box]);
  }

  function toggleSubtask(domId, forceOpen) {
    const body = document.getElementById(`body-${domId}`);
    const btn = document.getElementById(`toggle-btn-${domId}`);
    if (!body) return;
    const open = typeof forceOpen === 'boolean'
      ? forceOpen
      : !body.classList.contains('open');
    body.classList.toggle('open', open);
    if (btn) btn.textContent = open ? 'Einklappen' : 'Öffnen';
  }

  function jumpToSubtask(domId) {
    toggleSubtask(domId, true);
    document.getElementById(`subtask-${domId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function toggleDeeper(domId) {
    const box = document.getElementById(`deeper-box-${domId}`);
    const btn = document.getElementById(`deeper-btn-${domId}`);
    if (!box) return;
    const isOpen = box.classList.toggle('open');
    if (btn) {
      btn.classList.toggle('revealed', isOpen);
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

  return { render, toggleHint, toggleDeeper, toggleSolution, rate, setFilter };
})();
