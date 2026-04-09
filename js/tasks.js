// ══ AUFGABEN-RENDERER ══
const tasksRenderer = (() => {
  let currentTopic = null;
  let currentFilter = 'all';
  let eventsBound = false;

  const STOP_WORDS = new Set([
    'aber', 'alle', 'allem', 'also', 'als', 'an', 'anhand', 'aus', 'bei', 'beim',
    'berechne', 'begruende', 'begruende', 'bestimme', 'bestaetige', 'damit', 'dass',
    'den', 'der', 'des', 'die', 'dieser', 'diese', 'diesem', 'dieses', 'ein', 'eine',
    'einem', 'einen', 'einer', 'eines', 'erklaere', 'erklaere', 'erlaeutere', 'fuer',
    'gibt', 'groesser', 'handelt', 'hat', 'hier', 'im', 'in', 'ist', 'kann', 'keine',
    'liegt', 'mit', 'nach', 'nimm', 'ob', 'oder', 'sich', 'sie', 'sind', 'soll',
    'stelle', 'um', 'und', 'von', 'warum', 'weise', 'welche', 'wie', 'wird', 'zeige',
    'zur', 'zum'
  ]);

  function normalizeText(text = '') {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ');
  }

  function tokenize(text = '') {
    return normalizeText(text)
      .split(/\s+/)
      .filter(token => token.length > 3 && !STOP_WORDS.has(token));
  }

  function detectOperator(text = '') {
    const normalized = normalizeText(text);
    if (/(vergleiche|vergleich)/.test(normalized)) return { key: 'compare', label: 'Vergleichen' };
    if (/(begrunde|beurteile|nimm stellung|warum)/.test(normalized)) return { key: 'justify', label: 'Begründen' };
    if (/(erklare|erlaeutere|deute|interpretiere|skizziere)/.test(normalized)) return { key: 'explain', label: 'Erklären' };
    if (/(berechne|bestimme|weise nach|zeige|wie gross|wieviel|wie viel)/.test(normalized)) return { key: 'calculate', label: 'Berechnen' };
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

  function bePtsClass(pts) {
    if (!pts) return '';
    const n = parseInt(pts, 10);
    if (n <= 2) return 'be-low';
    if (n <= 4) return 'be-mid';
    return 'be-high';
  }

  function fallbackAiExplanation(operator) {
    switch (operator.key) {
      case 'calculate':
        return 'Hier hilft es, zuerst sauber zwischen Gegebenem und Gesuchtem zu trennen, dann die passende Formel aus dem Thema zu wählen und das Ergebnis fachlich kurz zu deuten. Im Abi gibt es Punkte nicht nur für die Zahl, sondern auch für den nachvollziehbaren Ansatz.';
      case 'explain':
        return 'Hier reicht das Ergebnis allein nicht. Entscheidend ist, dass du Ursache und Wirkung physikalisch verbindest und Fachbegriffe sichtbar passend einsetzt. Gute Antworten beschreiben also nicht nur, was passiert, sondern auch warum.';
      case 'justify':
        return 'Bei solchen Teilaufgaben brauchst du eine klare Aussage und danach eine physikalische Begründung mit Gesetz, Modell oder Formel. Eine gute Abi-Antwort klingt meist wie: Aussage, Begründung, kurzer Bezug zur konkreten Situation.';
      case 'compare':
        return 'Beim Vergleichen solltest du einen klaren Maßstab wählen, zum Beispiel Amplitude, Energie, Phase oder Intensität. Danach benennst du mindestens einen wesentlichen Unterschied oder eine Gemeinsamkeit und schließt mit einem kurzen Fazit ab.';
      default:
        return 'Hier geht es darum, aus der Situation die relevanten Informationen herauszuziehen und daraus einen physikalisch passenden Schluss zu machen. Im Abi zählt vor allem, dass du den Kern der Aufgabe erkennst und sauber auf die gegebene Situation beziehst.';
    }
  }

  function getAiExplanation(sub, operator) {
    return sub.deeperExplanation || fallbackAiExplanation(operator);
  }

  function findRelevantTheorySection(topicId, task, sub) {
    const topic = TOPICS_DATA[topicId];
    if (!topic?.sections?.length) return null;

    const terms = new Set(tokenize(`${task.title} ${task.context || ''} ${sub.text || ''}`));
    let bestMatch = null;

    topic.sections.forEach((section, index) => {
      const titleTokens = tokenize(section.title || '');
      const haystack = normalizeText(`${section.title || ''} ${section.text || ''} ${section.note || ''}`);
      let score = 0;

      titleTokens.forEach(token => {
        if (terms.has(token)) score += 4;
      });

      terms.forEach(token => {
        if (haystack.includes(token)) score += 1;
      });

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = {
          score,
          title: section.title,
          targetId: `theory-sec-${topicId}-${index}`
        };
      }
    });

    if (bestMatch && bestMatch.score > 0) return bestMatch;

    return {
      score: 0,
      title: `${topic.title} im Überblick`,
      targetId: null
    };
  }

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;

    container.addEventListener('click', e => {
      const pill = e.target.closest('.year-pill');
      if (pill) {
        setFilter(pill.dataset.year);
        return;
      }

      const pdfImg = e.target.closest('.pdf-page-img');
      if (pdfImg) {
        openLightbox(pdfImg.dataset.src);
        return;
      }

      const anchorBtn = e.target.closest('.task-anchor-btn');
      if (anchorBtn) {
        jumpToSubtask(anchorBtn.dataset.targetId);
        return;
      }

      const theoryBtn = e.target.closest('.task-theory-link');
      if (theoryBtn) {
        app.openTopicReference(
          theoryBtn.dataset.topicId,
          'theory',
          theoryBtn.dataset.targetId || undefined
        );
      }
    });
  }

  function render(topicId, filter) {
    currentTopic = topicId;
    currentFilter = filter || 'all';

    const container = document.getElementById('tab-tasks');
    if (!container) return;

    const all = TASKS_DATA[topicId] || [];
    const years = [...new Set(all.map(task => task.year))].sort((a, b) => b - a);
    const tasks = currentFilter === 'all'
      ? all
      : all.filter(task => String(task.year) === String(currentFilter));

    const pillsHtml = `
      <div class="year-pills">
        <label>Jahr:</label>
        <button class="year-pill${currentFilter === 'all' ? ' active' : ''}" data-year="all">Alle</button>
        ${years.map(year => `
          <button class="year-pill${String(currentFilter) === String(year) ? ' active' : ''}" data-year="${year}">${year}</button>
        `).join('')}
        <span class="tasks-count" style="margin-left:auto;font-size:12px;color:var(--text-3);">
          ${tasks.length} Aufgabe${tasks.length !== 1 ? 'n' : ''}
        </span>
      </div>
    `;

    const introHtml = `
      <div class="tasks-intro-card">
        <div class="tasks-intro-title">Abi-Aufgaben als Lernansicht</div>
        <div class="tasks-intro-copy">
          Jede Aufgabe zeigt jetzt zuerst die Originalseiten und darunter jede Teilaufgabe in klarer Reihenfolge mit Lösung, KI-Erklärung und direktem Sprung zur passenden Theorie.
        </div>
      </div>
    `;

    container.innerHTML = `
      ${pillsHtml}
      ${introHtml}
      ${tasks.length
        ? tasks.map(task => taskCardHtml(topicId, task)).join('')
        : '<p class="tasks-empty">Keine Aufgaben für dieses Jahr.</p>'}
    `;

    bindEvents(container);
    window.setTimeout(() => mathjaxTypeset([container]).catch(() => {}), 0);
  }

  function pdfImagesHtml(task) {
    if (!task.pdfImages?.length) return '';

    return `
      <aside class="task-images-side">
        <div class="images-side-label">Original-Abituraufgabe</div>
        <div class="task-source-note">
          Die Originalseiten sind direkt eingeblendet. Ein Klick auf eine Seite öffnet sie größer.
        </div>
        ${task.pdfHint ? `<div class="task-source-note subtle">${task.pdfHint}</div>` : ''}
        ${task.pdfImages.map((src, index) => `
          <img
            class="pdf-page-img"
            src="img/${src}"
            data-src="img/${src}"
            alt="Originalseite ${index + 1}"
            loading="lazy"
          >
        `).join('')}
      </aside>
    `;
  }

  function taskCardHtml(topicId, task) {
    const operators = summarizeOperators(task.subtasks);

    return `
      <article class="task-card" id="task-${topicId}-${task.id}" data-task-id="${task.id}">
        <div class="task-card-header task-card-header-simple">
          <div>
            <div class="task-card-kicker">Abitur ${task.year}</div>
            <div class="task-card-title">${task.title}</div>
          </div>
          <div class="task-card-pill-row">
            ${operators.map(operator => `
              <span class="task-operator-pill ${operator.key}">${operator.label}</span>
            `).join('')}
          </div>
        </div>

        <div class="task-card-layout task-card-layout-study">
          <div class="task-main">
            ${task.context ? `
              <div class="task-context-card">
                <div class="study-block-label">Ausgangssituation</div>
                <div class="theory-text">${task.context}</div>
              </div>
            ` : ''}

            <div class="task-anchor-card">
              <div class="study-block-label">Direkt zu den Teilaufgaben</div>
              <div class="task-anchor-row">
                ${task.subtasks.map((sub, index) => {
                  const domId = `${topicId}_${task.id}_${index}`;
                  return `
                    <button class="task-anchor-btn" data-target-id="${domId}">
                      <span class="task-anchor-btn-label">${sub.label}</span>
                      <span class="task-anchor-btn-copy">${detectOperator(sub.text).label}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="task-body-stack">
              ${task.subtasks.map((sub, index) => subtaskHtml(topicId, task, sub, index)).join('')}
            </div>
          </div>
          ${pdfImagesHtml(task)}
        </div>
      </article>
    `;
  }

  function subtaskHtml(topicId, task, sub, index) {
    const domId = `${topicId}_${task.id}_${index}`;
    const operator = detectOperator(sub.text);
    const theoryMatch = findRelevantTheorySection(topicId, task, sub);
    const theoryLabel = theoryMatch?.title || `${TOPICS_DATA[topicId]?.title || 'Theorie'} öffnen`;
    const theoryTargetId = theoryMatch?.targetId || '';

    return `
      <section class="subtask-study-card" id="subtask-${domId}">
        <div class="subtask-study-header">
          <div class="subtask-study-meta">
            <span class="subtask-label">${sub.label}</span>
            <span class="subtask-operator ${operator.key}">${operator.label}</span>
            ${sub.points ? `<span class="subtask-pts ${bePtsClass(sub.points)}">${sub.points} BE</span>` : ''}
          </div>
        </div>

        <div class="study-block study-block-task">
          <div class="study-block-label">Teilaufgabe</div>
          <div class="study-block-content theory-text">${sub.text}</div>
        </div>

        ${sub.hint ? `
          <div class="study-block study-block-hint">
            <div class="study-block-label">Kurz-Hinweis</div>
            <div class="study-block-content">${sub.hint}</div>
          </div>
        ` : ''}

        <div class="study-block study-block-solution">
          <div class="study-block-label">Lösung direkt zur Aufgabe</div>
          <div class="study-block-content">${sub.solution}</div>
        </div>

        <div class="study-block study-block-ai">
          <div class="study-block-label">KI-Erklärung</div>
          <div class="study-block-content">${getAiExplanation(sub, operator)}</div>
        </div>

        <div class="study-theory-row">
          <button
            class="task-theory-link"
            data-topic-id="${topicId}"
            ${theoryTargetId ? `data-target-id="${theoryTargetId}"` : ''}
          >
            Passende Theorie: ${theoryLabel}
          </button>
        </div>
      </section>
    `;
  }

  function jumpToSubtask(domId) {
    const target = document.getElementById(`subtask-${domId}`);
    if (!target) return false;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('subtask-study-card-highlight');
    window.setTimeout(() => target.classList.remove('subtask-study-card-highlight'), 1800);
    return true;
  }

  function jumpToTask(taskId) {
    const taskCard = document.getElementById(`task-${currentTopic}-${taskId}`);
    if (!taskCard) return false;
    taskCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    taskCard.classList.add('task-card-highlight');
    window.setTimeout(() => taskCard.classList.remove('task-card-highlight'), 1800);
    return true;
  }

  function setFilter(value) {
    if (currentTopic) render(currentTopic, value);
  }

  return { render, setFilter, jumpToTask };
})();
