// ══ QUIZ-MODUL ══
const quizModule = (() => {
  let state = { topicId: null, questions: [], idx: 0, score: 0, answered: false };
  let eventsBound = false;

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;
    container.addEventListener('click', e => {
      const opt = e.target.closest('.quiz-opt');
      if (opt) { answer(parseInt(opt.dataset.i, 10)); return; }
      if (e.target.closest('#quiz-next')) { next(); return; }
      if (e.target.closest('.quiz-result-btn')) { restart(); return; }
    });
  }

  function render(topicId) {
    state = { topicId, questions: [...(TOPICS_DATA[topicId]?.quickcheck || [])], idx: 0, score: 0, answered: false };
    showQuestion();
  }

  function showQuestion() {
    const container = document.getElementById('tab-quiz');
    if (!container) return;

    if (state.idx >= state.questions.length) { showResult(container); return; }

    const q = state.questions[state.idx];
    state.answered = false;
    const total = state.questions.length;
    const pct = Math.round((state.idx / total) * 100);

    container.innerHTML = `
      <div class="quiz-header">
        <span class="quiz-step">Frage ${state.idx + 1} / ${total}</span>
        <div class="quiz-bar-wrap progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-q-text">${q.question}</div>

        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt" data-i="${i}">
              ${opt}
            </button>`).join('')}
        </div>

        <div class="quiz-explanation" id="quiz-exp">
          <div class="quiz-explanation-label">Erklärung</div>
          <div id="quiz-exp-text"></div>
        </div>

        <button class="quiz-next-btn" id="quiz-next">
          ${state.idx + 1 < total ? 'Weiter →' : 'Ergebnis anzeigen →'}
        </button>
      </div>`;

    bindEvents(container);
    if (window.MathJax) MathJax.typesetPromise([container]);
  }

  function answer(i) {
    if (state.answered) return;
    state.answered = true;
    const q = state.questions[state.idx];
    const correct = i === q.correct;
    if (correct) state.score++;

    const container = document.getElementById('tab-quiz');
    container.querySelectorAll('.quiz-opt').forEach((btn, bi) => {
      btn.disabled = true;
      if (bi === q.correct) btn.classList.add('correct');
      else if (bi === i && !correct) btn.classList.add('wrong');
    });

    if (q.explanation) {
      const exp = document.getElementById('quiz-exp');
      const expText = document.getElementById('quiz-exp-text');
      if (exp && expText) {
        expText.innerHTML = q.explanation;
        exp.classList.add('open');
        if (window.MathJax) MathJax.typesetPromise([exp]);
      }
    }

    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) nextBtn.classList.add('show');
  }

  function next() {
    state.idx++;
    showQuestion();
  }

  function showResult(container) {
    const { score, questions: qs } = state;
    const total = qs.length;
    const pct = Math.round(score / total * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
    const msg = pct === 100 ? 'Perfekt! Alle richtig!'
      : pct >= 80 ? 'Sehr gut! Fast alles richtig.'
      : pct >= 60 ? 'Gut! Ein paar Lücken schließen.'
      : pct >= 40 ? 'Theorie nochmal lesen und wiederholen.'
      : 'Dieses Thema braucht mehr Übung.';

    container.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-result-emoji">${emoji}</div>
        <div class="quiz-result-score">${score}/${total}</div>
        <div class="quiz-result-of">${pct}% richtig</div>
        <div class="quiz-result-msg">${msg}</div>
        <button class="quiz-result-btn">Nochmal starten</button>
      </div>`;

    progress.setQuiz(state.topicId, score, total);
    app.refreshTopicProgress(state.topicId);
  }

  function restart() { render(state.topicId); }

  return { render, answer, next, restart };
})();
