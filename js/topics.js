// ══ THEORIE-RENDERER ══
const topicsRenderer = (() => {

  function starsHtml(n, cls1 = 's-on', cls2 = 's-off') {
    return Array.from({length:3}, (_, i) =>
      `<span class="${i < n ? cls1 : cls2}">★</span>`
    ).join('');
  }

  function renderTheory(topicId) {
    const topic = TOPICS_DATA[topicId];
    if (!topic) return '<p>Thema nicht gefunden.</p>';

    let html = '';

    // Fun Fact Banner
    if (topic.funFact) {
      html += `<div class="fun-fact-banner">${topic.funFact}</div>`;
    }

    topic.sections.forEach((sec, i) => {
      html += `<div class="theory-section">
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
        const pct = progress.topicPct(topic.id);
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
            <span class="card-pct">${pct}%</span>
            <div class="card-progress progress-track">
              <div class="progress-fill${pct >= 80 ? ' green' : ''}" style="width:${pct}%"></div>
            </div>
          </div>`;
        grid.appendChild(div);
      });
    });
  }

  function buildFormulaSheet() {
    const body = document.getElementById('formula-modal-body');
    if (!body) return;
    let html = '';
    Object.values(TOPICS_DATA).forEach(topic => {
      const formulas = [];
      topic.sections.forEach(sec => {
        if (sec.formulas) sec.formulas.forEach(f => formulas.push(f));
      });
      if (!formulas.length) return;
      html += `<div class="modal-topic-section">
        <div class="modal-topic-title">
          <span>${starsHtml(topic.priority)}</span> ${topic.title}
        </div>
        <div class="modal-formulas">`;
      formulas.forEach(f => {
        html += `<div class="modal-formula">
          <div class="modal-formula-label">${f.label}</div>
          <div class="modal-formula-math">\\(${f.latex}\\)</div>
        </div>`;
      });
      html += `</div></div>`;
    });
    body.innerHTML = html;
    mathjaxTypeset([body]);
  }

  return { renderTheory, toggleAcc, renderCards, buildFormulaSheet, starsHtml };
})();
