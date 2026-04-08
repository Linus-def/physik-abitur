// ══ QUIZ-MODUL ══
const quizModule = (() => {
  const MODE_META = {
    basics: {
      title: 'Grundlagen',
      icon: '🧠',
      desc: 'Definitionen, Kerngedanken und leichte Einstiegsfragen zum Thema.'
    },
    advanced: {
      title: 'Rechnen & Anwenden',
      icon: '🔥',
      desc: 'Rechenwege, Formelanwendung und mehrstufige Standardaufgaben.'
    },
    exam: {
      title: 'Erklären & Begründen',
      icon: '🎯',
      desc: 'Prüfungsnahe Fragen mit Deutung, Begründung und Einordnung.'
    }
  };

  let state = {
    topicId: null,
    questions: [],
    orderedQuestions: [],
    modes: [],
    selectedMode: null,
    idx: 0,
    score: 0,
    answered: false
  };
  let eventsBound = false;

  function bindEvents(container) {
    if (eventsBound) return;
    eventsBound = true;
    container.addEventListener('click', e => {
      const modeBtn = e.target.closest('.quiz-mode-btn');
      if (modeBtn) { startQuiz(modeBtn.dataset.mode); return; }
      const opt = e.target.closest('.quiz-option');
      if (opt) { answer(parseInt(opt.dataset.i, 10)); return; }
      if (e.target.closest('#quiz-next')) { next(); return; }
      if (e.target.closest('.quiz-restart-btn')) { startQuiz(state.selectedMode); return; }
      if (e.target.closest('.quiz-change-mode-btn')) { showStart(); return; }
      if (e.target.closest('#quiz-exit-btn')) { showStart(); return; }
    });
  }

  function render(topicId) {
    const orderedQuestions = (TOPICS_DATA[topicId]?.quickcheck || [])
      .map((q, index) => ({
        ...q,
        quizNumber: Number.isFinite(q.quizNumber) ? q.quizNumber : index + 1,
        originalIndex: index
      }))
      .sort((a, b) => a.quizNumber - b.quizNumber || a.originalIndex - b.originalIndex);

    state = {
      topicId,
      orderedQuestions,
      questions: [],
      modes: buildModes(orderedQuestions),
      selectedMode: null,
      idx: 0,
      score: 0,
      answered: false
    };
    showStart();
  }

  function buildModes(questions) {
    if (!questions.length) return [];

    const explicitModes = Object.keys(MODE_META).map(modeId => {
      const items = questions.filter(q => {
        if (Array.isArray(q.quizModes)) return q.quizModes.includes(modeId);
        return q.quizMode === modeId;
      });
      return {
        id: modeId,
        ...MODE_META[modeId],
        questions: items
      };
    });

    const hasExplicitModes = explicitModes.some(mode => mode.questions.length > 0);
    if (hasExplicitModes) {
      return explicitModes.filter(mode => mode.questions.length > 0);
    }

    const categorized = {
      basics: [],
      advanced: [],
      exam: []
    };

    questions.forEach(question => {
      categorized[classifyQuestionMode(question)].push(question);
    });

    if (categorized.basics.length >= 3 && categorized.advanced.length >= 3 && categorized.exam.length >= 3) {
      return Object.keys(MODE_META)
        .map(modeId => ({ id: modeId, ...MODE_META[modeId], questions: categorized[modeId] }))
        .filter(mode => mode.questions.length > 0);
    }

    const total = questions.length;
    const basicsEnd = Math.max(6, Math.ceil(total * 0.4));
    const advancedEnd = Math.max(basicsEnd + 5, Math.ceil(total * 0.75));

    return [
      { id: 'basics', ...MODE_META.basics, questions: questions.slice(0, basicsEnd) },
      { id: 'advanced', ...MODE_META.advanced, questions: questions.slice(basicsEnd, advancedEnd) },
      { id: 'exam', ...MODE_META.exam, questions: questions.slice(advancedEnd) }
    ].filter(mode => mode.questions.length > 0);
  }

  function classifyQuestionMode(question) {
    const text = `${question.question || ''} ${question.explanation || ''}`.toLowerCase();
    const explainPattern = /(warum|erklär|begründe|beurteile|nimm stellung|was folgt|welche aussage|beobachtet man|passiert|vergleich|vergleiche|deute|interpretiere)/;
    const calcPattern = /(berechne|bestimme|wie groß|wieviel|wellenlänge|frequenz|strom|spannung|kraft|energie|periode|geschwindigkeit|\d)/;

    if (explainPattern.test(text)) return 'exam';
    if (calcPattern.test(text)) return 'advanced';
    return 'basics';
  }

  function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function currentMode() {
    return state.modes.find(mode => mode.id === state.selectedMode) || null;
  }

  function showStart() {
    const container = document.getElementById('tab-quiz');
    if (!container) return;
    const topicTitle = TOPICS_DATA[state.topicId]?.title || '';
    const modeCards = state.modes.map(mode => `
      <button class="quiz-mode-btn" data-mode="${mode.id}">
        <span class="quiz-mode-icon">${mode.icon}</span>
        <span class="quiz-mode-copy">
          <span class="quiz-mode-title">${mode.title}</span>
          <span class="quiz-mode-desc">${mode.desc}</span>
        </span>
        <span class="quiz-mode-count">${mode.questions.length} Fragen</span>
      </button>
    `).join('');

    container.innerHTML = `
      <div class="quiz-intro">
        <div class="quiz-intro-icon">⚡</div>
        <h3 class="quiz-intro-title">Quickcheck</h3>
        <p class="quiz-intro-sub">${topicTitle}</p>
        <div class="quiz-intro-meta">${state.orderedQuestions.length} Fragen gesamt · jedes Mal neu gemischt</div>
        <p class="quiz-intro-desc">Wähle einen Modus aus. Beim Neustart werden die Fragen in diesem Modus neu gemischt. Die Modi sind stärker daran orientiert, ob du Grundlagen sichern, rechnen oder typische Abi-Begründungen trainieren willst.</p>
        <div class="quiz-mode-list">${modeCards}</div>
      </div>`;
    bindEvents(container);
  }

  function startQuiz(modeId) {
    const mode = state.modes.find(entry => entry.id === modeId) || state.modes[0];
    if (!mode) return;

    state.selectedMode = mode.id;
    state.questions = shuffleQuestions(mode.questions);
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
    const mode = currentMode();
    state.answered = false;
    const total = state.questions.length;
    const pct = Math.round((state.idx / total) * 100);
    container.innerHTML = `
      <div class="quiz-header">
        <button class="quiz-exit-btn" id="quiz-exit-btn">← Beenden</button>
        <span class="quiz-step">${mode ? `${mode.title} · ` : ''}Frage ${state.idx + 1} / ${total}</span>
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
    mathjaxTypeset([container]);
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
        mathjaxTypeset([exp]);
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
    const mode = currentMode();
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
        <div class="quiz-result-mode">${mode ? `${mode.icon} ${mode.title}` : 'Quickcheck'}</div>
        <div class="quiz-result-score">${score}/${total}</div>
        <div class="quiz-result-of">${pct}% richtig</div>
        <div class="quiz-result-msg">${msg}</div>
        <div class="quiz-result-actions">
          <button class="quiz-restart-btn">Nochmal starten</button>
          <button class="quiz-change-mode-btn">Anderen Modus wählen</button>
        </div>
      </div>`;
    progress.setQuiz(state.topicId, score, total);
    app.refreshTopicProgress(state.topicId);
  }

  return { render };
})();
