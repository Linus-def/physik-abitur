// ══ FORTSCHRITT (LocalStorage) ══
const progress = (() => {
  const KEY       = 'physik_abi_bw_v2';
  const FAV_KEY   = 'physik_abi_bw_favorites';
  const STREAK_KEY= 'physik_abi_bw_streak';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }

  function topic(id) {
    const s = load();
    return s[id] || { theoryRead: false, tasksDone: {}, quizScore: null };
  }

  // ── STREAK ──
  function loadStreak() {
    try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null }; }
    catch { return { count: 0, lastDate: null }; }
  }
  function saveStreak(st) { localStorage.setItem(STREAK_KEY, JSON.stringify(st)); }

  function touchStreak() {
    const today     = new Date().toISOString().slice(0, 10);
    const st        = loadStreak();
    if (st.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    st.count = (st.lastDate === yesterday) ? st.count + 1 : 1;
    st.lastDate = today;
    saveStreak(st);
  }

  function getStreak() { return loadStreak().count; }

  // ── FAVORITEN ──
  function loadFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
    catch { return []; }
  }
  function saveFavs(f) { localStorage.setItem(FAV_KEY, JSON.stringify(f)); }

  function getFavorites() { return loadFavs(); }
  function isFavorite(taskId) { return loadFavs().includes(taskId); }
  function toggleFavorite(taskId) {
    const favs = loadFavs();
    const idx  = favs.indexOf(taskId);
    if (idx >= 0) favs.splice(idx, 1); else favs.push(taskId);
    saveFavs(favs);
    fire();
  }

  // ── SCHREIB-FUNKTIONEN ──
  function setTheoryRead(id) {
    const s = load();
    if (!s[id]) s[id] = { theoryRead: false, tasksDone: {}, quizScore: null };
    s[id].theoryRead = true;
    save(s); touchStreak(); fire();
  }

  function setTaskRating(topicId, key, rating) {
    const s = load();
    if (!s[topicId]) s[topicId] = { theoryRead: false, tasksDone: {}, quizScore: null };
    s[topicId].tasksDone[key] = rating;
    save(s); touchStreak(); fire();
  }

  function setQuiz(topicId, correct, total) {
    const s = load();
    if (!s[topicId]) s[topicId] = { theoryRead: false, tasksDone: {}, quizScore: null };
        const prev = s[topicId].quizScore;
    // Fix #25: Nur speichern wenn Ergebnis besser oder kein vorheriger Eintrag
    if (!prev || correct / total > prev.correct / prev.total) {
      s[topicId].quizScore = { correct, total };
    }
    save(s); touchStreak(); fire();
  }

  function getTaskRating(topicId, key) {
    return (topic(topicId).tasksDone || {})[key] || null;
  }

  // ── PUNKTE-BERECHNUNG ──
  // 0–100 Prozent für ein Thema (30 Theorie + 40 Aufgaben + 30 Quiz)
  function topicPct(id) {
    const t = topic(id);
    const topicDef = TOPICS_DATA[id];
    if (!topicDef) return 0;
    let pts = 0, max = 0;

    max += 30;
    if (t.theoryRead) pts += 30;

    const tasks = TASKS_DATA[id] || [];
    let subtotalCount = 0;
    tasks.forEach(task => { subtotalCount += task.subtasks.length; });
    if (subtotalCount > 0) {
      max += 40;
      const done = Object.keys(t.tasksDone || {}).length;
      pts += Math.round(40 * Math.min(done / subtotalCount, 1));
    }

    if (topicDef.quickcheck?.length > 0) {
      max += 30;
      if (t.quizScore) pts += Math.round(30 * (t.quizScore.correct / t.quizScore.total));
    }

    return max > 0 ? Math.round((pts / max) * 100) : 0;
  }

  function totalPct() {
    const ids = Object.keys(TOPICS_DATA);
    if (!ids.length) return 0;
    return Math.round(ids.reduce((a, id) => a + topicPct(id), 0) / ids.length);
  }

  // Statistiken für Home-Screen (inkl. Streak)
  function getStats() {
    const ids = Object.keys(TOPICS_DATA);
    let topicsDone = 0, tasksDone = 0, quizDone = 0;
    ids.forEach(id => {
      const t = topic(id);
      if (topicPct(id) >= 80) topicsDone++;
      tasksDone += Object.keys(t.tasksDone || {}).length;
      if (t.quizScore) quizDone++;
    });
    return { topicsDone, tasksDone, quizDone, streak: getStreak() };
  }

  // Themen nach Fortschritt sortiert (schwächste zuerst)
  function getWeakestTopics() {
    return Object.keys(TOPICS_DATA)
      .map(id => ({ id, pct: topicPct(id), topic: TOPICS_DATA[id] }))
      .sort((a, b) => a.pct - b.pct);
  }

  function fire() { document.dispatchEvent(new CustomEvent('progressUpdated')); }

  return {
    topic, setTheoryRead, setTaskRating, setQuiz, getTaskRating,
    topicPct, totalPct, getStats, getWeakestTopics,
    getStreak, getFavorites, isFavorite, toggleFavorite
  };
})();
