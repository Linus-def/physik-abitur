// ══ APP – ROUTER, NAVIGATION, FEATURES ══
const app = (() => {

  let currentTopicId = null;
  let currentTab = 'theory';
  let formulaBuilt = false;

  // ── INIT ──
  function init() {
    buildSidebar();
    topicsRenderer.renderCards();
    updateStats();
    updateTotalProgress();
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // Tab-Klicks
    document.getElementById('topic-tabs')?.addEventListener('click', e => {
      const tab = e.target.closest('.tab');
      if (tab) switchTab(tab.dataset.tab);
    });

    // Fortschritt-Events
    document.addEventListener('progressUpdated', () => {
      updateTotalProgress();
      updateStats();
      buildSidebar();
      topicsRenderer.renderCards();
    });

    // Hash-Routing
    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  function handleHash() {
    const hash = location.hash.slice(1);
    if (!hash) { showHome(); return; }
    const [tid, tab] = hash.split('/');
    if (TOPICS_DATA[tid]) navigateTopic(tid, tab || 'theory');
    else showHome();
  }

  // ── NAVIGATION ──
  function showHome() {
    currentTopicId = null;
    document.getElementById('view-home').classList.add('active');
    document.getElementById('view-topic').classList.remove('active');
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    topicsRenderer.renderCards();
    if (location.hash) history.replaceState(null, '', location.pathname);
    closeSidebar();
  }

  function navigateHome() {
    location.hash = '';
    showHome();
  }

  function navigateTopic(topicId, tab) {
    tab = tab || 'theory';
    currentTopicId = topicId;
    const topic = TOPICS_DATA[topicId];
    if (!topic) return;

    document.getElementById('view-home').classList.remove('active');
    document.getElementById('view-topic').classList.add('active');

    document.getElementById('topic-name').textContent = topic.title;
    document.getElementById('topic-topbar-meta').innerHTML =
      `${topicsRenderer.starsHtml(topic.priority)} &nbsp;${topic.badge}`;
    refreshTopicProgress(topicId);

    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.id === topicId);
    });

    switchTab(tab, false);
    location.hash = `${topicId}/${tab}`;
    closeSidebar();

    document.getElementById('main').scrollTo?.(0, 0);
    window.scrollTo(0, 0);
  }

  function switchTab(tab, updateHash) {
    currentTab = tab;

    document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(`tab-${tab}`);
    if (panel) panel.classList.add('active');

    if (tab === 'theory') {
      panel.innerHTML = topicsRenderer.renderTheory(currentTopicId);
      if (window.MathJax) MathJax.typesetPromise([panel]);
    } else if (tab === 'tasks') {
      tasksRenderer.render(currentTopicId);
    } else if (tab === 'quiz') {
      quizModule.render(currentTopicId);
    }

    if (updateHash !== false && currentTopicId) {
      location.hash = `${currentTopicId}/${tab}`;
    }
  }

  // ── SIDEBAR ──
  function buildSidebar() {
    const nav = document.getElementById('topic-nav');
    if (!nav) return;
    nav.innerHTML = '';
    Object.values(TOPICS_DATA).forEach(topic => {
      const pct = progress.topicPct(topic.id);
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="nav-item${currentTopicId === topic.id ? ' active' : ''}" data-id="${topic.id}"
          onclick="app.navigateTopic('${topic.id}')">
          <div class="nav-item-content">
            <div class="nav-item-name">${topic.title}</div>
            <div class="nav-item-meta">
              <span class="nav-stars">${topicsRenderer.starsHtml(topic.priority)}</span>
              <div class="nav-progress progress-track">
                <div class="progress-fill${pct>=80?' green':''}" style="width:${pct}%"></div>
              </div>
            </div>
          </div>
        </button>`;
      nav.appendChild(li);
    });
  }

  function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
  }

  // ── PROGRESS ──
  function refreshTopicProgress(topicId) {
    const pct = progress.topicPct(topicId);
    const pctEl = document.getElementById('topic-pct');
    const barEl = document.getElementById('topic-bar');
    if (pctEl) pctEl.textContent = pct + '%';
    if (barEl) {
      barEl.style.width = pct + '%';
      barEl.classList.toggle('green', pct >= 80);
    }
    buildSidebar();
  }

  function updateTotalProgress() {
    const pct = progress.totalPct();
    const pctEl = document.getElementById('total-pct');
    const barEl = document.getElementById('total-bar');
    if (pctEl) pctEl.textContent = pct + '%';
    if (barEl) barEl.style.width = pct + '%';
    updateProgressRing(pct);
  }

  function updateProgressRing(pct) {
    const ring  = document.getElementById('ring-fg');
    const label = document.getElementById('ring-pct');
    if (!ring) return;
    const circ  = 2 * Math.PI * 54; // r=54 → ≈339.3
    ring.style.strokeDashoffset = circ * (1 - pct / 100);
    if (label) label.textContent = pct + '%';
  }

  function updateStats() {
    const { topicsDone, tasksDone, quizDone, streak } = progress.getStats();
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('stat-topics-done', topicsDone);
    set('stat-tasks-done',  tasksDone);
    set('stat-quiz-done',   quizDone);
    set('stat-streak',      streak);
  }

  // ── COUNTDOWN ──
  function updateCountdown() {
    const exam = new Date('2026-04-23T09:00:00');
    const now  = new Date();
    const diff = Math.ceil((exam - now) / (1000 * 60 * 60 * 24));

    const statEl = document.getElementById('stat-countdown');
    const sideEl = document.getElementById('exam-countdown');

    if (diff > 0) {
      if (statEl) statEl.textContent = diff;
      if (sideEl) sideEl.innerHTML = `<strong>${diff} Tage</strong>bis zum Abitur<br>23. April 2026`;
    } else {
      if (statEl) statEl.textContent = '🎓';
      if (sideEl) sideEl.innerHTML = `<strong>Viel Erfolg!</strong>Abitur 2026`;
    }
  }

  // ── FORMELZETTEL ──
  function openFormulaSheet() {
    const modal = document.getElementById('formula-modal');
    if (!modal) return;
    if (!formulaBuilt) {
      topicsRenderer.buildFormulaSheet();
      formulaBuilt = true;
    }
    modal.classList.add('open');
  }
  function closeFormulaSheet() {
    document.getElementById('formula-modal')?.classList.remove('open');
  }

  // ── FAVORITEN ──
  function openFavorites() {
    const modal = document.getElementById('favorites-modal');
    const body  = document.getElementById('favorites-modal-body');
    if (!modal || !body) return;

    const favIds = progress.getFavorites();
    if (favIds.length === 0) {
      body.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">★</div>
          <p>Noch keine Favoriten gespeichert.</p>
          <p class="empty-hint">Klicke den ★-Button bei einer Aufgabe, um sie hier zu speichern.</p>
        </div>`;
    } else {
      let html = '<div class="fav-list">';
      // Alle Tasks durchsuchen und favorisierte finden
      Object.entries(TASKS_DATA).forEach(([topicId, tasks]) => {
        const topicName = TOPICS_DATA[topicId]?.title || topicId;
        tasks.forEach(task => {
          if (favIds.includes(task.id)) {
            html += `
              <div class="fav-item">
                <div class="fav-item-content">
                  <div class="fav-item-topic">${topicName}</div>
                  <div class="fav-item-title">${task.title}</div>
                  <div class="fav-item-meta">${task.year} · ${task.difficulty}</div>
                </div>
                <div class="fav-item-actions">
                  <button class="fav-go-btn" onclick="app.closeFavorites();app.navigateTopic('${topicId}','tasks')">
                    Öffnen →
                  </button>
                  <button class="fav-remove-btn" onclick="progress.toggleFavorite('${task.id}');app.openFavorites()">
                    ✕
                  </button>
                </div>
              </div>`;
          }
        });
      });
      html += '</div>';
      body.innerHTML = html;
    }

    modal.classList.add('open');
  }

  function closeFavorites() {
    document.getElementById('favorites-modal')?.classList.remove('open');
  }

  // ── LERNPLAN ──
  function openLernplan() {
    const modal = document.getElementById('lernplan-modal');
    const body  = document.getElementById('lernplan-modal-body');
    if (!modal || !body) return;

    const weakest = progress.getWeakestTopics(); // sortiert: schwächste zuerst
    const days    = generateLernplan(weakest);

    const dayNames = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
    const today    = new Date().getDay(); // 0=So, 1=Mo ...
    const offset   = today === 0 ? 0 : (8 - today) % 7; // nächster Montag

    let html = `
      <p class="lernplan-intro">Basierend auf deinem Fortschritt – schwächste Themen zuerst. Passe den Plan nach Bedarf an.</p>
      <div class="lernplan-grid">`;

    days.forEach((day, i) => {
      const date = new Date();
      date.setDate(date.getDate() + offset + i);
      const dateStr = date.toLocaleDateString('de-DE', { day:'numeric', month:'short' });
      const isToday = (i === 0 && offset === 0) ||
                      (date.toDateString() === new Date().toDateString());

      html += `
        <div class="lernplan-day${isToday ? ' lernplan-today' : ''}">
          <div class="lernplan-day-header">
            <span class="lernplan-day-name">${dayNames[i % 7]}</span>
            <span class="lernplan-day-date">${dateStr}</span>
          </div>
          <div class="lernplan-topic">${day.topicName}</div>
          <ul class="lernplan-tasks">
            ${day.activities.map(a => `<li>${a}</li>`).join('')}
          </ul>
          <div class="lernplan-pct-bar">
            <div class="lernplan-pct-fill" style="width:${day.pct}%"></div>
          </div>
          <div class="lernplan-pct-label">${day.pct}% erreicht</div>
        </div>`;
    });

    html += '</div>';
    body.innerHTML = html;
    modal.classList.add('open');
  }

  function generateLernplan(weakest) {
    const plan = [];
    const activitySets = [
      ['📖 Theorie durchlesen', '✏️ 2 Aufgaben bearbeiten'],
      ['✏️ Aufgaben üben', '⚡ Quickcheck starten'],
      ['📖 Theorie wiederholen', '✏️ 3 Aufgaben bearbeiten', '⚡ Quickcheck'],
      ['✏️ Aufgaben unter Zeitdruck', '📝 Fehler analysieren'],
      ['🔁 Wiederholung', '⚡ Quickcheck wiederholen'],
      ['📖 Formeln auswendig', '✏️ 2 Aufgaben bearbeiten'],
      ['🏁 Generalprobe: Alle Themen', '⏱️ Zeitmanagement üben'],
    ];

    for (let i = 0; i < 7; i++) {
      const entry  = weakest[i % weakest.length];
      plan.push({
        topicName:  entry.topic.title,
        activities: activitySets[i],
        pct:        entry.pct,
        topicId:    entry.id
      });
    }
    return plan;
  }

  function closeLernplan() {
    document.getElementById('lernplan-modal')?.classList.remove('open');
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    navigateHome, navigateTopic, refreshTopicProgress,
    openSidebar, closeSidebar,
    openFormulaSheet, closeFormulaSheet,
    openFavorites, closeFavorites,
    openLernplan, closeLernplan
  };
})();
