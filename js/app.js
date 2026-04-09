// ══ APP – ROUTER, NAVIGATION, FEATURES ══
const app = (() => {

  let currentTopicId = null;
  let currentTab = 'theory';
  let formulaBuilt = false;
  let pendingTaskJump = null;
  let pendingTheoryJump = null;

  function typesetMath(elements) {
    if (window.mathjaxTypeset) {
      return window.mathjaxTypeset(elements);
    }
    if (window.MathJax && MathJax.typesetPromise) {
      return MathJax.typesetPromise(elements);
    }
    return Promise.resolve();
  }

  function highlightAndScroll(target, cls) {
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!cls) return;
    target.classList.add(cls);
    window.setTimeout(() => target.classList.remove(cls), 1800);
  }

  // ── INIT ──
  function init() {
    buildSidebar();
    topicsRenderer.renderCards();
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // Tab-Klicks
    document.getElementById('topic-tabs')?.addEventListener('click', e => {
      const tab = e.target.closest('.tab');
      if (tab) switchTab(tab.dataset.tab);
    });

    // Hamburger & Overlay
    document.getElementById('hamburger')?.addEventListener('click', openSidebar);
    document.getElementById('overlay')?.addEventListener('click', closeSidebar);

    // Sidebar-Buttons
    document.getElementById('btn-favorites')?.addEventListener('click', openFavorites);
    document.getElementById('btn-formula')?.addEventListener('click', openFormulaSheet);

    // Zurück-Button
    document.getElementById('btn-back')?.addEventListener('click', navigateHome);

    // Lightbox schließen
    document.getElementById('lightbox')?.addEventListener('click', e => {
      if (e.target === e.currentTarget || e.target.closest('#btn-lightbox-close')) closeLightbox();
    });

    // Modals schließen (X-Button + Klick auf Overlay-Hintergrund)
    document.getElementById('btn-formula-close')?.addEventListener('click', closeFormulaSheet);
    document.getElementById('formula-modal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeFormulaSheet(); });
    document.getElementById('formula-modal-body')?.addEventListener('click', e => {
      const formulaLink = e.target.closest('.formula-topic-nav-link');
      if (!formulaLink) return;
      const target = document.getElementById(formulaLink.dataset.targetId);
      highlightAndScroll(target, 'modal-topic-section-highlight');
    });

    document.getElementById('btn-favorites-close')?.addEventListener('click', closeFavorites);

    // Theorie-Akkordeon (Event-Delegation, einmalig)
    document.getElementById('tab-theory')?.addEventListener('click', e => {
      const trigger = e.target.closest('.accordion-trigger');
      if (trigger) {
        topicsRenderer.toggleAcc(trigger.dataset.accId);
        return;
      }

      const jumpBtn = e.target.closest('.theory-jump-btn');
      if (jumpBtn) {
        const target = document.getElementById(jumpBtn.dataset.targetId);
        highlightAndScroll(target, 'theory-section-highlight');
        return;
      }

      const formulaChip = e.target.closest('.theory-formula-chip');
      if (formulaChip) {
        const target = document.getElementById(formulaChip.dataset.targetId);
        highlightAndScroll(target, 'theory-section-highlight');
        return;
      }

      const taskLink = e.target.closest('.theory-task-link');
      if (taskLink) {
        openTaskReference(taskLink.dataset.topicId, taskLink.dataset.taskId);
        return;
      }

      const patternLink = e.target.closest('.theory-task-pattern-link');
      if (patternLink) {
        openTaskReference(patternLink.dataset.topicId, patternLink.dataset.taskId);
        return;
      }

      const relatedTopicLink = e.target.closest('.related-topic-link');
      if (relatedTopicLink) {
        openTopicReference(relatedTopicLink.dataset.topicId, relatedTopicLink.dataset.tab || 'theory');
      }
    });

    // Favoriten-Modal Aktionen (Event-Delegation, einmalig)
    document.getElementById('favorites-modal')?.addEventListener('click', e => {
      const goBtn = e.target.closest('.fav-go-btn');
      const removeBtn = e.target.closest('.fav-remove-btn');
      if (goBtn) { closeFavorites(); navigateTopic(goBtn.dataset.topicId, 'tasks'); }
      if (removeBtn) { progress.toggleFavorite(removeBtn.dataset.taskId); openFavorites(); }
    });

    // Fortschritt-Events
    document.addEventListener('progressUpdated', () => {
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
    const validTabs = ['theory', 'tasks', 'quiz'];
    const safeTab = validTabs.includes(tab) ? tab : 'theory';
    if (TOPICS_DATA[tid]) navigateTopic(tid, safeTab);
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
    buildSidebar();

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
      typesetMath([panel]);
      if (pendingTheoryJump && pendingTheoryJump.topicId === currentTopicId) {
        window.setTimeout(() => {
          const target = document.getElementById(pendingTheoryJump.targetId);
          highlightAndScroll(target, 'theory-section-highlight');
          pendingTheoryJump = null;
        }, 60);
      }
    } else if (tab === 'tasks') {
      tasksRenderer.render(currentTopicId);
      if (pendingTaskJump && pendingTaskJump.topicId === currentTopicId) {
        window.setTimeout(() => {
          tasksRenderer.jumpToTask(pendingTaskJump.taskId);
          pendingTaskJump = null;
        }, 60);
      }
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
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="nav-item${currentTopicId === topic.id ? ' active' : ''}" data-id="${topic.id}">
          <div class="nav-item-content">
            <div class="nav-item-name">${topic.title}</div>
            <div class="nav-item-meta">
              <span class="nav-stars">${topicsRenderer.starsHtml(topic.priority)}</span>
              <span class="nav-topic-kind">Theorie · Aufgaben · Quiz</span>
            </div>
          </div>
        </button>`;
      li.querySelector('button').addEventListener('click', () => navigateTopic(topic.id));
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

  function refreshTopicProgress(topicId) {
    buildSidebar();
  }

  function openTaskReference(topicId, taskId) {
    pendingTaskJump = { topicId, taskId };
    if (currentTopicId !== topicId) {
      navigateTopic(topicId, 'tasks');
      return;
    }
    switchTab('tasks');
  }

  function openTopicReference(topicId, tab, targetId) {
    if (tab === 'theory' && targetId) {
      pendingTheoryJump = { topicId, targetId };
    } else {
      pendingTheoryJump = null;
    }
    if (currentTopicId !== topicId) {
      navigateTopic(topicId, tab || 'theory');
      return;
    }
    switchTab(tab || 'theory');
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
                  <button class="fav-go-btn" data-topic-id="${topicId}">
                    Öffnen →
                  </button>
                  <button class="fav-remove-btn" data-task-id="${task.id}">
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

  document.addEventListener('DOMContentLoaded', init);

  return {
    navigateHome, navigateTopic, refreshTopicProgress,
    openTaskReference, openTopicReference,
    openSidebar, closeSidebar,
    openFormulaSheet, closeFormulaSheet,
    openFavorites, closeFavorites
  };
})();
