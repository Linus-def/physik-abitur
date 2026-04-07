// ===== THEMEN-DATEN =====
// Alle Inhalte basieren auf dem BW-Bildungsplan und dem Themen-Ranking 2026

const TOPICS_DATA = {

  // ══════════════════════════════════════════════════════
  // 1. MECHANISCHE SCHWINGUNGEN ★★★
  // ══════════════════════════════════════════════════════
  schwingungen: {
    id: 'schwingungen',
    title: 'Mechanische Schwingungen',
    priority: 3,
    badge: 'Jedes Jahr seit 2018',
    funFact: '💡 Die Isochronie des Fadenpendels wurde von Galileo Galilei entdeckt – laut Legende beim Beobachten einer schwingenden Kirchenlampe.',
    sections: [
      {
        title: 'Was ist eine harmonische Schwingung?',
        text: `<p>Eine <strong>harmonische Schwingung</strong> liegt vor, wenn die rücktreibende Kraft proportional zur Auslenkung ist:</p>
<p>\\(F_{\\text{rück}} = -D \\cdot s\\) &nbsp; (bei Federpendel, Fadenpendel im kleinen Winkel)</p>
<p>Typische Beispiele: Federpendel, Fadenpendel (kleine Winkel ≲ 5°), schwimmende Boje, LC-Schwingkreis.</p>`,
        formulas: [
          { label: 'Differentialgleichung', latex: '\\ddot{s} + \\omega_0^2 \\cdot s = 0', note: 'Kennzeichen harm. Schwingung' },
          { label: 'Kreisfrequenz', latex: '\\omega_0 = 2\\pi f = \\frac{2\\pi}{T}' },
          { label: 'Periodendauer Feder', latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', note: 'k = Federkonstante [N/m]' },
          { label: 'Periodendauer Faden', latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}', note: 'L = Länge, g = 9{,}81 m/s²' },
        ],
        note: 'Bei der harmonischen Schwingung ist T unabhängig von der Amplitude (Isochronie)!',
        deeper: `<p><strong>Nachweis harmonische Schwingung:</strong> Im F-s-Diagramm liegt ein linearer Zusammenhang durch den Ursprung vor. Im a-s-Diagramm: Gerade mit negativer Steigung (da \\(a = -\\omega^2 s\\)).</p>
<p><strong>Wichtige Grenze:</strong> Das Fadenpendel ist nur für Auslenkungswinkel ≲ 5° harmonisch. Bei größeren Winkeln wächst T mit der Amplitude an.</p>`
      },
      {
        title: 'Beschreibung der Bewegung',
        text: `<p>Die Auslenkung, Geschwindigkeit und Beschleunigung sind Sinusfunktionen der Zeit.</p>`,
        formulas: [
          { label: 'Auslenkung', latex: 's(t) = \\hat{s}\\cdot\\sin(\\omega_0 t + \\varphi_0)' },
          { label: 'Geschwindigkeit', latex: 'v(t) = \\hat{s}\\cdot\\omega_0\\cdot\\cos(\\omega_0 t + \\varphi_0)' },
          { label: 'Beschleunigung', latex: 'a(t) = -\\hat{s}\\cdot\\omega_0^2\\cdot\\sin(\\omega_0 t + \\varphi_0)' },
          { label: 'Max. Geschwindigkeit', latex: 'v_{\\max} = \\hat{s}\\cdot\\omega_0 = \\hat{s}\\cdot 2\\pi f' },
        ],
        deeper: `<p><strong>Phasenlage:</strong> Auslenkung und Beschleunigung sind stets <em>gegenphasig</em> (180° Phasenverschiebung). Die Geschwindigkeit eilt der Auslenkung um 90° vor.</p>
<p><strong>Merksatz:</strong> In der Gleichgewichtslage (s = 0): v maximal, a = 0. An den Umkehrpunkten (s = ±ŝ): v = 0, a maximal.</p>`
      },
      {
        title: 'Energie bei harmonischen Schwingungen',
        text: `<p>Die Gesamtenergie bleibt bei ungedämpfter Schwingung konstant und pendelt zwischen kinetischer und potentieller Energie.</p>`,
        formulas: [
          { label: 'Kinetische Energie', latex: 'E_{\\text{kin}} = \\frac{1}{2}m v^2' },
          { label: 'Pot. Energie (Feder)', latex: 'E_{\\text{pot}} = \\frac{1}{2}k s^2' },
          { label: 'Gesamtenergie', latex: 'E_{\\text{ges}} = \\frac{1}{2}k\\hat{s}^2 = \\frac{1}{2}m v_{\\max}^2', note: 'konstant!' },
        ],
        note: 'Im Gleichgewicht: Ekin maximal, Epot = 0. An Umkehrpunkten: Ekin = 0, Epot maximal.',
        deeper: `<p><strong>Gedämpfte Schwingung:</strong> Amplitude klingt exponentiell ab (\\(\\hat{s}(t) = \\hat{s}_0 e^{-\\delta t}\\)), Energie nimmt quadratisch dazu ab. Frequenz bleibt bei schwacher Dämpfung nahezu konstant.</p>
<p><strong>Energiediagramm:</strong> \\(E_{\\text{kin}}\\) und \\(E_{\\text{pot}}\\) schwingen gegeneinander. Ihr zeitlicher Mittelwert beträgt jeweils \\(E_{\\text{ges}}/2\\).</p>`
      },
      {
        title: 'Erzwungene Schwingungen & Resonanz',
        text: `<p>Wird ein Schwinger von außen mit der Erregerfrequenz \\(f_E\\) angetrieben, spricht man von einer <strong>erzwungenen Schwingung</strong>.</p>
<p>Bei <strong>Resonanz</strong> gilt \\(f_E = f_0\\): Die Amplitude wird maximal.</p>`,
        formulas: [
          { label: 'Resonanzbedingung', latex: 'f_E = f_0', note: 'Erreger = Eigenfrequenz' },
        ],
        note: 'Resonanz kann gefährlich sein (Brücken, Gebäude, Bojen). Starke Dämpfung senkt die Resonanzamplitude.',
        deeper: `<p>Im Resonanzfall ist die Phasenverschiebung zwischen Erreger und Schwinger genau 90°. Das System nimmt dann maximal Energie auf.</p>
<p><strong>Historisches Beispiel:</strong> Die Tacoma-Narrows-Brücke (1940) kollabierte durch Resonanz mit Windwirbeln – ein klassisches Resonanz-Desaster.</p>`
      }
    ],
    quickcheck: [
      {
        question: 'Ein Federpendel hat \\(m = 400\\,\\text{g}\\) und \\(k = 10\\,\\text{N/m}\\). Wie groß ist die Periodendauer?',
        options: ['\\(T \\approx 1{,}26\\,\\text{s}\\)', '\\(T \\approx 0{,}63\\,\\text{s}\\)', '\\(T \\approx 2{,}51\\,\\text{s}\\)', '\\(T \\approx 0{,}20\\,\\text{s}\\)'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0{,}4/10} \\approx 1{,}26\\,\\text{s}\\)'
      },
      {
        question: 'Welches Merkmal kennzeichnet eine harmonische Schwingung?',
        options: [
          'Die Amplitude nimmt mit der Zeit ab.',
          'Die rücktreibende Kraft ist proportional zur Auslenkung.',
          'Die Periodendauer hängt von der Amplitude ab.',
          'Die Schwingung muss mit Resonanz angeregt werden.'
        ],
        correct: 1,
        explanation: 'Definitionsmerkmal: \\(F_{\\text{rück}} = -D \\cdot s\\). Daraus folgt die DGL \\(\\ddot{s} + \\omega^2 s = 0\\).'
      },
      {
        question: 'Ein Fadenpendel schwingt mit \\(T = 2\\,\\text{s}\\). Die Fadenlänge wird vervierfacht. Wie ändert sich T?',
        options: ['T verdoppelt sich auf 4 s.', 'T vervierfacht sich auf 8 s.', 'T bleibt gleich.', 'T halbiert sich auf 1 s.'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{L/g}\\), also \\(T \\propto \\sqrt{L}\\). Bei 4-fachem L: \\(T_{\\text{neu}} = T \\cdot \\sqrt{4} = 4\\,\\text{s}\\).'
      },
      {
        question: 'Wo ist bei harmonischer Schwingung die kinetische Energie maximal?',
        options: ['An den Umkehrpunkten', 'In der Gleichgewichtslage', 'Bei halber Amplitude', 'Immer gleich groß'],
        correct: 1,
        explanation: 'In der Gleichgewichtslage: \\(s = 0\\) → \\(E_{\\text{pot}} = 0\\). Die gesamte Energie ist kinetisch.'
      },
      {
        question: 'Bei welcher Erregerfrequenz tritt Resonanz auf?',
        options: [
          'Bei der doppelten Eigenfrequenz',
          'Bei der halben Eigenfrequenz',
          'Wenn Erregerfrequenz gleich Eigenfrequenz ist',
          'Resonanz ist unabhängig von der Frequenz'
        ],
        correct: 2,
        explanation: 'Resonanz tritt auf, wenn \\(f_E = f_0\\). Dann wird die Amplitude maximal.'
      },
      {
        question: 'Ein Schwingungsystem hat \\(T = 1{,}0\\,\\text{s}\\) und Amplitude \\(\\hat{s} = 4\\,\\text{cm}\\). Wie groß ist \\(v_{\\max}\\)?',
        options: ['\\(v_{\\max} \\approx 25{,}1\\,\\text{cm/s}\\)', '\\(v_{\\max} = 4{,}0\\,\\text{cm/s}\\)', '\\(v_{\\max} \\approx 12{,}6\\,\\text{cm/s}\\)', '\\(v_{\\max} \\approx 50{,}3\\,\\text{cm/s}\\)'],
        correct: 0,
        explanation: '\\(v_{\\max} = \\hat{s} \\cdot \\omega = \\hat{s} \\cdot 2\\pi/T = 0{,}04 \\cdot 2\\pi/1{,}0 \\approx 0{,}251\\,\\text{m/s} = 25{,}1\\,\\text{cm/s}\\)'
      },
      {
        question: 'Ein gedämpftes System schwingt mit abnehmender Amplitude. Was ändert sich NICHT?',
        options: [
          'Die Amplitude',
          'Die gespeicherte Energie',
          'Die Frequenz (bei schwacher Dämpfung)',
          'Die Schwingungsdauer einer einzelnen Periode'
        ],
        correct: 2,
        explanation: 'Bei schwacher Dämpfung bleibt die Frequenz nahezu gleich wie bei der ungedämpften Schwingung. Nur Amplitude und Energie nehmen ab.'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Schwingungen', desc: 'Vollständige Theorie mit Animationen und Aufgaben', url: 'https://www.leifiphysik.de/mechanik/mechanische-schwingungen' },
      { icon: '📺', name: 'Simple Club – Schwingungen', desc: 'Kompakte Videoerklärungen für Abitur', url: 'https://www.simpleclub.com/lessons/physik-schwingungen' },
      { icon: '🔬', name: 'PhET: Masses & Springs', desc: 'Interaktive Federpendel-Simulation', url: 'https://phet.colorado.edu/de/simulations/masses-and-springs' },
      { icon: '📺', name: 'Khan Academy – Oscillations', desc: 'Englische Erklärvideos zur harmonischen Schwingung', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 2. ELEKTRODYNAMIK / ELEKTROMAGNETISMUS ★★★
  // ══════════════════════════════════════════════════════
  elektrodynamik: {
    id: 'elektrodynamik',
    title: 'Elektrodynamik & Elektromagnetismus',
    priority: 3,
    badge: 'Jedes Jahr seit 2018',
    funFact: '💡 Michael Faraday entdeckte die elektromagnetische Induktion 1831 – ohne jede Mathematik. Er dachte in Feldlinien, nicht in Gleichungen.',
    sections: [
      {
        title: 'Lorentzkraft',
        text: `<p>Auf eine bewegte Ladung oder einen stromdurchflossenen Leiter in einem Magnetfeld wirkt die <strong>Lorentzkraft</strong>. Die Richtung bestimmt man mit der <strong>Rechte-Hand-Regel</strong>:</p>
<p><em>Daumen: Stromrichtung → Zeigefinger: B-Feldrichtung → Mittelfinger: Kraftrichtung</em></p>`,
        formulas: [
          { label: 'Lorentzkraft (Ladung)', latex: 'F_L = q \\cdot v \\cdot B \\cdot \\sin\\alpha', note: 'α = Winkel v zu B' },
          { label: 'Kraft auf Leiter', latex: 'F = B \\cdot I \\cdot \\ell \\cdot \\sin\\alpha', note: 'ℓ = Leiterlänge im Feld' },
          { label: 'Kreisbahn (Lorentz)', latex: 'r = \\frac{m \\cdot v}{q \\cdot B}', note: 'Lorentzkraft = Zentripetalkraft' },
        ],
        deeper: `<p><strong>Rechte-Hand-Regel merken:</strong> Strom = Daumen, B-Feld = Zeigefinger, Kraft = Mittelfinger. Bei negativen Ladungen (Elektronen) Richtung umkehren!</p>
<p><strong>Kreisbahn:</strong> Die Lorentzkraft steht immer senkrecht zur Bewegungsrichtung → Sie verrichtet keine Arbeit → kinetische Energie bleibt konstant → Kreisbahn mit konstantem Radius.</p>`
      },
      {
        title: 'Elektromagnetische Induktion',
        text: `<p>Eine Spannung wird induziert, wenn sich der <strong>magnetische Fluss</strong> \\(\\Phi\\) durch eine Leiterschleife ändert (Faradaysches Induktionsgesetz).</p>
<p><strong>Lenz\'sche Regel:</strong> Die induzierte Spannung ist stets so gerichtet, dass der Strom der Ursache entgegenwirkt.</p>`,
        formulas: [
          { label: 'Magnetischer Fluss', latex: '\\Phi = B \\cdot A \\cdot \\cos\\alpha' },
          { label: 'Induktionsgesetz', latex: 'U_{\\text{ind}} = -n \\cdot \\frac{\\Delta\\Phi}{\\Delta t}', note: 'n = Windungszahl' },
          { label: 'Geradlinig (Stab)', latex: 'U_{\\text{ind}} = B \\cdot \\ell \\cdot v', note: 'Stab senkrecht zu B' },
          { label: 'Selbstinduktion', latex: 'U_{\\text{ind}} = -L \\cdot \\frac{\\Delta I}{\\Delta t}', note: 'L = Induktivität [H]' },
        ],
        note: 'Das Minuszeichen im Induktionsgesetz drückt die Lenz\'sche Regel aus: induzierte Spannung wirkt ihrer Ursache entgegen.',
        deeper: `<p><strong>Wann wird etwas induziert?</strong> Immer wenn sich Φ ändert: durch Bewegung, Drehung, Feldänderung oder Stromänderung in einer anderen Spule.</p>
<p><strong>Vollständig im Feld:</strong> Wenn der Rahmen vollständig im homogenen Feld ist, ändert sich Φ nicht → keine Induktion, kein Strom.</p>`
      },
      {
        title: 'Generator und Transformator',
        text: `<p>Der <strong>Generator</strong> wandelt mechanische Energie in elektrische Energie um. Der <strong>Transformator</strong> übersetzt Wechselspannungen.</p>`,
        formulas: [
          { label: 'Generator', latex: 'U(t) = n \\cdot B \\cdot A \\cdot \\omega \\cdot \\sin(\\omega t)' },
          { label: 'Max. Spannung', latex: 'U_0 = n \\cdot B \\cdot A \\cdot \\omega' },
          { label: 'Transformator', latex: '\\frac{U_1}{U_2} = \\frac{n_1}{n_2}', note: 'idealer Trafo' },
          { label: 'Leistungserhaltung', latex: 'U_1 I_1 = U_2 I_2', note: 'beim idealen Trafo' },
        ],
        deeper: `<p>Die Generatorspannung ist maximal, wenn der Rahmen <em>parallel</em> zu den Feldlinien steht (Fluss = 0, aber Änderungsrate maximal). Sie ist null, wenn der Rahmen <em>senkrecht</em> steht.</p>
<p><strong>Hochspannungsübertragung:</strong> Höhere Spannung → kleinerer Strom → \\(P_{\\text{Verlust}} = I^2 R\\) drastisch reduziert. Deshalb 110–380 kV in Fernleitungen.</p>`
      },
      {
        title: 'Kondensator und elektrisches Feld',
        text: `<p>Ein <strong>Kondensator</strong> speichert elektrische Energie im Feld zwischen seinen Platten.</p>`,
        formulas: [
          { label: 'Kapazität', latex: 'C = \\frac{Q}{U}', note: 'Einheit: Farad [F]' },
          { label: 'Elektrische Feldstärke', latex: 'E = \\frac{U}{d}', note: 'Plattenkondensator' },
          { label: 'Gespeicherte Energie', latex: 'E_{\\text{el}} = \\frac{1}{2} C U^2 = \\frac{Q^2}{2C}' },
          { label: 'Kraft auf Ladung', latex: 'F = q \\cdot E' },
        ]
      }
    ],
    quickcheck: [
      {
        question: 'Ein Leiter (\\(\\ell = 10\\,\\text{cm}\\), \\(I = 5\\,\\text{A}\\)) steht senkrecht in \\(B = 0{,}4\\,\\text{T}\\). Lorentzkraft?',
        options: ['\\(F = 0{,}2\\,\\text{N}\\)', '\\(F = 2\\,\\text{N}\\)', '\\(F = 20\\,\\text{N}\\)', '\\(F = 0{,}02\\,\\text{N}\\)'],
        correct: 0,
        explanation: '\\(F = B \\cdot I \\cdot \\ell = 0{,}4 \\cdot 5 \\cdot 0{,}1 = 0{,}2\\,\\text{N}\\)'
      },
      {
        question: 'Was beschreibt die Lenz\'sche Regel?',
        options: [
          'Die induzierte Spannung ist proportional zur Flussänderungsrate.',
          'Der induzierte Strom wirkt seiner Ursache entgegen.',
          'Die Lorentzkraft wirkt senkrecht zur Bewegungsrichtung.',
          'Die Kraft auf einen Leiter ist proportional zum Strom.'
        ],
        correct: 1,
        explanation: 'Lenz\'sche Regel: Der induzierte Strom erzeugt ein Feld, das der Flussänderung entgegenwirkt. Das erklärt das Minuszeichen im Induktionsgesetz.'
      },
      {
        question: 'Ein Kondensator \\(C = 100\\,\\mu\\text{F}\\) wird auf \\(U = 400\\,\\text{V}\\) geladen. Gespeicherte Energie?',
        options: ['\\(E = 8\\,\\text{J}\\)', '\\(E = 0{,}04\\,\\text{J}\\)', '\\(E = 16\\,\\text{J}\\)', '\\(E = 80\\,\\text{J}\\)'],
        correct: 0,
        explanation: '\\(E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 100 \\cdot 10^{-6} \\cdot 400^2 = 8\\,\\text{J}\\)'
      },
      {
        question: 'Wann ist die induzierte Spannung im rotierenden Generator maximal?',
        options: [
          'Wenn die Rahmenebene senkrecht zu den Feldlinien steht',
          'Wenn die Rahmenebene parallel zu den Feldlinien steht',
          'Wenn die Drehzahl null ist',
          'Unabhängig von der Rahmenstellung'
        ],
        correct: 1,
        explanation: 'Der Fluss ändert sich am schnellsten, wenn die Rahmenebene parallel zu B steht (Fluss = 0, Änderungsrate maximal).'
      },
      {
        question: 'Ein Transformator hat \\(n_1 = 1000\\), \\(n_2 = 50\\) und \\(U_1 = 230\\,\\text{V}\\). Welche Spannung liegt sekundärseitig an?',
        options: ['\\(U_2 = 11{,}5\\,\\text{V}\\)', '\\(U_2 = 230\\,\\text{V}\\)', '\\(U_2 = 4600\\,\\text{V}\\)', '\\(U_2 = 46\\,\\text{V}\\)'],
        correct: 0,
        explanation: '\\(U_2 = U_1 \\cdot n_2/n_1 = 230 \\cdot 50/1000 = 11{,}5\\,\\text{V}\\)'
      },
      {
        question: 'Was passiert mit dem Strom, wenn ein Schalter in einem Stromkreis mit Spule (Induktivität L) geschlossen wird?',
        options: [
          'Der Strom steigt sofort auf den Endwert.',
          'Der Strom steigt zunächst langsam und nähert sich \\(I_{\\max} = U/R\\).',
          'Der Strom bleibt dauerhaft null.',
          'Der Strom überschwingt den Endwert.'
        ],
        correct: 1,
        explanation: 'Die Spule erzeugt eine Gegenspannung, die den Stromfluss zunächst hemmt: \\(I(t) = I_{\\max}(1-e^{-t/\\tau})\\) mit \\(\\tau = L/R\\).'
      },
      {
        question: 'Ein Leiter (\\(\\ell = 50\\,\\text{cm}\\)) bewegt sich mit \\(v = 4\\,\\text{m/s}\\) senkrecht in \\(B = 0{,}3\\,\\text{T}\\). Welche Spannung wird induziert?',
        options: ['\\(U = 0{,}6\\,\\text{V}\\)', '\\(U = 6\\,\\text{V}\\)', '\\(U = 0{,}06\\,\\text{V}\\)', '\\(U = 60\\,\\text{V}\\)'],
        correct: 0,
        explanation: '\\(U_{\\text{ind}} = B \\cdot \\ell \\cdot v = 0{,}3 \\cdot 0{,}5 \\cdot 4 = 0{,}6\\,\\text{V}\\)'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Induktion', desc: 'Vollständige Theorie zur elektromagn. Induktion', url: 'https://www.leifiphysik.de/elektrizitaetslehre/elektromagnetische-induktion' },
      { icon: '📺', name: 'Simple Club – Induktion', desc: 'Animierte Videoerklärungen zum Induktionsgesetz', url: 'https://www.simpleclub.com/lessons/physik-induktion' },
      { icon: '🔬', name: 'PhET: Faraday\'s Law', desc: 'Interaktive Simulation zur Induktion', url: 'https://phet.colorado.edu/de/simulations/faradays-law' },
      { icon: '📺', name: 'Leifiphysik – Lorentzkraft', desc: 'Theorie und Aufgaben zur Lorentzkraft', url: 'https://www.leifiphysik.de/elektrizitaetslehre/kraft-auf-stromleiter' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 3. WELLENOPTIK ★★★
  // ══════════════════════════════════════════════════════
  wellenoptik: {
    id: 'wellenoptik',
    title: 'Wellenoptik',
    priority: 3,
    badge: 'Jedes Jahr (Doppelspalt, Gitter, Einzelspalt)',
    funFact: '💡 Thomas Young bewies 1801 mit dem Doppelspaltexperiment, dass Licht eine Welle ist – und widerlegte damit Newtons Korpuskeltheorie für fast 100 Jahre.',
    sections: [
      {
        title: 'Grundlagen: Wellen und Interferenz',
        text: `<p>Licht verhält sich wie eine Welle. Treffen zwei kohärente Wellen aufeinander, überlagern sie sich (<strong>Superposition</strong>). Es entstehen Maxima (konstruktive) und Minima (destruktive Interferenz).</p>
<ul style="margin:8px 0 8px 20px;font-size:14px;line-height:1.8">
<li><strong>Konstruktiv (Maximum):</strong> Gangunterschied = ganzzahliges Vielfaches der Wellenlänge</li>
<li><strong>Destruktiv (Minimum):</strong> Gangunterschied = halbzahliges Vielfaches der Wellenlänge</li>
</ul>`,
        formulas: [
          { label: 'Konstruktiv (Max.)', latex: '\\Delta s = m \\cdot \\lambda \\quad (m = 0,\\pm1,\\pm2,\\ldots)' },
          { label: 'Destruktiv (Min.)', latex: '\\Delta s = \\left(m + \\frac{1}{2}\\right) \\cdot \\lambda' },
          { label: 'Wellengleichung', latex: 'c = \\lambda \\cdot f', note: 'c = Lichtgeschwindigkeit' },
        ],
        deeper: `<p><strong>Kohärenz ist entscheidend:</strong> Nur Wellen mit fester Phasenbeziehung können dauerhaftes Interferenzmuster erzeugen. Normales Licht ist inkohärent – nur Laser und gleich angetriebene Quellen sind kohärent.</p>`
      },
      {
        title: 'Doppelspalt und optisches Gitter',
        text: `<p>Beim <strong>Doppelspalt</strong> interferieren Wellen aus zwei schmalen Spalten. Beim <strong>optischen Gitter</strong> werden die Maxima durch viele Spalte schärfer.</p>`,
        formulas: [
          { label: 'Gangunterschied', latex: '\\Delta s = g \\cdot \\sin\\vartheta', note: 'g = Gitterkonstante / Spaltabstand' },
          { label: 'Maxima (Gitter)', latex: 'g \\cdot \\sin\\vartheta_m = m \\cdot \\lambda' },
          { label: 'Näherung (kleine Winkel)', latex: 'y_m = \\frac{m \\cdot \\lambda \\cdot L}{g}', note: 'y = Abstand vom 0. Maximum, L = Schirmabstand' },
        ],
        deeper: `<p><strong>Gitterkonstante bestimmen:</strong> \\(g = m\\lambda/\\sin\\vartheta_m\\)</p>
<p><strong>Wellenlänge bestimmen:</strong> \\(\\lambda = g \\cdot \\sin\\vartheta_m / m\\)</p>
<p><strong>Weißes Licht:</strong> Wird in Spektralfarben aufgefächert, da die Ablenkwinkel von λ abhängen. Violett (kleines λ) erscheint nah am Zentrum, Rot (großes λ) weit außen.</p>`
      },
      {
        title: 'Einzelspalt',
        text: `<p>Beim <strong>Einzelspalt</strong> der Breite b entstehen Minima durch destruktive Interferenz. Das zentrale Maximum ist besonders breit und hell.</p>`,
        formulas: [
          { label: 'Minima (Einzelspalt)', latex: 'b \\cdot \\sin\\vartheta = m \\cdot \\lambda \\quad (m = \\pm1, \\pm2, \\ldots)' },
          { label: 'Breite zentrales Max.', latex: '\\Delta y = \\frac{2 \\lambda L}{b}', note: 'nimmt zu wenn b kleiner wird' },
        ],
        note: 'Kleinere Spaltbreite b → breiteres zentrales Maximum (stärkere Beugung).',
        deeper: `<p><strong>Babinet-Prinzip:</strong> Ein dünner Draht oder Haar erzeugt dasselbe Beugungsmuster wie ein Spalt gleicher Breite. So kann man Haardicken mit Licht messen!</p>
<p><strong>Faustformel:</strong> Das zentrale Maximum ist doppelt so breit wie alle anderen Maxima.</p>`
      },
      {
        title: 'Weitere Wellenphänomene',
        text: `<p>Licht zeigt alle typischen Wellenphänomene:</p>
<ul style="margin:8px 0 8px 20px;font-size:14px;line-height:1.8">
<li><strong>Reflexion:</strong> Einfallswinkel = Ausfallswinkel</li>
<li><strong>Brechung:</strong> Snellius-Gesetz</li>
<li><strong>Beugung:</strong> Huygens'sches Prinzip</li>
<li><strong>Polarisation:</strong> Querwellen können polarisiert werden</li>
</ul>`,
        formulas: [
          { label: 'Snellius', latex: 'n_1 \\cdot \\sin\\alpha_1 = n_2 \\cdot \\sin\\alpha_2' },
        ]
      }
    ],
    quickcheck: [
      {
        question: 'Laser (\\(\\lambda = 635\\,\\text{nm}\\)) trifft auf Gitter mit \\(g = 0{,}01\\,\\text{mm}\\). Winkel des 1. Maximums?',
        options: ['\\(\\vartheta \\approx 3{,}64°\\)', '\\(\\vartheta \\approx 7{,}28°\\)', '\\(\\vartheta \\approx 1{,}82°\\)', '\\(\\vartheta \\approx 0{,}36°\\)'],
        correct: 0,
        explanation: '\\(\\sin\\vartheta = \\lambda/g = 635 \\cdot 10^{-9}/10^{-5} = 0{,}0635\\) → \\(\\vartheta \\approx 3{,}64°\\)'
      },
      {
        question: 'Beim Einzelspalt wird die Spaltbreite b halbiert. Was passiert mit dem zentralen Maximum?',
        options: [
          'Es wird halb so breit.',
          'Es wird doppelt so breit.',
          'Es bleibt gleich breit.',
          'Es verschwindet.'
        ],
        correct: 1,
        explanation: '\\(\\Delta y = 2\\lambda L / b\\). Bei halbiertem b verdoppelt sich \\(\\Delta y\\). Schmalerer Spalt → stärkere Beugung → breiteres Maximum.'
      },
      {
        question: 'Was ist die Bedingung für ein Minimum am Doppelspalt?',
        options: [
          '\\(\\Delta s = m \\cdot \\lambda\\)',
          '\\(\\Delta s = (m + \\frac{1}{2}) \\cdot \\lambda\\)',
          '\\(\\Delta s = 0\\)',
          '\\(g \\cdot \\sin\\vartheta = 2m \\cdot \\lambda\\)'
        ],
        correct: 1,
        explanation: 'Destruktive Interferenz: Gangunterschied = halbzahliges Vielfaches der Wellenlänge → Auslöschung.'
      },
      {
        question: 'Was erklärt das Huygens\'sche Prinzip?',
        options: [
          'Warum Licht reflektiert wird',
          'Die Entstehung von Interferenzmustern beim Doppelspalt',
          'Die Beugung von Wellen an Hindernissen und Öffnungen',
          'Die Polarisation von Transversalwellen'
        ],
        correct: 2,
        explanation: 'Huygens: Jeder Punkt einer Wellenfront ist Ausgangspunkt einer Elementarwelle (Kugelwelle). Damit erklärt man die Beugung.'
      },
      {
        question: 'Doppelspalt \\(g = 0{,}5\\,\\text{mm}\\), \\(\\lambda = 500\\,\\text{nm}\\), \\(L = 2\\,\\text{m}\\). Abstand 1. Maximum vom Zentralmaximum?',
        options: ['\\(y_1 = 2\\,\\text{mm}\\)', '\\(y_1 = 1\\,\\text{mm}\\)', '\\(y_1 = 4\\,\\text{mm}\\)', '\\(y_1 = 0{,}5\\,\\text{mm}\\)'],
        correct: 0,
        explanation: '\\(y_1 = \\lambda L / g = 500 \\cdot 10^{-9} \\cdot 2 / 0{,}5 \\cdot 10^{-3} = 2\\,\\text{mm}\\)'
      },
      {
        question: 'Was beobachtet man beim Doppelspalt mit weißem Licht?',
        options: [
          'Nur schwarze und weiße Streifen',
          'Gar kein Muster',
          'Weißes Zentralmaximum, seitlich regenbogenartige Farbsäume',
          'Nur rote Streifen'
        ],
        correct: 2,
        explanation: 'Das Zentralmaximum ist weiß (alle Wellenlängen überlagern sich). In den Ordnungen n ≥ 1 werden die Farben aufgefächert: Violett innen (kleines λ), Rot außen (großes λ).'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Wellenoptik', desc: 'Theorie, Aufgaben und Herleitungen zur Wellenoptik', url: 'https://www.leifiphysik.de/optik/wellenoptik' },
      { icon: '📺', name: 'Simple Club – Interferenz', desc: 'Doppelspalt und Gitter verständlich erklärt', url: 'https://www.simpleclub.com/lessons/physik-interferenz' },
      { icon: '🔬', name: 'PhET: Wave Interference', desc: 'Interaktive Welleninterferenz-Simulation', url: 'https://phet.colorado.edu/de/simulations/wave-interference' },
      { icon: '📚', name: 'Leifiphysik – Einzelspalt', desc: 'Einzelspalt und Babinet-Prinzip', url: 'https://www.leifiphysik.de/optik/wellenoptik/grundwissen/einzelspalt' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 4. ELEKTROMAGNETISCHER SCHWINGKREIS (LC) ★★
  // ══════════════════════════════════════════════════════
  lc_kreis: {
    id: 'lc_kreis',
    title: 'Elektromagnetischer Schwingkreis',
    priority: 2,
    badge: 'Fast jedes Jahr',
    funFact: '💡 Das Prinzip des LC-Kreises steckt in jedem Radio: Der Empfänger ist ein LC-Schwingkreis, der auf die gewünschte Senderfrequenz abgestimmt wird.',
    sections: [
      {
        title: 'Aufbau und Funktion des LC-Kreises',
        text: `<p>Ein <strong>LC-Schwingkreis</strong> besteht aus einem Kondensator (Kapazität C) und einer Spule (Induktivität L). Energie pendelt zwischen elektrischem Feld (Kondensator) und magnetischem Feld (Spule).</p>
<p><strong>Schwingungsablauf:</strong> Kondensator voll geladen → entlädt sich durch Spule → Strom maximal → Kondensator umgekehrt geladen → ...</p>`,
        formulas: [
          { label: 'Eigenfrequenz', latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}' },
          { label: 'Periodendauer', latex: 'T = 2\\pi\\sqrt{LC}' },
          { label: 'Kreisfrequenz', latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}' },
        ],
        note: 'Analogie: C ↔ 1/k (Federkonstante), L ↔ m (Masse), U ↔ Auslenkung, I ↔ Geschwindigkeit.',
        deeper: `<p><strong>Merksatz Energieformen:</strong> Wenn der Kondensator vollständig geladen ist (U maximal), ist der Strom null. Wenn der Kondensator vollständig entladen ist (U = 0), ist der Strom maximal. Genau wie Federpendel: maximale Auslenkung ↔ Stille, Gleichgewicht ↔ maximale Geschwindigkeit.</p>`
      },
      {
        title: 'Energie im LC-Kreis',
        text: `<p>Die Gesamtenergie ist beim idealen (ungedämpften) LC-Kreis konstant.</p>`,
        formulas: [
          { label: 'Elektrische Energie', latex: 'E_{\\text{el}} = \\frac{1}{2}C U^2', note: 'im Kondensator' },
          { label: 'Magnetische Energie', latex: 'E_{\\text{mag}} = \\frac{1}{2}L I^2', note: 'in der Spule' },
          { label: 'Gesamtenergie', latex: 'E_{\\text{ges}} = \\frac{1}{2}C U_0^2 = \\frac{1}{2}L I_0^2', note: 'konstant' },
          { label: 'Max. Stromstärke', latex: 'I_0 = U_0 \\cdot \\sqrt{\\frac{C}{L}}' },
        ],
        deeper: `<p><strong>Gedämpfter Schwingkreis:</strong> Der Spulenwiderstand R dissipiert Energie → Amplitude klingt ab. Aus dem Graphen lässt sich L bestimmen: \\(L = T^2/(4\\pi^2 C)\\).</p>
<p><strong>Frequenzänderung:</strong> \\(f \\propto 1/\\sqrt{C}\\). Bei 4-fachem C: Frequenz halbiert sich. Bei 4-facher L: Frequenz ebenfalls halbiert.</p>`
      },
      {
        title: 'Messgrößen aus Diagrammen',
        text: `<p>In Abituraufgaben werden oft \\(U_C\\)-\\(t\\)-Diagramme oder \\(I\\)-\\(t\\)-Diagramme gegeben.</p>
<ul style="margin:8px 0 8px 20px;font-size:14px;line-height:1.8">
<li>Amplitude \\(U_0\\) oder \\(I_0\\) ablesen</li>
<li>Periodendauer T ablesen (aus vielen Perioden mitteln)</li>
<li>Induktivität berechnen: \\(L = T^2/(4\\pi^2 C)\\)</li>
<li>Energieverlust: \\(\\Delta E = \\frac{1}{2}C(U_0^2 - U_n^2)\\)</li>
</ul>`,
        formulas: [
          { label: 'L aus T und C', latex: 'L = \\frac{T^2}{4\\pi^2 C}' },
          { label: 'Frequenzänderung', latex: 'f \\propto \\frac{1}{\\sqrt{C}} \\propto \\frac{1}{\\sqrt{L}}' },
        ]
      }
    ],
    quickcheck: [
      {
        question: 'LC-Kreis: \\(L = 500\\,\\text{mH}\\), \\(C = 20\\,\\mu\\text{F}\\). Eigenfrequenz?',
        options: ['\\(f_0 \\approx 50{,}3\\,\\text{Hz}\\)', '\\(f_0 \\approx 25{,}2\\,\\text{Hz}\\)', '\\(f_0 \\approx 100{,}6\\,\\text{Hz}\\)', '\\(f_0 \\approx 1{,}0\\,\\text{Hz}\\)'],
        correct: 0,
        explanation: '\\(f_0 = 1/(2\\pi\\sqrt{LC}) = 1/(2\\pi\\sqrt{0{,}5 \\cdot 20 \\cdot 10^{-6}}) \\approx 50{,}3\\,\\text{Hz}\\)'
      },
      {
        question: 'Wann ist im LC-Kreis die Stromstärke maximal?',
        options: [
          'Wenn der Kondensator vollständig geladen ist',
          'Wenn der Kondensator vollständig entladen ist',
          'Immer gleich groß',
          'Wenn die Spannung am Kondensator maximal ist'
        ],
        correct: 1,
        explanation: 'Bei entladenem Kondensator (U = 0): gesamte Energie magnetisch → \\(E_{\\text{mag}} = \\frac{1}{2}LI_0^2 = E_{\\text{ges}}\\) → I maximal.'
      },
      {
        question: 'Die Kapazität wird vervierfacht. Wie ändert sich die Frequenz?',
        options: ['Sie halbiert sich.', 'Sie verdoppelt sich.', 'Sie vervierfacht sich.', 'Sie viertelt sich.'],
        correct: 0,
        explanation: '\\(f \\propto 1/\\sqrt{C}\\). Bei 4-fachem C: \\(f_{\\text{neu}} = f/\\sqrt{4} = f/2\\).'
      },
      {
        question: 'Korrekte Analogie zwischen LC-Schwingkreis und Federpendel?',
        options: [
          'Kondensatorspannung ↔ Geschwindigkeit',
          'Kondensatorspannung ↔ Auslenkung, Stromstärke ↔ Geschwindigkeit',
          'Induktivität L ↔ Federkonstante k',
          'Kapazität C ↔ Masse m'
        ],
        correct: 1,
        explanation: 'U ↔ Auslenkung s, I ↔ Geschwindigkeit v, L ↔ Masse m, 1/C ↔ k. El. Energie ↔ pot. Energie, magn. Energie ↔ kin. Energie.'
      },
      {
        question: 'Ein LC-Kreis (\\(C = 10\\,\\mu\\text{F}\\)) zeigt eine Periodendauer \\(T = 0{,}628\\,\\text{ms}\\). Wie groß ist L?',
        options: ['\\(L = 1\\,\\text{mH}\\)', '\\(L = 10\\,\\text{mH}\\)', '\\(L = 0{,}1\\,\\text{mH}\\)', '\\(L = 100\\,\\text{mH}\\)'],
        correct: 0,
        explanation: '\\(L = T^2/(4\\pi^2 C) = (6{,}28 \\cdot 10^{-4})^2 / (4\\pi^2 \\cdot 10 \\cdot 10^{-6}) \\approx 1\\,\\text{mH}\\)'
      },
      {
        question: 'Im LC-Kreis wurde eine Anfangsspannung von \\(U_0 = 10\\,\\text{V}\\) angelegt (\\(C = 50\\,\\mu\\text{F}\\)). Wie groß ist die gespeicherte Startenergie?',
        options: ['\\(E = 2{,}5\\,\\text{mJ}\\)', '\\(E = 5\\,\\text{mJ}\\)', '\\(E = 0{,}25\\,\\text{mJ}\\)', '\\(E = 25\\,\\text{mJ}\\)'],
        correct: 0,
        explanation: '\\(E = \\frac{1}{2}CU_0^2 = \\frac{1}{2} \\cdot 50 \\cdot 10^{-6} \\cdot 100 = 2{,}5 \\cdot 10^{-3}\\,\\text{J} = 2{,}5\\,\\text{mJ}\\)'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Schwingkreis', desc: 'Vollständige Theorie zum elektromagn. Schwingkreis', url: 'https://www.leifiphysik.de/elektrizitaetslehre/elektromagnetischer-schwingkreis' },
      { icon: '📺', name: 'Simple Club – Schwingkreis', desc: 'LC-Kreis animiert erklärt', url: 'https://www.simpleclub.com/lessons/physik-schwingkreis' },
      { icon: '🔬', name: 'PhET: Circuit Construction Kit AC', desc: 'Wechselstromkreise interaktiv aufbauen', url: 'https://phet.colorado.edu/de/simulations/circuit-construction-kit-ac' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 5. ELEKTRISCHE UND MAGNETISCHE FELDER ★★
  // ══════════════════════════════════════════════════════
  felder: {
    id: 'felder',
    title: 'Elektrische & Magnetische Felder',
    priority: 2,
    badge: 'Grundlage für Elektrodynamik',
    funFact: '💡 Im Massenspektrometer werden Isotope desselben Elements getrennt – Technik, die heute in der Medizin (z.B. C-14-Datierung), Materialforschung und Pharmakologie eingesetzt wird.',
    sections: [
      {
        title: 'Das elektrische Feld',
        text: `<p>Das <strong>elektrische Feld</strong> beschreibt die Kraft pro Ladung. Feldlinien verlaufen von + nach −.</p>
<p>Im <strong>homogenen Feld</strong> (Plattenkondensator) sind Feldlinien parallel und gleichmäßig verteilt.</p>`,
        formulas: [
          { label: 'Elektrische Feldstärke', latex: 'E = \\frac{F}{q} = \\frac{U}{d}', note: 'd = Plattenabstand' },
          { label: 'Kraft auf Ladung', latex: 'F_{\\text{el}} = q \\cdot E' },
          { label: 'Arbeit im E-Feld', latex: 'W = q \\cdot U = q \\cdot E \\cdot d' },
        ],
        deeper: `<p><strong>Elektronenablenkung:</strong> Im E-Feld gilt konstante Kraft in Feldrichtung + konstante Geschwindigkeit senkrecht dazu → Parabelbahn (analog zum schiefen Wurf).</p>
<p><strong>Beschleunigungsspannung:</strong> Energie \\(E_{\\text{kin}} = qU_B\\) → \\(v = \\sqrt{2qU_B/m}\\).</p>`
      },
      {
        title: 'Das magnetische Feld',
        text: `<p>Das <strong>magnetische Feld</strong> übt Kräfte auf bewegte Ladungen aus (Lorentzkraft).</p>`,
        formulas: [
          { label: 'Magnetischer Fluss', latex: '\\Phi = B \\cdot A \\cdot \\cos\\alpha' },
          { label: 'Kreisbahn im B-Feld', latex: 'r = \\frac{m v}{q B}' },
          { label: 'Periode Kreisbahn', latex: 'T = \\frac{2\\pi m}{q B}', note: 'unabh. von v!' },
        ],
        note: 'Die Kreisbahnperiode im B-Feld ist unabhängig von der Geschwindigkeit – Grundlage des Massenspektrometers!',
        deeper: `<p><strong>Massenspektrometer:</strong> Ionen werden mit \\(E_{\\text{kin}} = qU_B\\) beschleunigt, dann in B-Feld geleitet. Kreisradius: \\(r = mv/(qB)\\). Da v aus \\(U_B\\) bekannt: \\(m = qBr/v\\).</p>
<p><strong>Warum kein Energiegewinn?</strong> Lorentzkraft steht immer senkrecht zur Geschwindigkeit → keine Arbeit → v = const.</p>`
      },
      {
        title: 'Geladene Teilchen in kombinierten Feldern',
        text: `<p>In kombinierten E- und B-Feldern können Teilchen auf definierte Bahnen gelenkt werden.</p>`,
        formulas: [
          { label: 'Gleichgewicht (Selektor)', latex: 'q E = q v B \\implies v = \\frac{E}{B}', note: 'Geschwindigkeitsselektor' },
          { label: 'Energie aus Beschl.-Spannung', latex: 'E_{\\text{kin}} = q U_B = \\frac{1}{2}m v^2' },
          { label: 'Geschwindigkeit', latex: 'v = \\sqrt{\\frac{2qU_B}{m}}' },
        ]
      }
    ],
    quickcheck: [
      {
        question: 'Kondensator: \\(d = 5\\,\\text{cm}\\), \\(U = 1000\\,\\text{V}\\). Elektrische Feldstärke?',
        options: ['\\(E = 20{.}000\\,\\text{V/m}\\)', '\\(E = 2000\\,\\text{V/m}\\)', '\\(E = 50\\,\\text{V/m}\\)', '\\(E = 200\\,\\text{V/m}\\)'],
        correct: 0,
        explanation: '\\(E = U/d = 1000 / 0{,}05 = 20{.}000\\,\\text{V/m}\\)'
      },
      {
        question: 'Elektron (\\(q = 1{,}6 \\cdot 10^{-19}\\,\\text{C}\\)) durch \\(U_B = 500\\,\\text{V}\\) beschleunigt. Gewonnene Energie?',
        options: ['\\(E = 8 \\cdot 10^{-17}\\,\\text{J}\\)', '\\(E = 8 \\cdot 10^{-14}\\,\\text{J}\\)', '\\(E = 1{,}6 \\cdot 10^{-19}\\,\\text{J}\\)', '\\(E = 500\\,\\text{J}\\)'],
        correct: 0,
        explanation: '\\(E = qU = 1{,}6 \\cdot 10^{-19} \\cdot 500 = 8 \\cdot 10^{-17}\\,\\text{J}\\)'
      },
      {
        question: 'Wovon hängt die Kreisbahnperiode eines Ions im Magnetfeld ab?',
        options: [
          'Von der Geschwindigkeit',
          'Vom Radius',
          'Nur von Ladung, Masse und B',
          'Nur von Geschwindigkeit und B'
        ],
        correct: 2,
        explanation: '\\(T = 2\\pi m / (qB)\\) – unabhängig von der Geschwindigkeit.'
      },
      {
        question: 'Wie muss ein Geschwindigkeitsselektor eingerichtet sein?',
        options: [
          'E-Feld und B-Feld müssen parallel sein',
          'Elektrische Kraft und Lorentzkraft müssen sich genau aufheben',
          'Nur das Magnetfeld reicht',
          'Nur das E-Feld bestimmt die Selektion'
        ],
        correct: 1,
        explanation: '\\(qE = qvB\\) → \\(v = E/B\\). Nur Teilchen mit genau dieser Geschwindigkeit passieren unabgelenkt.'
      },
      {
        question: 'Ein Ion (\\(q = e\\), \\(m = 3{,}3 \\cdot 10^{-27}\\,\\text{kg}\\)) fliegt mit \\(v = 10^5\\,\\text{m/s}\\) in \\(B = 0{,}2\\,\\text{T}\\). Kreisradius?',
        options: ['\\(r \\approx 10{,}3\\,\\text{mm}\\)', '\\(r \\approx 1{,}03\\,\\text{cm}\\)', '\\(r \\approx 10{,}3\\,\\text{cm}\\)', '\\(r \\approx 1{,}03\\,\\text{m}\\)'],
        correct: 0,
        explanation: '\\(r = mv/(qB) = 3{,}3 \\cdot 10^{-27} \\cdot 10^5 / (1{,}6 \\cdot 10^{-19} \\cdot 0{,}2) \\approx 10{,}3 \\cdot 10^{-3}\\,\\text{m} = 10{,}3\\,\\text{mm}\\)'
      },
      {
        question: 'Im Plattenkondensator wird der Plattenabstand d halbiert (U konstant). Was passiert mit Feldstärke und Kraft auf eine Ladung?',
        options: [
          'Beide verdoppeln sich.',
          'Beide halbieren sich.',
          'Feldstärke verdoppelt sich, Kraft bleibt gleich.',
          'Nichts ändert sich.'
        ],
        correct: 0,
        explanation: '\\(E = U/d\\): Bei halbiertem d verdoppelt sich E. Da \\(F = qE\\) und q konstant, verdoppelt sich auch die Kraft.'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – E-Feld', desc: 'Elektrisches Feld, Kondensator und Feldlinien', url: 'https://www.leifiphysik.de/elektrizitaetslehre/elektrisches-feld' },
      { icon: '📺', name: 'Simple Club – E-Feld', desc: 'Elektrisches Feld kompakt erklärt', url: 'https://www.simpleclub.com/lessons/physik-elektrisches-feld' },
      { icon: '🔬', name: 'PhET: Charges and Fields', desc: 'Elektrische Felder visualisieren', url: 'https://phet.colorado.edu/de/simulations/charges-and-fields' },
      { icon: '📚', name: 'Leifiphysik – Massenspektrometer', desc: 'Kreisbahn und Massenspektrometer', url: 'https://www.leifiphysik.de/elektrizitaetslehre/magnetisches-feld' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 6. QUANTENPHYSIK & PHOTOEFFEKT ★★
  // ══════════════════════════════════════════════════════
  quantenphysik: {
    id: 'quantenphysik',
    title: 'Quantenphysik & Photoeffekt',
    priority: 2,
    badge: 'NEU im Abi 2026 – unbedingt lernen!',
    funFact: '💡 Einsteins Nobelpreis 1921 war nicht für die Relativitätstheorie – sondern für die Erklärung des Photoeffekts durch Lichtquanten!',
    sections: [
      {
        title: 'Der lichtelektrische Effekt (Photoeffekt)',
        text: `<p>Licht kann Elektronen aus einer Metalloberfläche herauslösen – aber <strong>nur wenn die Frequenz groß genug ist</strong>. Intensität allein reicht nicht aus. Das erklärt nur das <strong>Photonenmodell</strong> (Einstein, 1905).</p>
<p>Ein Photon überträgt seine gesamte Energie auf ein Elektron. Ist diese größer als die <strong>Austrittsarbeit</strong> \\(W_A\\), verlässt das Elektron das Metall.</p>`,
        formulas: [
          { label: 'Photonenenergie', latex: 'E_{\\text{Ph}} = h \\cdot f = \\frac{hc}{\\lambda}', note: 'h = 6,626·10⁻³⁴ J·s' },
          { label: 'Einstein-Gleichung', latex: 'E_{\\text{kin}} = h f - W_A', note: 'kinetische Energie der Elektronen' },
          { label: 'Grenzfrequenz', latex: 'f_{\\text{min}} = \\frac{W_A}{h}', note: 'darunter kein Photoeffekt' },
          { label: 'Gegenspannung', latex: 'e U_G = E_{\\text{kin,max}} = h f - W_A' },
        ],
        note: 'Einsteinsche Lichtquantenhypothese: Licht besteht aus Photonen. Für den Photoeffekt ist nur f entscheidend, nicht die Intensität.',
        deeper: `<p><strong>Intensität vs. Frequenz:</strong> Höhere Intensität = mehr Photonen = größerer Fotostrom. Höhere Frequenz = mehr Energie pro Photon = schnellere Elektronen (größere kin. Energie). Diese beiden Effekte sind unabhängig voneinander.</p>
<p><strong>Umrechnung eV ↔ J:</strong> \\(1\\,\\text{eV} = 1{,}6 \\cdot 10^{-19}\\,\\text{J}\\). Austrittsarbeit wird oft in eV angegeben (typisch: 2–5 eV).</p>
<p><strong>Grenzwellenlänge:</strong> \\(\\lambda_{\\max} = hc/W_A\\). Nur Licht mit \\(\\lambda < \\lambda_{\\max}\\) löst den Photoeffekt aus.</p>`
      },
      {
        title: 'Welle-Teilchen-Dualismus',
        text: `<p>Licht verhält sich manchmal wie eine Welle (Interferenz, Beugung) und manchmal wie ein Teilchen (Photoeffekt). Diesen Widerspruch nennt man <strong>Welle-Teilchen-Dualismus</strong>.</p>
<p>Auch Elektronen und andere Teilchen zeigen Wellenverhalten (de Broglie):</p>`,
        formulas: [
          { label: 'De-Broglie-Wellenlänge', latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}', note: 'p = Impuls' },
        ],
        deeper: `<p><strong>Doppelspalt mit Elektronen:</strong> Einzelne Elektronen erzeugen zusammen ein Interferenzmuster – obwohl sie einzeln durch den Apparat geschickt werden. Das Elektron „interferiert mit sich selbst". Es gibt keinen definierten Weg durch einen Spalt.</p>
<p><strong>Heisenbergsche Unschärferelation (Ausblick):</strong> Ort und Impuls können nicht gleichzeitig beliebig genau gemessen werden: \\(\\Delta x \\cdot \\Delta p \\geq h/(4\\pi)\\).</p>`
      },
      {
        title: 'Energieniveaus und Spektren',
        text: `<p>Elektronen in Atomen befinden sich auf diskreten Energieniveaus. Übergänge emittieren oder absorbieren Photonen mit genau der Energiedifferenz.</p>`,
        formulas: [
          { label: 'Emittiertes Photon', latex: 'h f = E_m - E_n \\quad (E_m > E_n)' },
          { label: 'Absorbiertes Photon', latex: 'h f = E_n - E_m \\quad (E_n > E_m)' },
        ],
        note: 'Linienspektren sind der Fingerabdruck eines Elements. Nur Photonen mit genau der richtigen Energie werden absorbiert.',
        deeper: `<p><strong>Anwendung: Spektralanalyse</strong> – Sterne werden durch ihr Lichtspektrum analysiert. Absorptionslinien im Sonnenspektrum verraten die chemische Zusammensetzung der Sonnenatmosphäre.</p>`
      }
    ],
    quickcheck: [
      {
        question: 'Licht mit \\(f = 8 \\cdot 10^{14}\\,\\text{Hz}\\) trifft auf \\(W_A = 2{,}0\\,\\text{eV}\\)-Metall. Max. kin. Energie?',
        options: ['\\(E_{\\text{kin}} \\approx 1{,}3\\,\\text{eV}\\)', '\\(E_{\\text{kin}} \\approx 2{,}0\\,\\text{eV}\\)', '\\(E_{\\text{kin}} \\approx 3{,}3\\,\\text{eV}\\)', '\\(E_{\\text{kin}} = 0\\)'],
        correct: 0,
        explanation: '\\(E_{\\text{Ph}} = hf \\approx 3{,}3\\,\\text{eV}\\). \\(E_{\\text{kin}} = 3{,}3 - 2{,}0 = 1{,}3\\,\\text{eV}\\)'
      },
      {
        question: 'Intensität bei gleicher Frequenz verdoppelt. Was ändert sich beim Photoeffekt?',
        options: [
          'Energie der Elektronen verdoppelt sich.',
          'Grenzfrequenz halbiert sich.',
          'Fotostrom verdoppelt sich, Energie bleibt gleich.',
          'Kein Photoeffekt mehr.'
        ],
        correct: 2,
        explanation: 'Intensität = mehr Photonen → mehr Elektronen → größerer Fotostrom. Energie jedes Photons (und Elektrons) hängt nur von f ab.'
      },
      {
        question: 'Was erklärt den Photoeffekt, was die klassische Wellentheorie NICHT kann?',
        options: [
          'Dass Licht überhaupt mit Materie wechselwirkt',
          'Die Existenz einer Grenzfrequenz',
          'Dass Licht sich ausbreitet',
          'Dass Metalle leitend sind'
        ],
        correct: 1,
        explanation: 'Die klassische Wellentheorie sagt: Immer Photoeffekt bei hoher Intensität. Aber es gibt eine Grenzfrequenz – das erklärt nur das Quantenmodell.'
      },
      {
        question: 'De-Broglie-Wellenlänge eines Elektrons (\\(m = 9{,}1 \\cdot 10^{-31}\\,\\text{kg}\\), \\(v = 10^6\\,\\text{m/s}\\))?',
        options: ['\\(\\lambda \\approx 0{,}73\\,\\text{nm}\\)', '\\(\\lambda \\approx 7{,}3\\,\\text{nm}\\)', '\\(\\lambda \\approx 0{,}073\\,\\text{nm}\\)', '\\(\\lambda \\approx 730\\,\\text{nm}\\)'],
        correct: 0,
        explanation: '\\(\\lambda = h/(mv) = 6{,}63 \\cdot 10^{-34} / (9{,}1 \\cdot 10^{-31} \\cdot 10^6) \\approx 7{,}3 \\cdot 10^{-10}\\,\\text{m} = 0{,}73\\,\\text{nm}\\)'
      },
      {
        question: 'Metall mit Austrittsarbeit \\(W_A = 3{,}0\\,\\text{eV}\\). Welche Maximalwellenlänge löst Photoeffekt aus?',
        options: ['\\(\\lambda_{\\max} \\approx 414\\,\\text{nm}\\)', '\\(\\lambda_{\\max} \\approx 207\\,\\text{nm}\\)', '\\(\\lambda_{\\max} \\approx 620\\,\\text{nm}\\)', '\\(\\lambda_{\\max} \\approx 828\\,\\text{nm}\\)'],
        correct: 0,
        explanation: '\\(\\lambda_{\\max} = hc/W_A = (6{,}63 \\cdot 10^{-34} \\cdot 3 \\cdot 10^8) / (3{,}0 \\cdot 1{,}6 \\cdot 10^{-19}) \\approx 414\\,\\text{nm}\\). Nur UV und kurzwelliges Violett.'
      },
      {
        question: 'Ein Photon der Energie \\(E_{\\text{Ph}} = 4{,}5\\,\\text{eV}\\) löst Elektronen mit \\(E_{\\text{kin}} = 1{,}5\\,\\text{eV}\\) aus. Wie groß ist die Austrittsarbeit?',
        options: ['\\(W_A = 3{,}0\\,\\text{eV}\\)', '\\(W_A = 1{,}5\\,\\text{eV}\\)', '\\(W_A = 6{,}0\\,\\text{eV}\\)', '\\(W_A = 4{,}5\\,\\text{eV}\\)'],
        correct: 0,
        explanation: '\\(W_A = E_{\\text{Ph}} - E_{\\text{kin}} = 4{,}5 - 1{,}5 = 3{,}0\\,\\text{eV}\\)'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Quantenphysik', desc: 'Photoeffekt, Lichtquanten, Dualismus', url: 'https://www.leifiphysik.de/quantenphysik' },
      { icon: '📺', name: 'Simple Club – Photoeffekt', desc: 'Photoeffekt und Einstein verständlich erklärt', url: 'https://www.simpleclub.com/lessons/physik-photoeffekt' },
      { icon: '🔬', name: 'PhET: Photoelectric Effect', desc: 'Photoeffekt interaktiv simulieren', url: 'https://phet.colorado.edu/de/simulations/photoelectric' },
      { icon: '📺', name: 'Leifiphysik – Welle-Teilchen-Dualismus', desc: 'Dualismus und Doppelspaltexperiment', url: 'https://www.leifiphysik.de/quantenphysik/welle-teilchen-dualismus' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // 7. WELLEN ALLGEMEIN ★★
  // ══════════════════════════════════════════════════════
  wellen: {
    id: 'wellen',
    title: 'Wellen (allgemein)',
    priority: 2,
    badge: 'Grundlage für Optik und Schwingungen',
    funFact: '💡 Das Universum ist von kosmischer Hintergrundstrahlung durchzogen – überall im All herrscht eine Temperatur von ca. 2,7 K, die als Mikrowellenstrahlung nachweisbar ist.',
    sections: [
      {
        title: 'Grundbegriffe der Wellenlehre',
        text: `<p>Eine <strong>mechanische Welle</strong> transportiert Energie, aber keine Materie. Jeder Punkt des Mediums schwingt um seine Ruhelage.</p>
<p><strong>Transversalwellen:</strong> Schwingungsrichtung ⊥ Ausbreitungsrichtung (Seilwelle, Lichtwelle)</p>
<p><strong>Longitudinalwellen:</strong> Schwingungsrichtung ∥ Ausbreitungsrichtung (Schallwelle)</p>`,
        formulas: [
          { label: 'Wellengeschwindigkeit', latex: 'c = \\lambda \\cdot f = \\frac{\\lambda}{T}' },
          { label: 'Wellenlänge', latex: '\\lambda = \\frac{c}{f}' },
          { label: 'Frequenz', latex: 'f = \\frac{1}{T} = \\frac{c}{\\lambda}' },
        ],
        deeper: `<p><strong>Merkhilfe:</strong> \\(c = \\lambda \\cdot f\\) – die einzige Formel, die man sich wirklich merken muss. Alle anderen folgen daraus.</p>
<p><strong>Licht in Materie:</strong> Die Lichtgeschwindigkeit sinkt beim Übergang in dichtere Medien (\\(c_n = c_0/n\\)), aber die Frequenz bleibt konstant. Die Wellenlänge ändert sich.</p>`
      },
      {
        title: 'Momentanbild und Zeit-Ort-Diagramm',
        text: `<p>Das <strong>Momentanbild</strong> zeigt die Auslenkung aller Punkte zu einem festen Zeitpunkt (x-Achse: Ort) → man liest λ ab.</p>
<p>Das <strong>Zeit-Auslenkung-Diagramm</strong> zeigt die Schwingung eines Punktes über die Zeit (x-Achse: Zeit) → man liest T ab.</p>`,
        formulas: [
          { label: 'Momentanbild', latex: 'y(x) = \\hat{y}\\sin\\!\\left(\\frac{2\\pi}{\\lambda}x\\right)' },
          { label: 'Zeit-Diagramm', latex: 'y(t) = \\hat{y}\\sin\\!\\left(\\frac{2\\pi}{T}t\\right)' },
        ],
        note: 'Vorsicht: Im Momentanbild liest man λ ab, im Zeit-Diagramm T. Die Achsenbezeichnung entscheidet!',
        deeper: `<p><strong>Bewegungsrichtung aus Momentanbild:</strong> Läuft die Welle in +x-Richtung, dann bewegt sich ein Punkt als nächstes in die Richtung, aus der er „kommt" – also wie der Punkt links von ihm gerade steht.</p>`
      },
      {
        title: 'Stehende Wellen',
        text: `<p>Überlagern sich zwei gleiche, gegenläufige Wellen (z.B. durch Reflexion), entsteht eine <strong>stehende Welle</strong>. Es gibt feste Schwingungsknoten (K) und -bäuche (B).</p>`,
        formulas: [
          { label: 'Wellenlängen (beidseitig fest)', latex: '\\lambda_n = \\frac{2L}{n} \\quad (n = 1, 2, 3, \\ldots)' },
          { label: 'Eigenfrequenzen', latex: 'f_n = \\frac{n \\cdot c}{2L}', note: 'harmonische Reihe' },
        ],
        deeper: `<p><strong>Randbedingungen:</strong> An einem festen Ende: immer Knoten. An einem losen Ende: immer Bauch. Dadurch: geschlossene Pfeife (beidseitig Knoten) ↔ Saite (beidseitig Knoten).</p>
<p><strong>Klang:</strong> Ein Instrument erzeugt alle Eigenfrequenzen \\(f_n = n \\cdot f_1\\) gleichzeitig. Die Mischung bestimmt den Klangcharakter (Timbre).</p>`
      },
      {
        title: 'Interferenz zweier Quellen',
        text: `<p>Zwei kohärente Punktquellen erzeugen ein <strong>Interferenzmuster</strong> mit Verstärkungs- und Auslöschungszonen.</p>`,
        formulas: [
          { label: 'Verstärkung', latex: '\\Delta s = m \\cdot \\lambda \\quad (m = 0,\\pm1,\\pm2,\\ldots)' },
          { label: 'Auslöschung', latex: '\\Delta s = (m + \\tfrac{1}{2}) \\cdot \\lambda' },
          { label: 'Gangunterschied', latex: '\\Delta s = |r_1 - r_2|' },
        ]
      }
    ],
    quickcheck: [
      {
        question: 'Welle mit \\(f = 440\\,\\text{Hz}\\) und \\(c = 330\\,\\text{m/s}\\). Wellenlänge?',
        options: ['\\(\\lambda = 0{,}75\\,\\text{m}\\)', '\\(\\lambda = 1{,}5\\,\\text{m}\\)', '\\(\\lambda = 0{,}375\\,\\text{m}\\)', '\\(\\lambda = 3\\,\\text{m}\\)'],
        correct: 0,
        explanation: '\\(\\lambda = c/f = 330/440 = 0{,}75\\,\\text{m}\\)'
      },
      {
        question: 'Was unterscheidet Momentanbild von Zeit-Auslenkung-Diagramm?',
        options: [
          'Im Momentanbild ist f ablesbar, im Zeit-Diagramm λ.',
          'Im Momentanbild ist λ ablesbar (Ort-Achse), im Zeit-Diagramm T.',
          'Es gibt keinen Unterschied.',
          'Im Momentanbild ist die Amplitude kleiner.'
        ],
        correct: 1,
        explanation: 'Momentanbild: fester Zeitpunkt, x-Achse = Ort → λ ablesen. Zeit-Diagramm: fester Ort, x-Achse = Zeit → T ablesen.'
      },
      {
        question: 'Seil (\\(L = 1\\,\\text{m}\\), beidseitig fest). Wellenlänge der Grundschwingung?',
        options: ['\\(\\lambda_1 = 2\\,\\text{m}\\)', '\\(\\lambda_1 = 1\\,\\text{m}\\)', '\\(\\lambda_1 = 0{,}5\\,\\text{m}\\)', '\\(\\lambda_1 = 4\\,\\text{m}\\)'],
        correct: 0,
        explanation: 'Grundschwingung (n = 1): \\(\\lambda_1 = 2L = 2\\,\\text{m}\\). Das Seil enthält genau eine halbe Wellenlänge.'
      },
      {
        question: 'Zwei kohärente Quellen, \\(\\lambda = 2\\,\\text{cm}\\). Punkt P mit \\(\\Delta s = 3\\,\\text{cm}\\). Was beobachtet man?',
        options: [
          'Konstruktive Interferenz',
          'Destruktive Interferenz',
          'Gar nichts',
          'Wechselnd'
        ],
        correct: 1,
        explanation: '\\(\\Delta s = 3\\,\\text{cm} = 1{,}5\\lambda = (1 + \\frac{1}{2})\\lambda\\) → Bedingung für Auslöschung.'
      },
      {
        question: 'Ein Seil (\\(L = 0{,}6\\,\\text{m}\\)) wird mit \\(c = 3\\,\\text{m/s}\\) angeregt. Welche Frequenz erzeugt die 3. Eigenfrequenz?',
        options: ['\\(f_3 = 7{,}5\\,\\text{Hz}\\)', '\\(f_3 = 2{,}5\\,\\text{Hz}\\)', '\\(f_3 = 5{,}0\\,\\text{Hz}\\)', '\\(f_3 = 15\\,\\text{Hz}\\)'],
        correct: 0,
        explanation: '\\(f_3 = 3c/(2L) = 3 \\cdot 3 / (2 \\cdot 0{,}6) = 7{,}5\\,\\text{Hz}\\)'
      },
      {
        question: 'Was ist der Unterschied zwischen Transversal- und Longitudinalwelle?',
        options: [
          'Transversalwellen breiten sich schneller aus.',
          'Bei Transversalwellen steht die Schwingungsrichtung senkrecht zur Ausbreitungsrichtung.',
          'Longitudinalwellen können interferieren, Transversalwellen nicht.',
          'Longitudinalwellen haben keine Wellenlänge.'
        ],
        correct: 1,
        explanation: 'Transversal: Schwingungsrichtung ⊥ Ausbreitungsrichtung (z.B. Seilwelle). Longitudinal: Schwingungsrichtung ∥ Ausbreitungsrichtung (z.B. Schall).'
      },
      {
        question: 'Eine Welle trifft auf ein festes Ende und wird reflektiert. Was entsteht?',
        options: [
          'Die Welle wird vollständig absorbiert.',
          'Es entsteht eine stehende Welle mit einem Knoten am festen Ende.',
          'Es entsteht eine stehende Welle mit einem Bauch am festen Ende.',
          'Die Wellenlänge verdoppelt sich nach der Reflexion.'
        ],
        correct: 1,
        explanation: 'An einem festen Ende entsteht ein Schwingungsknoten (Auslenkung = 0). Die hin- und rücklaufenden Wellen überlagern sich zur stehenden Welle.'
      }
    ],
    resources: [
      { icon: '📚', name: 'Leifiphysik – Mechanische Wellen', desc: 'Wellengrundlagen, stehende Wellen, Interferenz', url: 'https://www.leifiphysik.de/mechanik/mechanische-wellen' },
      { icon: '📺', name: 'Simple Club – Wellen', desc: 'Wellen und Wellenphänomene kompakt', url: 'https://www.simpleclub.com/lessons/physik-wellen' },
      { icon: '🔬', name: 'PhET: Wave on a String', desc: 'Seilwellen interaktiv', url: 'https://phet.colorado.edu/de/simulations/wave-on-a-string' },
      { icon: '🔬', name: 'PhET: Wave Interference', desc: 'Interferenz und stehende Wellen', url: 'https://phet.colorado.edu/de/simulations/wave-interference' }
    ]
  }

};
