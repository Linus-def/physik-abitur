// ══ QUIZ-MODUL ══
const quizModule = (() => {
  let state = { topicId: null, questions: [], idx: 0, score: 0, answered: false };
  let eventsBound = false;

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;
    container.addEventListener('click', e => {
      if (e.target.closest('#quiz-start-btn')) { startQuiz(); return; }
      const opt = e.target.closest('.quiz-option');
      if (opt) { answer(parseInt(opt.dataset.i, 10)); return; }
      if (e.target.closest('#quiz-next')) { next(); return; }
      if (e.target.closest('.quiz-restart-btn')) { render(state.topicId); return; }
      if (e.target.closest('#quiz-exit-btn')) { showStart(); return; }
    });
  }

  function render(topicId) {
      eventsBound = false; // Fix #23: Events nach Tab-Wechsel neu binden
state = { topicId, questions: [...(TOPICS_DATA[topicId]?.quickcheck || [])], idx: 0, score: 0, answered: false };
    showStart();
  }

  function showStart() {
    const container = document.getElementById('tab-quiz');
    if (!container) return;
    const total = state.questions.length;
    const topicTitle = TOPICS_DATA[state.topicId]?.title || '';
    container.innerHTML = `
      <div class="quiz-intro">
        <div class="quiz-intro-icon">⚡</div>
        <h3 class="quiz-intro-title">Quickcheck</h3>
        <p class="quiz-intro-sub">${topicTitle}</p>
        <div class="quiz-intro-meta">${total} Fragen · Multiple Choice</div>
        <p class="quiz-intro-desc">Teste dein Wissen mit gezielten Fragen! Du erhältst nach jeder Antwort sofortiges Feedback mit ausführlichen Erklärungen.</p>
        <button class="quiz-start-btn" id="quiz-start-btn">Quiz starten →</button>
      </div>`;
    bindEvents(container);
  }

  function startQuiz() {
    state.idx = 0;
    state.score = 0;
    state.answered = false;
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
        <button class="quiz-exit-btn" id="quiz-exit-btn">← Beenden</button>
        <span class="quiz-step">Frage ${state.idx + 1} / ${total}</span>
        <div class="quiz-bar-wrap progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" data-i="${i}">
              ${opt}
            </button>`).join('')}
        </div>
        <div class="quiz-explanation" id="quiz-exp">
          <div class="quiz-explanation-label" id="quiz-exp-label">Erklärung</div>
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
    container.querySelectorAll('.quiz-option').forEach((btn, bi) => {
      btn.disabled = true;
      if (bi === q.correct) btn.classList.add('correct');
      else if (bi === i && !correct) btn.classList.add('wrong');
    });

    if (q.explanation) {
      const exp = document.getElementById('quiz-exp');
      const expText = document.getElementById('quiz-exp-text');
      const expLabel = document.getElementById('quiz-exp-label');
      if (exp && expText) {
        // Basis-Erklärung
        let html = `<div class="quiz-exp-basic">${q.explanation}</div>`;

        // Bei falscher Antwort: detaillierte Erklärung + Links
        if (!correct) {
          if (expLabel) {
            expLabel.textContent = '❌ Falsch – Ausführliche Erklärung';
            expLabel.style.color = '#f87171';
          }

          if (q.detailedExplanation) {
            html += `
              <div class="quiz-exp-detailed">
                <div class="quiz-exp-detailed-title">🔍 Wo liegt der Denkfehler?</div>
                <div class="quiz-exp-detailed-text">${q.detailedExplanation}</div>
              </div>`;
          }

          if (q.links && q.links.length > 0) {
            html += `
              <div class="quiz-exp-links">
                <div class="quiz-exp-links-title">📚 Zum Nachlesen & Nachschauen</div>
                <ul class="quiz-exp-links-list">
                  ${q.links.map(l => {
                    const isYT = l.url.includes('youtube') || l.url.includes('youtu.be') || l.url.includes('simpleclub');
                    const icon = isYT ? '📺' : '📖';
                    return `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer" class="quiz-exp-link">${icon} ${l.title}</a></li>`;
                  }).join('')}
                </ul>
              </div>`;
          } else if (TOPICS_DATA[state.topicId]?.resources?.length) {
            // Fallback: Ressourcen des Themas anzeigen
            const res = TOPICS_DATA[state.topicId].resources.slice(0, 3);
            html += `
              <div class="quiz-exp-links">
                <div class="quiz-exp-links-title">📚 Thema nochmal nachschlagen</div>
                <ul class="quiz-exp-links-list">
                  ${res.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer" class="quiz-exp-link">${r.icon} ${r.name}</a></li>`).join('')}
                </ul>
              </div>`;
          }
        } else {
          if (expLabel) {
            expLabel.textContent = '✅ Richtig!';
            expLabel.style.color = '#4ade80';
          }
        }

        expText.innerHTML = html;
        exp.classList.add('open');
        if (!correct) exp.classList.add('wrong-answer');
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
        <div class="quiz-result-actions">
          <button class="quiz-restart-btn">Nochmal starten</button>
        </div>
      </div>`;
    progress.setQuiz(state.topicId, score, total);
    app.refreshTopicProgress(state.topicId);
  }

  return { render };
})();
