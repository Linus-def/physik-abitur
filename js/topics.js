// ══ THEORIE-RENDERER ══
const topicsRenderer = (() => {
  const RELATED_TOPIC_MAP = {
    schwingungen: [
      { id: 'lc_kreis', copy: 'Zum LC-Kreis: gleiche Schwingungsstruktur elektrisch statt mechanisch.' },
      { id: 'wellen', copy: 'Zu Wellen: Schwingungen werden dort räumlich weitergetragen.' },
      { id: 'elektrodynamik', copy: 'Zur Elektrodynamik: Resonanz, Induktion und Generatoren bauen darauf auf.' }
    ],
    elektrodynamik: [
      { id: 'felder', copy: 'Zu Feldern: dort liegen die Grundlagen für Lorentzkraft und Induktion.' },
      { id: 'lc_kreis', copy: 'Zum LC-Kreis: dort siehst du elektromagnetische Schwingungen als Modell.' },
      { id: 'wellen', copy: 'Zu Wellen: veränderliche E- und B-Felder führen weiter zu elektromagnetischen Wellen.' }
    ],
    wellenoptik: [
      { id: 'wellen', copy: 'Zu Wellen: dort kommen Interferenz, Beugung und Huygens zuerst allgemein vor.' },
      { id: 'quantenphysik', copy: 'Zur Quantenphysik: dort wird das Wellenbild später wieder grundlegend wichtig.' }
    ],
    lc_kreis: [
      { id: 'schwingungen', copy: 'Zu Schwingungen: dieselbe Struktur noch einmal mechanisch gedacht.' },
      { id: 'elektrodynamik', copy: 'Zur Elektrodynamik: Spule, Induktion und Generatoren knüpfen direkt daran an.' }
    ],
    felder: [
      { id: 'elektrodynamik', copy: 'Zur Elektrodynamik: dort werden Felder in Bewegung und Induktion weitergeführt.' },
      { id: 'quantenphysik', copy: 'Zur Quantenphysik: Felder und Teilchenmodelle treffen dort wieder zusammen.' }
    ],
    quantenphysik: [
      { id: 'wellenoptik', copy: 'Zur Wellenoptik: Interferenz und Beugung liefern die Brücke zum Quantenbild.' },
      { id: 'wellen', copy: 'Zu Wellen: viele Ideen der Quantenphysik bauen auf dem allgemeinen Wellenmodell auf.' }
    ],
    wellen: [
      { id: 'schwingungen', copy: 'Zu Schwingungen: jede Welle basiert auf lokalen Schwingungen.' },
      { id: 'wellenoptik', copy: 'Zur Wellenoptik: dort werden Interferenz und Beugung mit Licht angewendet.' },
      { id: 'quantenphysik', copy: 'Zur Quantenphysik: dort taucht das Wellenbild auf ganz anderer Ebene wieder auf.' }
    ]
  };

  function getRelatedTopics(topicId) {
    return (RELATED_TOPIC_MAP[topicId] || [])
      .map(item => ({ ...item, topic: TOPICS_DATA[item.id] }))
      .filter(item => item.topic);
  }

  function starsHtml(n, cls1 = 's-on', cls2 = 's-off') {
    return Array.from({length:3}, (_, i) =>
      `<span class="${i < n ? cls1 : cls2}">★</span>`
    ).join('');
  }

  function renderTheory(topicId) {
    const topic = TOPICS_DATA[topicId];
    if (!topic) return '<p>Thema nicht gefunden.</p>';

    const sectionGoals = topic.sections.map((sec, i) => ({
      id: `theory-sec-${topicId}-${i}`,
      num: i + 1,
      title: sec.title
    }));
    const formulaList = topic.sections.flatMap((sec, i) =>
      (sec.formulas || []).map(f => ({ ...f, targetId: `theory-sec-${topicId}-${i}` }))
    );
    const noteList = topic.sections
      .filter(sec => sec.note)
      .map(sec => ({ title: sec.title, note: sec.note }));
    const mustKnow = sectionGoals.slice(0, 6);
    const taskExamples = (TASKS_DATA[topicId] || []).slice(0, 4);
    const taskPatterns = taskExamples.flatMap(task =>
      task.subtasks.slice(0, 2).map(sub => ({
        taskId: task.id,
        text: `${task.year}: ${sub.text}`
      }))
    ).slice(0, 4);
    const relatedTopics = getRelatedTopics(topicId);

    let html = '';

    // Fun Fact Banner
    if (topic.funFact) {
      html += `<div class="fun-fact-banner">${topic.funFact}</div>`;
    }

    html += `
      <div class="theory-overview">
        <div class="theory-overview-card">
          <div class="theory-overview-label">Was du fürs Abi können musst</div>
          <div class="theory-overview-title">${topic.title} in Lernschritten</div>
          <div class="theory-goals-list">
            ${mustKnow.map(goal => `
              <button class="theory-jump-btn" data-target-id="${goal.id}">
                <span class="theory-jump-num">${goal.num}</span>
                <span>${goal.title}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="theory-overview-card">
          <div class="theory-overview-label">Formeln zuerst</div>
          <div class="theory-overview-title">Die wichtigsten Beziehungen auf einen Blick</div>
          <div class="theory-formula-list">
            ${formulaList.slice(0, 6).map(f => `
              <button class="theory-formula-chip" data-target-id="${f.targetId}">
                <div class="theory-formula-chip-label">${f.label}</div>
                <div class="theory-formula-chip-math">\\(${f.latex}\\)</div>
              </button>
            `).join('')}
          </div>
        </div>
        ${noteList.length ? `
          <div class="theory-overview-card">
            <div class="theory-overview-label">Typische Merksätze</div>
            <div class="theory-overview-title">Das solltest du sicher im Kopf haben</div>
            <div class="theory-note-list">
              ${noteList.slice(0, 4).map(item => `
                <div class="theory-note-item">
                  <strong>${item.title}:</strong> ${item.note}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        ${taskExamples.length ? `
          <div class="theory-overview-card">
            <div class="theory-overview-label">Abi-Fokus</div>
            <div class="theory-overview-title">Damit musst du in Aufgaben rechnen und argumentieren</div>
            <div class="theory-note-list">
              ${taskExamples.map(task => `
                <button class="theory-task-link" data-topic-id="${topicId}" data-task-id="${task.id}">
                  <span class="theory-task-link-copy">
                    <strong>Abi ${task.year}:</strong> ${task.title}
                  </span>
                  <span class="theory-task-link-arrow">Zur Aufgabe →</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        ${relatedTopics.length ? `
          <div class="theory-overview-card">
            <div class="theory-overview-label">Verknüpfte Themen</div>
            <div class="theory-overview-title">Von hier aus kommst du direkt zu passenden Anschlussideen</div>
            <div class="related-topic-list">
              ${relatedTopics.map(item => `
                <button class="related-topic-link" data-topic-id="${item.id}" data-tab="theory">
                  <span class="related-topic-link-title">${item.topic.title}</span>
                  <span class="related-topic-link-copy">${item.copy}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        ${taskPatterns.length ? `
          <div class="theory-overview-card">
            <div class="theory-overview-label">Typische Prüfungsaufträge</div>
            <div class="theory-overview-title">So werden Themen im Abi wirklich abgefragt</div>
            <div class="theory-note-list">
              ${taskPatterns.map(pattern => `
                <button class="theory-task-pattern-link" data-topic-id="${topicId}" data-task-id="${pattern.taskId}">
                  ${pattern.text}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    topic.sections.forEach((sec, i) => {
      html += `<div class="theory-section" id="theory-sec-${topicId}-${i}">
        <h3 class="theory-section-title">
          <span class="theory-section-num">${i + 1}</span>
          ${sec.title}
        </h3>`;

      if (sec.text) html += `<div class="theory-text">${sec.text}</div>`;

      if (sec.formulas?.length) {
        html += `<div class="formulas-grid">`;
        sec.formulas.forEach(f => {
          html += `<div class="formula-box">
            <div class="formula-label">${f.label}</div>
            <div class="formula-math">\\(${f.latex}\\)</div>
            ${f.note ? `<div class="formula-note">${f.note}</div>` : ''}
          </div>`;
        });
        html += `</div>`;
      }

      if (sec.note) {
        html += `<div class="note-box">
          <div class="note-box-label">Merksatz</div>
          ${sec.note}
        </div>`;
      }

      if (sec.deeper) {
        const accId = `acc-${topicId}-${i}`;
        html += `<div class="accordion" id="${accId}">
          <button class="accordion-trigger" data-acc-id="${accId}">
            🔍 Tiefere Erklärung
            <span class="accordion-arrow">▼</span>
          </button>
          <div class="accordion-body">${sec.deeper}</div>
        </div>`;
      }

      html += `</div>`;
    });

    // Ressourcen-Links
    if (topic.resources?.length) {
      html += `<div class="resources-section">
        <div class="resources-title">📚 Weiterführende Ressourcen</div>
        <div class="resources-grid">
          ${topic.resources.map(r => `
            <a class="resource-card" href="${r.url}" target="_blank" rel="noopener noreferrer">
              <span class="resource-icon">${r.icon}</span>
              <div>
                <div class="resource-name">${r.name}</div>
                <div class="resource-desc">${r.desc}</div>
              </div>
            </a>`).join('')}
        </div>
      </div>`;
    }

    // Theorie nach 2s als gelesen markieren
    setTimeout(() => progress.setTheoryRead(topicId), 2000);
    return html;
  }

  function toggleAcc(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const wasOpen = el.classList.contains('open');
    el.classList.toggle('open');
    if (!wasOpen) mathjaxTypeset([el]);
  }

  function renderCards() {
    const grid = document.getElementById('topic-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Themen nach Priorität gruppieren (höchste zuerst)
    const groups = {};
    Object.values(TOPICS_DATA).forEach(topic => {
      const p = topic.priority || 1;
      if (!groups[p]) groups[p] = [];
      groups[p].push(topic);
    });

    const priorityLabels = { 3: 'Hohe Priorität', 2: 'Mittlere Priorität', 1: 'Niedrige Priorität' };
    const sortedPrios = Object.keys(groups).map(Number).sort((a, b) => b - a);

    sortedPrios.forEach(prio => {
      // Gruppen-Header
      const header = document.createElement('div');
      header.className = 'priority-group-header';
      header.textContent = priorityLabels[prio] || `Priorität ${prio}`;
      grid.appendChild(header);

      // Karten der Gruppe
      groups[prio].forEach(topic => {
        const div = document.createElement('div');
        div.className = 'topic-card';
        div.dataset.priority = prio;
        div.onclick = () => app.navigateTopic(topic.id);
        div.innerHTML = `
          <div class="card-header">
            <span class="card-title">${topic.title}</span>
            <span class="card-stars">${starsHtml(topic.priority)}</span>
          </div>
          <div><span class="card-badge">${topic.badge}</span></div>
          <div class="card-footer">
            <span class="card-link-hint">Theorie</span>
            <span class="card-link-hint">Abi-Aufgaben</span>
            <span class="card-link-hint">Quickcheck</span>
          </div>`;
        grid.appendChild(div);
      });
    });
  }

  function buildFormulaSheet() {
    const body = document.getElementById('formula-modal-body');
    if (!body) return;
    const topics = Object.values(TOPICS_DATA).sort((a, b) => (b.priority || 0) - (a.priority || 0));
    let html = `
      <div class="formula-sheet-intro">
        <div class="formula-sheet-intro-title">Formelzettel zum schnellen Nachschlagen</div>
        <div class="formula-sheet-intro-copy">Nicht alles auf einmal lesen: erst Thema wählen, dann nur die Kernformeln sichern, die du wirklich für Aufgaben brauchst. Innerhalb jedes Themas sind die Formeln jetzt nach Teilbereichen sortiert.</div>
      </div>
      <div class="formula-topic-nav">
        ${topics.map(topic => `<button class="formula-topic-nav-link" data-target-id="formula-topic-${topic.id}">${topic.title}</button>`).join('')}
      </div>
    `;
    topics.forEach(topic => {
      const sectionGroups = topic.sections
        .filter(sec => sec.formulas?.length)
        .map(sec => ({ title: sec.title, formulas: sec.formulas }));
      const formulas = sectionGroups.flatMap(group =>
        group.formulas.map(f => ({ ...f, sectionTitle: group.title }))
      );
      if (!formulas.length) return;
      const essentials = formulas.slice(0, Math.min(4, formulas.length));
      html += `<section class="modal-topic-section" id="formula-topic-${topic.id}">
        <div class="modal-topic-title">
          <span>${starsHtml(topic.priority)}</span> ${topic.title}
        </div>
        <div class="formula-topic-summary">${topic.badge}</div>
        <div class="formula-topic-layout">
          <div class="formula-topic-core">
            <div class="formula-block-title">Kernformeln</div>
            <div class="formula-core-list">
              ${essentials.map(f => `
                <div class="formula-core-card">
                  <div class="modal-formula-label">${f.label}</div>
                  <div class="modal-formula-math">\\(${f.latex}\\)</div>
                  <div class="modal-formula-section">${f.sectionTitle}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="formula-section-list">
            ${sectionGroups.map(group => `
              <div class="formula-section-card">
                <div class="formula-block-title">${group.title}</div>
                <div class="modal-formulas">
                  ${group.formulas.map(f => `
                    <div class="modal-formula">
                      <div class="modal-formula-label">${f.label}</div>
                      <div class="modal-formula-math">\\(${f.latex}\\)</div>
                      ${f.note ? `<div class="modal-formula-note">${f.note}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>`;
    });
    body.innerHTML = html;
    mathjaxTypeset([body]);
  }

  return { renderTheory, toggleAcc, renderCards, buildFormulaSheet, starsHtml };
})();
