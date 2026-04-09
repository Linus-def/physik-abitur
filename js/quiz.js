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

  const QUIZ_STOP_WORDS = new Set([
    'aber', 'alle', 'auch', 'aus', 'bei', 'beim', 'dann', 'dass', 'dem', 'den', 'der', 'des', 'die', 'dies',
    'diese', 'diesem', 'dieser', 'dieses', 'doch', 'dort', 'durch', 'eine', 'einem', 'einen', 'einer', 'eines',
    'einfach', 'einerseits', 'einig', 'einen', 'einer', 'eines', 'euch', 'euer', 'für', 'gibt', 'hat', 'hier',
    'hinter', 'ihr', 'ihre', 'ihren', 'ihres', 'immer', 'ist', 'jede', 'jeder', 'jedes', 'kein', 'keine',
    'kleine', 'können', 'lässt', 'mehr', 'muss', 'nach', 'noch', 'oder', 'ohne', 'sehr', 'sein', 'seine',
    'sich', 'sind', 'sobald', 'sowie', 'trotzdem', 'über', 'und', 'unter', 'vom', 'von', 'vor', 'warum',
    'weil', 'welche', 'welcher', 'welches', 'wenn', 'wird', 'wirkt', 'wurde', 'zuerst', 'zum', 'zur'
  ]);

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

      const theoryBtn = e.target.closest('.quiz-theory-btn');
      if (theoryBtn) { openTheoryReference(theoryBtn.dataset.targetId); return; }

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

    const categorized = {
      basics: [],
      advanced: [],
      exam: []
    };

    questions.forEach(question => {
      const explicitModeIds = Array.isArray(question.quizModes)
        ? question.quizModes
        : question.quizMode ? [question.quizMode] : [];

      if (explicitModeIds.length) {
        explicitModeIds.forEach(modeId => {
          if (categorized[modeId]) categorized[modeId].push(question);
        });
        return;
      }

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
        <p class="quiz-intro-desc">Wähle einen Modus aus. Beim Neustart werden die Fragen in diesem Modus neu gemischt. Nach jeder Antwort bekommst du direkt eine Erklärung und bei Bedarf einen passenden Sprung in die Theorie.</p>
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

    if (state.idx >= state.questions.length) {
      showResult(container);
      return;
    }

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
    if (!container) return;

    container.querySelectorAll('.quiz-option').forEach((btn, bi) => {
      btn.disabled = true;
      if (bi === q.correct) btn.classList.add('correct');
      else if (bi === i && !correct) btn.classList.add('wrong');
    });

    const exp = document.getElementById('quiz-exp');
    const expText = document.getElementById('quiz-exp-text');
    const expLabel = document.getElementById('quiz-exp-label');

    if (exp && expText) {
      const theoryRef = findTheoryReference(state.topicId, q);
      const explanation = buildExplanationHtml(q, correct, theoryRef);

      exp.classList.add('open');
      exp.classList.toggle('wrong-answer', !correct);
      exp.classList.toggle('correct-answer', correct);

      if (expLabel) {
        expLabel.textContent = correct ? '✅ Richtig – Warum das stimmt' : '❌ Falsch – Erklärung & Theorie';
      }

      expText.innerHTML = explanation;
      mathjaxTypeset([exp]);
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

  function openTheoryReference(targetId) {
    if (!state.topicId || !targetId || !app?.openTopicReference) return;
    app.openTopicReference(state.topicId, 'theory', targetId);
  }

  function buildExplanationHtml(question, correct, theoryRef) {
    const baseExplanation = question.explanation
      || 'Hier zählt nicht nur das Ergebnis, sondern der physikalische Zusammenhang dahinter. Nutze die Theorie-Verknüpfung, um den Gedankengang sauber nachzuvollziehen.';
    const conceptTitle = correct ? 'Warum das stimmt' : 'Wo der Denkfehler liegt';
    const conceptExplanation = buildConceptExplanation(question, theoryRef);
    const theoryPanel = buildTheoryPanel(theoryRef);
    const resourcePanel = buildResourceLinks(question, !correct);

    return `
      <div class="quiz-exp-basic">${baseExplanation}</div>
      <div class="quiz-exp-detailed quiz-exp-concept">
        <div class="quiz-exp-detailed-title">${conceptTitle}</div>
        <div class="quiz-exp-detailed-text">${conceptExplanation}</div>
      </div>
      ${theoryPanel}
      ${resourcePanel}
    `;
  }

  function buildConceptExplanation(question, theoryRef) {
    if (question.detailedExplanation) return question.detailedExplanation;
    if (theoryRef?.preview) return theoryRef.preview;
    return 'Der entscheidende Schritt ist hier, Ursache und Wirkung auseinanderzuhalten: Welche Größe treibt den Vorgang an, welche Größe reagiert darauf, und welche Annahme steckt in der Formel? Öffne den Theorieblock, um den Zusammenhang noch einmal sauber in Worten zu sehen.';
  }

  function buildTheoryPanel(theoryRef) {
    if (!theoryRef) return '';
    return `
      <div class="quiz-theory-panel">
        <div class="quiz-theory-kicker">Passender Theorieblock</div>
        <div class="quiz-theory-title">${theoryRef.title}</div>
        <div class="quiz-theory-text">${theoryRef.preview}</div>
        <div class="quiz-exp-actions">
          <button class="quiz-theory-btn" type="button" data-target-id="${theoryRef.targetId}">
            Theorie direkt öffnen
          </button>
        </div>
      </div>
    `;
  }

  function buildResourceLinks(question, includeFallback) {
    let links = Array.isArray(question.links) ? question.links : [];
    if (!links.length && includeFallback) {
      links = (TOPICS_DATA[state.topicId]?.resources || [])
        .slice(0, 2)
        .map(resource => ({
          title: resource.name,
          url: resource.url
        }));
    }
    if (!links.length) return '';

    return `
      <div class="quiz-exp-links">
        <div class="quiz-exp-links-title">Weiterlernen</div>
        <ul class="quiz-exp-links-list">
          ${links.map(link => {
            const url = link.url || '';
            const isYT = url.includes('youtube') || url.includes('youtu.be') || url.includes('simpleclub');
            const icon = isYT ? '📺' : '📖';
            return `<li><a href="${url}" target="_blank" rel="noopener noreferrer" class="quiz-exp-link">${icon} ${link.title}</a></li>`;
          }).join('')}
        </ul>
      </div>
    `;
  }

  function findTheoryReference(topicId, question) {
    const topic = TOPICS_DATA[topicId];
    if (!topic?.sections?.length) return null;

    const keywords = tokenize([
      question.question,
      question.explanation,
      question.detailedExplanation,
      (question.options || []).join(' ')
    ].join(' '));

    let best = null;

    topic.sections.forEach((section, index) => {
      const titleTokens = tokenize(section.title);
      const contentTokens = tokenize([
        section.text,
        section.note,
        section.deeper,
        (section.formulas || []).map(formula => `${formula.label || ''} ${formula.note || ''} ${formula.latex || ''}`).join(' ')
      ].join(' '));

      let score = 0;
      keywords.forEach(token => {
        if (titleTokens.includes(token)) score += 5;
        if (contentTokens.includes(token)) score += 2;
      });

      if (!best || score > best.score) {
        best = { score, section, index };
      }
    });

    const picked = best && best.score > 0 ? best : { section: topic.sections[0], index: 0 };
    return {
      title: picked.section.title,
      targetId: `theory-sec-${topicId}-${picked.index}`,
      preview: buildTheoryPreview(picked.section)
    };
  }

  function buildTheoryPreview(section) {
    const source = plainText(section.deeper || section.text || section.note || '');
    if (!source) return 'Öffne diesen Theorieblock für die ausführliche Erklärung, den typischen Denkfehler und die dazugehörigen Zusammenhänge.';

    const sentences = source
      .split(/(?<=[.!?])\s+/)
      .map(sentence => sentence.trim())
      .filter(Boolean);
    const preview = sentences.slice(0, 2).join(' ') || source;
    return preview.length > 300 ? `${preview.slice(0, 297).trim()}...` : preview;
  }

  function tokenize(text) {
    const cleaned = cleanText(text);
    if (!cleaned) return [];
    return [...new Set(
      cleaned
        .split(/[^a-z0-9äöüß]+/i)
        .map(token => token.trim())
        .filter(token => token.length > 2 && !QUIZ_STOP_WORDS.has(token))
    )];
  }

  function cleanText(text) {
    return plainText(text)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function plainText(text) {
    return String(text || '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\\\([\\s\\S]*?\\\)/g, ' ')
      .replace(/\\\[[\\s\\S]*?\\\]/g, ' ')
      .replace(/[{}_^=*]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return { render };
})();
