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
                detailedExplanation: 'Häufiger Fehler: Die Masse m muss zuerst von Gramm in Kilogramm umgerechnet werden (400 g = 0,4 kg). Die Formel T = 2π√(m/k) gilt nur mit SI-Einheiten. Merke: Größere Masse → träger → längere Schwingungsdauer. Stärkere Feder (größeres k) → schnellere Rückstellung → kürzere Schwingungsdauer.',
        links: [
          { title: 'Simple Club – Federpendel & Periodendauer', url: 'https://www.youtube.com/results?search_query=simple+club+federpendel+periodendauer' },
          { title: 'Leifiphysik: Federpendel Grundlagen', url: 'https://www.leifiphysik.de/mechanik/mechanische-schwingungen/grundwissen/federpendel' },
          { title: 'PhET Simulation: Massen und Federn', url: 'https://phet.colorado.edu/de/simulations/masses-and-springs' }
        ],
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
                detailedExplanation: 'Die Definition der harmonischen Schwingung ist die rücktreibende Kraft proportional zur Auslenkung: F_rück = -D·s. Daraus folgt die Differentialgleichung. Die Amplitude nimmt nur bei gedämpften Schwingungen ab - das ist kein definierendes Merkmal. Die Periodendauer ist gerade UNABHÄNGIG von der Amplitude (Isochronie)!',
        links: [
          { title: 'Simple Club – Harmonische Schwingung Erklärung', url: 'https://www.youtube.com/results?search_query=simple+club+harmonische+schwingung' },
          { title: 'Leifiphysik: Definition harmonische Schwingung', url: 'https://www.leifiphysik.de/mechanik/mechanische-schwingungen/grundwissen/harmonische-schwingung' }
        ],
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
      },
      {
        question: 'Welche Phasenbeziehung gilt zwischen Auslenkung \\(s(t)\\) und Beschleunigung \\(a(t)\\) bei harmonischer Schwingung?',
        options: [
          'Sie sind phasengleich (0° Verschiebung).',
          'Beschleunigung eilt 90° vor der Auslenkung.',
          'Sie sind gegenphasig (180° Verschiebung).',
          'Auslenkung eilt 90° vor der Beschleunigung.'
        ],
        correct: 2,
        explanation: 'Da \\(a = -\\omega^2 s\\), sind Auslenkung und Beschleunigung stets um 180° phasenverschoben (gegenphasig). Maximale Auslenkung → maximale rücktreibende Beschleunigung.'
      },
      {
        question: 'Ein System schwingt mit \\(T = 0{,}5\\,\\text{s}\\). Wie groß ist die Kreisfrequenz \\(\\omega\\)?',
        options: ['\\(\\omega \\approx 12{,}6\\,\\text{rad/s}\\)', '\\(\\omega \\approx 6{,}3\\,\\text{rad/s}\\)', '\\(\\omega \\approx 2{,}0\\,\\text{rad/s}\\)', '\\(\\omega \\approx 3{,}14\\,\\text{rad/s}\\)'],
        correct: 0,
        explanation: '\\(\\omega = 2\\pi/T = 2\\pi/0{,}5 \\approx 12{,}6\\,\\text{rad/s}\\). Merke: Die Kreisfrequenz ist nicht die Frequenz, sondern \\(\\omega = 2\\pi f\\).'
      },
      {
        question: 'Ein Körper (\\(m = 2\\,\\text{kg}\\)) hängt an einer Feder und schwingt mit \\(T = 2\\,\\text{s}\\). Wie groß ist die Federkonstante k?',
        options: ['\\(k \\approx 19{,}7\\,\\text{N/m}\\)', '\\(k \\approx 9{,}9\\,\\text{N/m}\\)', '\\(k \\approx 39{,}5\\,\\text{N/m}\\)', '\\(k = 4\\,\\text{N/m}\\)'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{m/k}\\) → \\(k = m\\cdot(2\\pi/T)^2 = 2\\cdot(2\\pi/2)^2 = 2\\pi^2 \\approx 19{,}7\\,\\text{N/m}\\).'
      },
      {
        question: 'Ein Fadenpendel soll die Periodendauer \\(T = 1\\,\\text{s}\\) haben. Wie lang muss der Faden sein?',
        options: ['\\(L \\approx 25\\,\\text{cm}\\)', '\\(L \\approx 1\\,\\text{m}\\)', '\\(L \\approx 50\\,\\text{cm}\\)', '\\(L \\approx 9{,}8\\,\\text{cm}\\)'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{L/g}\\) → \\(L = g(T/2\\pi)^2 = 9{,}81 \\cdot (1/(2\\pi))^2 \\approx 0{,}25\\,\\text{m} = 25\\,\\text{cm}\\).'
      },
      {
        question: 'Harmonische Schwingung: \\(\\hat{s} = 5\\,\\text{cm}\\), \\(f = 2\\,\\text{Hz}\\). Wie groß ist die maximale Beschleunigung \\(a_{\\max}\\)?',
        options: ['\\(a_{\\max} \\approx 7{,}9\\,\\text{m/s}^2\\)', '\\(a_{\\max} \\approx 0{,}63\\,\\text{m/s}^2\\)', '\\(a_{\\max} \\approx 1{,}26\\,\\text{m/s}^2\\)', '\\(a_{\\max} \\approx 62{,}8\\,\\text{m/s}^2\\)'],
        correct: 0,
        explanation: '\\(a_{\\max} = \\hat{s}\\cdot\\omega^2 = 0{,}05 \\cdot (2\\pi \\cdot 2)^2 = 0{,}05 \\cdot 16\\pi^2 \\approx 7{,}9\\,\\text{m/s}^2\\). Tritt an den Umkehrpunkten auf.'
      },
      {
        question: 'Bei einer gedämpften Schwingung sinkt die Amplitude auf 50% des Anfangswerts. Auf wie viel Prozent sinkt die Gesamtenergie?',
        options: ['25%', '50%', '70,7%', '12,5%'],
        correct: 0,
        explanation: 'Energie ist proportional zum Amplitudenquadrat: \\(E \\propto \\hat{s}^2\\). Bei \\(\\hat{s} = 0{,}5\\,\\hat{s}_0\\): \\(E = (0{,}5)^2 \\cdot E_0 = 0{,}25\\,E_0 = 25\\%\\).'
      },
      {
        question: 'Welche Phasenverschiebung besteht bei Resonanz zwischen Erreger und Schwinger?',
        options: ['0° (phasengleich)', '90°', '180° (gegenphasig)', '45°'],
        correct: 1,
        explanation: 'Bei Resonanz (\\(f_E = f_0\\)) beträgt die Phasenverschiebung genau 90°. Das System nimmt dann am meisten Energie pro Schwingung auf.'
      },
      {
        question: '\\(s(t) = 10\\,\\text{cm}\\cdot\\sin(2\\pi t)\\). Welche Auslenkung ergibt sich für \\(t = 0{,}25\\,\\text{s}\\)?',
        options: ['10 cm (Maximum)', '0 cm', '7,07 cm', '−10 cm'],
        correct: 0,
        explanation: '\\(s(0{,}25) = 10\\,\\text{cm}\\cdot\\sin(2\\pi \\cdot 0{,}25) = 10\\,\\text{cm}\\cdot\\sin(\\tfrac{\\pi}{2}) = 10\\,\\text{cm}\\). Das ist der Umkehrpunkt.'
      },
      {
        question: 'Zwei Federn: \\(k_1 = 4\\,\\text{N/m}\\), \\(k_2 = 16\\,\\text{N/m}\\), gleiche Masse. Verhältnis \\(T_1 : T_2\\)?',
        options: ['\\(2 : 1\\)', '\\(4 : 1\\)', '\\(1 : 2\\)', '\\(1 : 1\\)'],
        correct: 0,
        explanation: '\\(T \\propto \\sqrt{1/k}\\). \\(T_1/T_2 = \\sqrt{k_2/k_1} = \\sqrt{16/4} = 2\\). Die weichere Feder schwingt doppelt so langsam.'
      },
      {
        question: 'Federpendel mit \\(k = 20\\,\\text{N/m}\\) und Amplitude \\(\\hat{s} = 8\\,\\text{cm}\\). Gesamtenergie?',
        options: ['\\(E = 64\\,\\text{mJ}\\)', '\\(E = 128\\,\\text{mJ}\\)', '\\(E = 32\\,\\text{mJ}\\)', '\\(E = 6{,}4\\,\\text{mJ}\\)'],
        correct: 0,
        explanation: '\\(E_{\\text{ges}} = \\tfrac{1}{2}k\\hat{s}^2 = \\tfrac{1}{2}\\cdot 20\\cdot(0{,}08)^2 = 0{,}064\\,\\text{J} = 64\\,\\text{mJ}\\).'
      },
      {
        question: 'Die Gleichung \\(\\ddot{x} + 9x = 0\\) beschreibt eine harmonische Schwingung. Wie groß ist \\(\\omega_0\\) und die Frequenz f?',
        options: ['\\(\\omega_0 = 3\\,\\text{rad/s}\\), \\(f \\approx 0{,}48\\,\\text{Hz}\\)', '\\(\\omega_0 = 9\\,\\text{rad/s}\\), \\(f \\approx 1{,}43\\,\\text{Hz}\\)', '\\(\\omega_0 = \\sqrt{3}\\,\\text{rad/s}\\)', '\\(\\omega_0 = 81\\,\\text{rad/s}\\)'],
        correct: 0,
        explanation: 'Vergleich mit \\(\\ddot{x} + \\omega_0^2 x = 0\\): \\(\\omega_0^2 = 9\\) → \\(\\omega_0 = 3\\,\\text{rad/s}\\), \\(f = \\omega_0/(2\\pi) \\approx 0{,}48\\,\\text{Hz}\\).'
      },
      {
        question: 'Ein Fadenpendel hat auf der Erde \\(T = 2\\,\\text{s}\\). Auf dem Mond gilt \\(g_{\\text{M}} = g_{\\text{E}}/6\\). Welche T hat es auf dem Mond?',
        options: ['\\(T_{\\text{M}} \\approx 4{,}9\\,\\text{s}\\)', '\\(T_{\\text{M}} \\approx 12\\,\\text{s}\\)', '\\(T_{\\text{M}} \\approx 0{,}82\\,\\text{s}\\)', '\\(T_{\\text{M}} = 2\\,\\text{s}\\)'],
        correct: 0,
        explanation: '\\(T \\propto 1/\\sqrt{g}\\). \\(T_{\\text{M}} = T_{\\text{E}}\\cdot\\sqrt{g_{\\text{E}}/g_{\\text{M}}} = 2\\cdot\\sqrt{6} \\approx 4{,}9\\,\\text{s}\\). Auf dem Mond schwingt das Pendel langsamer.'
      },
      {
        question: 'Wo befindet sich ein harmonisch schwingender Körper, wenn seine Geschwindigkeit gleich der Maximalgeschwindigkeit ist?',
        options: ['In der Gleichgewichtslage (\\(s = 0\\))', 'An den Umkehrpunkten', 'Bei \\(s = \\hat{s}/2\\)', 'Die Maximalgeschwindigkeit tritt nicht bei einer bestimmten Position auf.'],
        correct: 0,
        explanation: '\\(v_{\\max} = \\hat{s}\\cdot\\omega\\) wird in \\(s = 0\\) erreicht. Dort ist \\(E_{\\text{pot}} = 0\\), die gesamte Energie steckt in der Bewegungsenergie.'
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
      },
      {
        question: 'Ein Elektron (\\(q = 1{,}6\\cdot10^{-19}\\,\\text{C}\\), \\(m = 9{,}1\\cdot10^{-31}\\,\\text{kg}\\)) fliegt senkrecht in \\(B = 0{,}05\\,\\text{T}\\) mit \\(v = 2\\cdot10^6\\,\\text{m/s}\\). Welchen Kreisradius beschreibt es?',
        options: ['\\(r \\approx 0{,}23\\,\\text{mm}\\)', '\\(r \\approx 2{,}3\\,\\text{cm}\\)', '\\(r \\approx 23\\,\\text{cm}\\)', '\\(r \\approx 2{,}3\\,\\text{mm}\\)'],
        correct: 0,
        explanation: '\\(r = mv/(qB) = (9{,}1\\cdot10^{-31}\\cdot 2\\cdot10^6)/(1{,}6\\cdot10^{-19}\\cdot 0{,}05) \\approx 2{,}3\\cdot10^{-4}\\,\\text{m} = 0{,}23\\,\\text{mm}\\).'
      },
      {
        question: 'Warum ist das Hochspannungsübertragungsnetz sinnvoll? Transformatoren erhöhen die Spannung um Faktor 10. Was passiert mit den Leitungsverlusten?',
        options: [
          'Verluste sinken auf 1% (Faktor 100)',
          'Verluste halbieren sich',
          'Verluste bleiben gleich',
          'Verluste steigen um Faktor 10'
        ],
        correct: 0,
                detailedExplanation: 'Der typische Denkfehler: Man denkt, 10-fache Spannung = 10-fach weniger Verlust. Aber der Verlust ist proportional zu I², nicht I! Bei 10-facher Spannung fließt 1/10 des Stroms. Verlust: (1/10)² = 1/100 = 1%. Das ist der Grund für Hochspannungsleitungen: Verluste werden von 100% auf 1% reduziert!',
        links: [
          { title: 'Simple Club – Transformator & Hochspannung', url: 'https://www.youtube.com/results?search_query=simple+club+transformator+hochspannung+physik' },
          { title: 'Leifiphysik: Übertragungsverluste', url: 'https://www.leifiphysik.de/elektrizitaetslehre/elektromagnetische-induktion/grundwissen/transformator' }
        ],
        explanation: '\\(P_{\\text{Verl}} = I^2 R\\). Bei 10-facher Spannung und gleicher Leistung fließt 1/10 Strom. \\(P_{\\text{Verl}} \\propto I^2\\): Verluste sinken auf \\((1/10)^2 = 1/100\\) = 1%.'
      },
      {
        question: 'Eine Spule mit \\(n = 200\\) Windungen und Querschnitt \\(A = 10\\,\\text{cm}^2\\) befindet sich in \\(B = 0{,}1\\,\\text{T}\\). Das B-Feld wird in \\(\\Delta t = 0{,}01\\,\\text{s}\\) auf 0 reduziert. Welche Spannung wird induziert?',
        options: ['\\(U = 20\\,\\text{V}\\)', '\\(U = 0{,}2\\,\\text{V}\\)', '\\(U = 2\\,\\text{V}\\)', '\\(U = 200\\,\\text{V}\\)'],
        correct: 0,
        explanation: '\\(U = n\\cdot\\Delta\\Phi/\\Delta t = n\\cdot B\\cdot A/\\Delta t = 200\\cdot 0{,}1\\cdot 10^{-3}/0{,}01 = 20\\,\\text{V}\\).'
      },
      {
        question: 'Ein idealer Transformator: primärseitig \\(U_1 = 400\\,\\text{V}\\), \\(I_1 = 2\\,\\text{A}\\). Sekundärseitig \\(U_2 = 20\\,\\text{V}\\). Welcher Strom \\(I_2\\) fließt sekundärseitig?',
        options: ['\\(I_2 = 40\\,\\text{A}\\)', '\\(I_2 = 0{,}1\\,\\text{A}\\)', '\\(I_2 = 2\\,\\text{A}\\)', '\\(I_2 = 4\\,\\text{A}\\)'],
        correct: 0,
        explanation: 'Leistungserhaltung: \\(U_1 I_1 = U_2 I_2\\) → \\(I_2 = U_1 I_1/U_2 = 400\\cdot 2/20 = 40\\,\\text{A}\\). Spannungsübersetzung nach unten → Stromübersetzung nach oben.'
      },
      {
        question: 'In welche Richtung wirkt die Lorentzkraft auf ein Elektron, das sich in +x-Richtung bewegt, wenn \\(\\vec{B}\\) in +z-Richtung zeigt?',
        options: [
          'In –y-Richtung (nach unten)',
          'In +y-Richtung (nach oben)',
          'In +x-Richtung (wie die Bewegung)',
          'In –z-Richtung (entgegen B)'
        ],
        correct: 0,
        explanation: 'Für positive Ladung: \\(\\vec{F} = q(\\vec{v}\\times\\vec{B})\\). \\(\\hat{x}\\times\\hat{z} = -\\hat{y}\\). Da Elektron negativ (\\(q < 0\\)): Kraft in +y... Nein: \\(q(-e)\\cdot(-\\hat{y}) = +e\\hat{y}\\)? Achtung: \\(\\hat{x}\\times\\hat{z} = -\\hat{y}\\), daher für \\(-e\\): \\(F = (-e)(v)(-\\hat{y}) = +ev\\hat{y}\\)... Genauer: Kraft auf Elektron zeigt in –y-Richtung (Negative Ladung kehrt Richtung um).'
      },
      {
        question: 'Wann induziert ein vollständig in ein homogenes B-Feld eingetauchter Rahmen KEINE Spannung?',
        options: [
          'Wenn er sich nicht bewegt und B konstant ist',
          'Wenn er sich schnell bewegt',
          'Wenn seine Fläche groß ist',
          'Wenn er viele Windungen hat'
        ],
        correct: 0,
        explanation: 'Induktion erfordert Flussänderung: \\(U_{\\text{ind}} = -n\\cdot\\Delta\\Phi/\\Delta t\\). Wenn Rahmen vollständig im homogenen Feld und B konstant ist, ändert sich \\(\\Phi = B\\cdot A\\) nicht → \\(U_{\\text{ind}} = 0\\).'
      },
      {
        question: 'Kapazität eines Plattenkondensators: \\(C = \\varepsilon_0 A/d\\). Was passiert mit C, wenn der Plattenabstand verdoppelt und die Fläche verdreifacht wird?',
        options: [
          'C nimmt auf das 1,5-fache zu.',
          'C nimmt auf das 6-fache zu.',
          'C bleibt gleich.',
          'C halbiert sich.'
        ],
        correct: 0,
        explanation: '\\(C = \\varepsilon_0 A/d\\). Neue Kapazität: \\(C\'= \\varepsilon_0 (3A)/(2d) = (3/2)\\cdot C = 1{,}5\\,C\\). Fläche×3 erhöht C, Abstand×2 erniedrigt C.'
      },
      {
        question: 'Eine Spule mit \\(L = 0{,}2\\,\\text{H}\\) trägt einen Strom von \\(I = 3\\,\\text{A}\\). Wie viel Energie ist gespeichert?',
        options: ['\\(E = 0{,}9\\,\\text{J}\\)', '\\(E = 0{,}6\\,\\text{J}\\)', '\\(E = 1{,}8\\,\\text{J}\\)', '\\(E = 0{,}3\\,\\text{J}\\)'],
        correct: 0,
        explanation: '\\(E_{\\text{mag}} = \\frac{1}{2}LI^2 = \\frac{1}{2}\\cdot 0{,}2 \\cdot 9 = 0{,}9\\,\\text{J}\\). Die magnetische Energie steckt im Feld innerhalb der Spule.'
      },
      {
        question: 'Ein Generator erzeugt \\(U_0 = 325\\,\\text{V}\\) (Amplitude). Wie groß ist die Effektivspannung \\(U_{\\text{eff}}\\)?',
        options: ['\\(U_{\\text{eff}} \\approx 230\\,\\text{V}\\)', '\\(U_{\\text{eff}} = 325\\,\\text{V}\\)', '\\(U_{\\text{eff}} \\approx 460\\,\\text{V}\\)', '\\(U_{\\text{eff}} \\approx 163\\,\\text{V}\\)'],
        correct: 0,
        explanation: '\\(U_{\\text{eff}} = U_0/\\sqrt{2} = 325/\\sqrt{2} \\approx 230\\,\\text{V}\\). Die Effektivspannung erzeugt dieselbe Wärmeleistung wie eine Gleichspannung gleicher Größe.'
      },
      {
        question: 'Was versteht man unter Selbstinduktion?',
        options: [
          'Eine Spule induziert in sich selbst eine Spannung, wenn sich ihr eigener Strom ändert.',
          'Zwei benachbarte Spulen induzieren gegenseitig Spannungen.',
          'Ein Permanentmagnet induziert Spannung in einer Spule.',
          'Ein Kondensator lädt sich selbst auf.'
        ],
        correct: 0,
        explanation: 'Selbstinduktion: Ändert sich der Strom durch eine Spule, ändert sich ihr eigenes Magnetfeld, was eine Gegenspannung erzeugt: \\(U_{\\text{ind}} = -L\\cdot\\Delta I/\\Delta t\\). Das ist der Grund für die verzögerte Stromänderung.'
      },
      {
        question: 'Ein Kondensator \\(C = 50\\,\\mu\\text{F}\\) lädt sich über \\(R = 1\\,\\text{k}\\Omega\\) auf \\(U_0 = 100\\,\\text{V}\\). Nach einer Zeitkonstante \\(\\tau = RC\\) ist die Spannung auf ca. ____ gestiegen.',
        options: ['63 V', '50 V', '37 V', '100 V'],
        correct: 0,
        explanation: '\\(\\tau = RC = 10^3\\cdot 50\\cdot10^{-6} = 0{,}05\\,\\text{s}\\). Nach \\(\\tau\\) gilt \\(U(\\tau) = U_0(1-e^{-1}) \\approx 0{,}632\\cdot 100 = 63\\,\\text{V}\\). Danach steigt U immer langsamer.'
      },
      {
        question: 'Warum verrichtet die Lorentzkraft keine Arbeit an einer bewegten Ladung?',
        options: [
          'Weil sie stets senkrecht zur Geschwindigkeit steht.',
          'Weil sie zu klein ist.',
          'Weil Magnetfelder keine Energie übertragen können.',
          'Weil Elektronen keine Masse haben.'
        ],
        correct: 0,
        explanation: 'Arbeit \\(W = \\vec{F}\\cdot\\vec{s}\\). Da \\(\\vec{F}_{\\text{Lorentz}} \\perp \\vec{v}\\), ist das Skalarprodukt null. Die Lorentzkraft lenkt ab, beschleunigt aber nicht – die kinetische Energie bleibt konstant.'
      },
      {
        question: 'Ein Rahmen (\\(A = 200\\,\\text{cm}^2\\), \\(n = 100\\)) rotiert mit \\(\\omega = 50\\pi\\,\\text{rad/s}\\) in \\(B = 0{,}2\\,\\text{T}\\). Maximale Generatorspannung?',
        options: ['\\(U_0 \\approx 628\\,\\text{V}\\)', '\\(U_0 \\approx 63\\,\\text{V}\\)', '\\(U_0 \\approx 6280\\,\\text{V}\\)', '\\(U_0 \\approx 2\\,\\text{V}\\)'],
        correct: 0,
        explanation: '\\(U_0 = n\\cdot B\\cdot A\\cdot\\omega = 100\\cdot 0{,}2\\cdot 0{,}02\\cdot 50\\pi \\approx 628\\,\\text{V}\\).'
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
        explanation: '\\(\\sin\\vartheta = \\lambda/g = 635\\cdot10^{-9}/10^{-5} = 0{,}0635\\) → \\(\\vartheta \\approx 3{,}64°\\)'
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
        explanation: '\\(y_1 = \\lambda L / g = 500\\cdot10^{-9}\\cdot 2 / (0{,}5\\cdot10^{-3}) = 2\\,\\text{mm}\\)'
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
      },
      {
        question: 'Ein optisches Gitter hat 500 Striche/mm. Wie groß ist die Gitterkonstante g?',
        options: ['\\(g = 2\\,\\mu\\text{m}\\)', '\\(g = 0{,}5\\,\\mu\\text{m}\\)', '\\(g = 2\\,\\text{mm}\\)', '\\(g = 500\\,\\text{nm}\\)'],
        correct: 0,
        explanation: '\\(g = 1/500\\,\\text{mm}^{-1} = 0{,}002\\,\\text{mm} = 2\\,\\mu\\text{m}\\). Die Gitterkonstante ist der Kehrwert der Strichdichte.'
      },
      {
        question: 'Welche Ordnungen m sind beim Gitter (\\(g = 600\\,\\text{nm}\\), \\(\\lambda = 400\\,\\text{nm}\\)) theoretisch sichtbar?',
        options: [
          'Maximal m = 1',
          'Maximal m = ±1',
          'Bis m = ±1 (da \\(g/\\lambda = 1{,}5\\), max. m = 1 auf jeder Seite)',
          'Bis m = ±3'
        ],
        correct: 2,
        explanation: '\\(\\sin\\vartheta = m\\lambda/g \\leq 1\\) → \\(m \\leq g/\\lambda = 600/400 = 1{,}5\\). Daher sind nur die Ordnungen \\(m = 0, \\pm1\\) sichtbar.'
      },
      {
        question: 'Doppelspalt: Spaltabstand g wird verdoppelt. Was passiert mit dem Abstand der Maxima auf dem Schirm?',
        options: [
          'Der Abstand halbiert sich.',
          'Der Abstand verdoppelt sich.',
          'Der Abstand bleibt gleich.',
          'Der Abstand vervierfacht sich.'
        ],
        correct: 0,
        explanation: '\\(y_m = m\\lambda L/g\\). Bei doppeltem g halbiert sich \\(y_m\\). Engerer Spalt → weiter auseinander liegende Maxima ist falsch – es ist umgekehrt: größerer Spaltabstand → engere Maxima.'
      },
      {
        question: 'Wie viele Minima hat der Einzelspalt (Breite \\(b = 4\\lambda\\)) auf jeder Seite des Zentralmaximums?',
        options: ['4 Minima auf jeder Seite', '2 Minima auf jeder Seite', '1 Minimum auf jeder Seite', 'Keine Minima'],
        correct: 0,
        explanation: 'Minima bei \\(b\\sin\\vartheta_m = m\\lambda\\), \\(m = \\pm1, \\pm2, \\ldots\\). Für \\(\\sin\\vartheta \\leq 1\\): \\(m \\leq b/\\lambda = 4\\). Also 4 Minima auf jeder Seite.'
      },
      {
        question: 'Zwei Wellenquellen schwingen mit der gleichen Frequenz und haben konstante Phasenbeziehung. Wie heißt diese Eigenschaft?',
        options: ['Kohärenz', 'Dispersion', 'Resonanz', 'Polarisation'],
        correct: 0,
        explanation: 'Kohärenz ist die Voraussetzung für stabile Interferenzmuster. Nur kohärente Quellen (z.B. Laser, gleicher Erreger) erzeugen ein dauerhaftes Interferenzbild.'
      },
      {
        question: 'Licht trifft von Luft (\\(n_1 = 1\\)) auf Glas (\\(n_2 = 1{,}5\\)) unter \\(\\alpha_1 = 30°\\). Brechungswinkel \\(\\alpha_2\\)?',
        options: ['\\(\\alpha_2 \\approx 19{,}5°\\)', '\\(\\alpha_2 = 45°\\)', '\\(\\alpha_2 = 30°\\)', '\\(\\alpha_2 \\approx 48°\\)'],
        correct: 0,
        explanation: 'Snellius: \\(n_1\\sin\\alpha_1 = n_2\\sin\\alpha_2\\) → \\(\\sin\\alpha_2 = \\sin30°/1{,}5 = 0{,}5/1{,}5 = 1/3\\) → \\(\\alpha_2 \\approx 19{,}5°\\). Licht wird zur Normalen hin gebrochen.'
      },
      {
        question: 'Was ist der Gangunterschied beim 2. Nebenmaximum (m = 2) eines optischen Gitters?',
        options: ['\\(\\Delta s = 2\\lambda\\)', '\\(\\Delta s = 0{,}5\\lambda\\)', '\\(\\Delta s = 1{,}5\\lambda\\)', '\\(\\Delta s = 4\\lambda\\)'],
        correct: 0,
        explanation: 'Für das m-te Maximum gilt \\(\\Delta s = m\\lambda\\). Beim 2. Maximum: \\(\\Delta s = 2\\lambda\\). Konstruktive Interferenz tritt bei ganzzahligen Vielfachen der Wellenlänge auf.'
      },
      {
        question: 'Welche Wellenlänge hat rotes Licht (\\(f = 4{,}6\\cdot10^{14}\\,\\text{Hz}\\)) in Glas (\\(n = 1{,}5\\))?',
        options: ['\\(\\lambda_{\\text{Glas}} \\approx 434\\,\\text{nm}\\)', '\\(\\lambda_{\\text{Glas}} \\approx 652\\,\\text{nm}\\)', '\\(\\lambda_{\\text{Glas}} \\approx 1000\\,\\text{nm}\\)', '\\(\\lambda_{\\text{Glas}} \\approx 217\\,\\text{nm}\\)'],
        correct: 0,
        explanation: 'In Luft: \\(\\lambda = c/f = 3\\cdot10^8/(4{,}6\\cdot10^{14}) \\approx 652\\,\\text{nm}\\). In Glas: \\(\\lambda_{\\text{Glas}} = \\lambda_{\\text{Luft}}/n = 652/1{,}5 \\approx 434\\,\\text{nm}\\). Die Frequenz bleibt gleich, nur \\(\\lambda\\) und c ändern sich.'
      },
      {
        question: 'Warum kann man mit einem optischen Gitter Wellenlängen genauer bestimmen als mit einem Doppelspalt?',
        options: [
          'Das Gitter erzeugt schärfere, intensivere Maxima durch konstruktive Überlagerung vieler Spalte.',
          'Das Gitter hat eine größere Gitterkonstante.',
          'Der Doppelspalt kann keine Wellenlängen bestimmen.',
          'Das Gitter ist teurer und daher genauer.'
        ],
        correct: 0,
        explanation: 'Beim Gitter überlagern sich Hunderte bis Tausende von Spalten. Die Maxima werden dadurch extrem schmal und hell – die Auflösung ist viel höher als beim Doppelspalt.'
      },
      {
        question: 'Einzelspalt (\\(b = 0{,}1\\,\\text{mm}\\), \\(\\lambda = 500\\,\\text{nm}\\), \\(L = 1\\,\\text{m}\\)). Breite des zentralen Maximums (von Minimum zu Minimum)?',
        options: ['\\(\\Delta y = 10\\,\\text{mm}\\)', '\\(\\Delta y = 5\\,\\text{mm}\\)', '\\(\\Delta y = 2\\,\\text{mm}\\)', '\\(\\Delta y = 20\\,\\text{mm}\\)'],
        correct: 0,
        explanation: '\\(\\Delta y = 2\\lambda L/b = 2\\cdot500\\cdot10^{-9}\\cdot1/(10^{-4}) = 10\\,\\text{mm}\\). Das zentrale Maximum ist doppelt so breit wie alle Nebenmaxima.'
      },
      {
        question: 'Was passiert mit dem Interferenzmuster, wenn Licht kohärenter wird (z.B. durch Verwendung eines Lasers statt einer Glühbirne)?',
        options: [
          'Das Muster wird deutlicher und kontrastreicher sichtbar.',
          'Das Muster verschwindet.',
          'Die Wellenlänge ändert sich.',
          'Die Maxima wandern zur Seite.'
        ],
        correct: 0,
        explanation: 'Kohärentes Licht (konstante Phasendifferenz) führt zu stabilem, kontrastreichen Interferenzmuster. Inkohärentes Licht erzeugt viele überlagernde Muster, die sich ausmitteln.'
      },
      {
        question: 'Was ist totale Reflexion, und wann tritt sie auf?',
        options: [
          'Übergang vom dichteren ins dünnere Medium, Einfallswinkel ≥ Grenzwinkel.',
          'Übergang vom dünneren ins dichtere Medium bei jedem Winkel.',
          'Reflexion an einem Spiegel.',
          'Licht wird vom Gitter vollständig absorbiert.'
        ],
        correct: 0,
        explanation: 'Totale Reflexion tritt beim Übergang aus optisch dichterem ins dünnere Medium auf, wenn der Einfallswinkel den Grenzwinkel überschreitet: \\(\\sin\\alpha_{\\text{grenz}} = n_2/n_1\\). Anwendung: Glasfaserkabel.'
      },
      {
        question: 'Laser 1: \\(\\lambda = 532\\,\\text{nm}\\). Laser 2: \\(\\lambda = 633\\,\\text{nm}\\). Beide am selben Gitter (\\(g = 2\\,\\mu\\text{m}\\), \\(m = 1\\)). Welcher Winkel ist größer?',
        options: [
          'Laser 2 (633 nm), da \\(\\sin\\vartheta = \\lambda/g\\) und größeres \\(\\lambda\\) → größerer Winkel.',
          'Laser 1 (532 nm), da kürzere Wellenlänge stärker gebeugt wird.',
          'Beide haben denselben Winkel.',
          'Keiner wird abgelenkt.'
        ],
        correct: 0,
        explanation: '\\(\\sin\\vartheta = m\\lambda/g\\). Größere Wellenlänge → größerer Sinus → größerer Winkel. Rot wird stärker abgelenkt als Grün – umgekehrt wie bei Prismen.'
      },
      {
        question: 'Experimentell misst man beim Gitter: \\(\\vartheta_1 = 18{,}4°\\), \\(\\lambda = 633\\,\\text{nm}\\). Wie viele Linien/mm hat das Gitter?',
        options: ['ca. 500 Linien/mm', 'ca. 250 Linien/mm', 'ca. 1000 Linien/mm', 'ca. 100 Linien/mm'],
        correct: 0,
        explanation: '\\(g = \\lambda/\\sin\\vartheta_1 = 633\\cdot10^{-9}/\\sin18{,}4° \\approx 633\\cdot10^{-9}/0{,}316 \\approx 2\\,\\mu\\text{m}\\). Linien/mm = \\(1/g = 1/(2\\cdot10^{-3}\\,\\text{mm}) = 500\\,\\text{mm}^{-1}\\).'
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
      },
      {
        question: 'Im LC-Kreis wird L verdoppelt. Wie ändert sich die Schwingungsperiode T?',
        options: [
          '\\(T\\) wächst um Faktor \\(\\sqrt{2}\\).',
          '\\(T\\) verdoppelt sich.',
          '\\(T\\) halbiert sich.',
          '\\(T\\) bleibt gleich.'
        ],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{LC} \\propto \\sqrt{L}\\). Bei doppeltem L: \\(T_{\\text{neu}} = T\\cdot\\sqrt{2} \\approx 1{,}41\\,T\\).'
      },
      {
        question: 'In einem LC-Kreis ist \\(L = 100\\,\\text{mH}\\) und \\(I_0 = 0{,}5\\,\\text{A}\\). Welche maximale Spannung \\(U_0\\) tritt am Kondensator (\\(C = 10\\,\\mu\\text{F}\\)) auf?',
        options: ['\\(U_0 = 50\\,\\text{V}\\)', '\\(U_0 = 100\\,\\text{V}\\)', '\\(U_0 = 5\\,\\text{V}\\)', '\\(U_0 = 500\\,\\text{V}\\)'],
        correct: 0,
        explanation: 'Energieerhaltung: \\(\\frac{1}{2}LI_0^2 = \\frac{1}{2}CU_0^2\\) → \\(U_0 = I_0\\sqrt{L/C} = 0{,}5\\cdot\\sqrt{0{,}1/10^{-5}} = 0{,}5\\cdot 100 = 50\\,\\text{V}\\).'
      },
      {
        question: 'Warum klingt ein realer LC-Schwingkreis ab? Was ist der physikalische Grund?',
        options: [
          'Der Widerstand R der Spule dissipiert Energie als Wärme.',
          'Der Kondensator verliert Ladung durch Leckstrom ins Vakuum.',
          'Die Schwingfrequenz sinkt mit der Zeit.',
          'Magnetische Felder können keine Energie speichern.'
        ],
        correct: 0,
        explanation: 'Jede reale Spule hat einen ohmschen Widerstand R. Jede Schwingungsperiode wird Energie \\(\\Delta E = I^2 R \\cdot t\\) in Wärme umgewandelt, daher nimmt die Amplitude ab.'
      },
      {
        question: 'Wie verhält sich die Spannung am Kondensator, wenn der Strom im LC-Kreis maximal ist?',
        options: [
          'Die Spannung ist null.',
          'Die Spannung ist ebenfalls maximal.',
          'Die Spannung beträgt \\(U_0/\\sqrt{2}\\).',
          'Die Spannung steigt weiter an.'
        ],
        correct: 0,
        explanation: 'Wenn I maximal ist, ist der Kondensator vollständig entladen (U = 0). Alle Energie steckt im Magnetfeld der Spule. Genau wie beim Federpendel: maximale Geschwindigkeit bei Auslenkung null.'
      },
      {
        question: 'Ein Radio empfängt mit einem LC-Kreis (\\(L = 250\\,\\mu\\text{H}\\)) eine Frequenz von \\(1\\,\\text{MHz}\\). Welche Kapazität ist nötig?',
        options: ['\\(C \\approx 101\\,\\text{pF}\\)', '\\(C \\approx 10\\,\\text{pF}\\)', '\\(C \\approx 1\\,\\text{nF}\\)', '\\(C \\approx 1\\,\\mu\\text{F}\\)'],
        correct: 0,
        explanation: '\\(f = 1/(2\\pi\\sqrt{LC})\\) → \\(C = 1/(4\\pi^2 f^2 L) = 1/(4\\pi^2\\cdot10^{12}\\cdot250\\cdot10^{-6}) \\approx 1{,}01\\cdot10^{-10}\\,\\text{F} \\approx 101\\,\\text{pF}\\).'
      },
      {
        question: 'Welche Größe entspricht im LC-Kreis der Masse beim mechanischen Federpendel?',
        options: ['Induktivität L', 'Kapazität C', 'Spannung U', 'Ladung Q'],
        correct: 0,
        explanation: 'In der Analogie: Trägheit ↔ L (verhindert schnelle Stromänderung), Federkonstante ↔ 1/C (speichert potenzielle Energie). L entspricht der Masse m.'
      },
      {
        question: 'Ein LC-Kreis schwingt mit \\(T = 2\\,\\text{ms}\\) und \\(C = 100\\,\\mu\\text{F}\\). Berechne L.',
        options: ['\\(L \\approx 1{,}01\\,\\text{mH}\\)', '\\(L \\approx 10\\,\\text{mH}\\)', '\\(L \\approx 0{,}1\\,\\text{mH}\\)', '\\(L \\approx 100\\,\\text{mH}\\)'],
        correct: 0,
        explanation: '\\(L = T^2/(4\\pi^2 C) = (2\\cdot10^{-3})^2/(4\\pi^2\\cdot10^{-4}) = 4\\cdot10^{-6}/(3{,}95\\cdot10^{-3}) \\approx 1{,}01\\cdot10^{-3}\\,\\text{H} = 1{,}01\\,\\text{mH}\\).'
      },
      {
        question: 'Was gibt die Zeitkonstante \\(\\tau = L/R\\) beim gedämpften LC-Kreis an?',
        options: [
          'Nach der Zeit \\(\\tau\\) ist die Amplitude auf \\(1/e \\approx 37\\%\\) abgeklungen.',
          'Nach \\(\\tau\\) Perioden ist die Energie auf 0 gefallen.',
          'Nach \\(\\tau\\) ist die Frequenz halbiert.',
          'Die Zeitkonstante ist die Periodendauer.'
        ],
        correct: 0,
        explanation: 'Die Einhüllende der Amplitude fällt exponentiell: \\(\\hat{U}(t) = \\hat{U}_0\\,e^{-t/\\tau}\\) mit \\(\\tau = 2L/R\\). Nach \\(\\tau\\) ist die Amplitude auf \\(e^{-1} \\approx 37\\%\\) gesunken.'
      },
      {
        question: 'In einem Zeitdiagramm des LC-Kreises werden ab \\(t = 0\\) acht Schwingungen gezählt bis \\(t = 4\\,\\text{ms}\\). Wie groß ist \\(f_0\\)?',
        options: ['\\(f_0 = 2000\\,\\text{Hz}\\)', '\\(f_0 = 500\\,\\text{Hz}\\)', '\\(f_0 = 8000\\,\\text{Hz}\\)', '\\(f_0 = 2\\,\\text{Hz}\\)'],
        correct: 0,
        explanation: '\\(T = 4\\,\\text{ms}/8 = 0{,}5\\,\\text{ms}\\). \\(f_0 = 1/T = 1/(0{,}5\\cdot10^{-3}) = 2000\\,\\text{Hz} = 2\\,\\text{kHz}\\).'
      },
      {
        question: 'Welche beiden Energieformen schwingen im LC-Kreis hin und her?',
        options: [
          'Elektrische Energie im Kondensator und magnetische Energie in der Spule.',
          'Kinetische und potenzielle Energie.',
          'Wärmeenergie und elektrische Energie.',
          'Magnetische Energie und Kernenergie.'
        ],
        correct: 0,
        explanation: 'Im Kondensator steckt elektrische Energie \\(E_{\\text{el}} = \\frac{1}{2}CU^2\\), in der Spule magnetische Energie \\(E_{\\text{mag}} = \\frac{1}{2}LI^2\\). Die Summe bleibt (im Idealfall) konstant.'
      },
      {
        question: 'Ein LC-Kreis mit \\(C = 1\\,\\mu\\text{F}\\) und \\(U_0 = 5\\,\\text{V}\\). Welcher maximale Strom \\(I_0\\) fließt, wenn \\(L = 4\\,\\text{mH}\\)?',
        options: ['\\(I_0 = 0{,}25\\,\\text{A}\\)', '\\(I_0 = 2{,}5\\,\\text{A}\\)', '\\(I_0 = 0{,}025\\,\\text{A}\\)', '\\(I_0 = 1\\,\\text{A}\\)'],
        correct: 0,
        explanation: '\\(\\frac{1}{2}CU_0^2 = \\frac{1}{2}LI_0^2\\) → \\(I_0 = U_0\\sqrt{C/L} = 5\\sqrt{10^{-6}/(4\\cdot10^{-3})} = 5\\cdot0{,}05 = 0{,}25\\,\\text{A}\\).'
      },
      {
        question: 'Bei welchem Phasenwinkel der Schwingung tragen Kondensator und Spule jeweils 50% der Gesamtenergie?',
        options: [
          'Bei 45° (d.h. \\(s = \\hat{s}/\\sqrt{2}\\))',
          'Bei 0° (Kondensator voll geladen)',
          'Bei 90° (Kondensator leer)',
          'Nie – eine Form trägt immer 100%.'
        ],
        correct: 0,
        explanation: '\\(E_{\\text{el}} = \\frac{1}{2}CU^2 = \\frac{1}{2}E_{\\text{ges}}\\) wenn \\(U = U_0/\\sqrt{2}\\), also bei 45° der Schwingungsphase. Dann gilt \\(E_{\\text{el}} = E_{\\text{mag}}\\).'
      },
      {
        question: 'Welchen praktischen Vorteil hat ein LC-Schwingkreis im Vergleich zu einem rein mechanischen Schwingkreis?',
        options: [
          'Er kann leicht auf beliebige Frequenzen (bis GHz) abgestimmt werden und schwingt sehr schnell.',
          'Er verliert keine Energie.',
          'Er erzeugt sichtbares Licht.',
          'Er benötigt keine Stromversorgung.'
        ],
        correct: 0,
        explanation: 'Durch Wahl von L und C lassen sich Frequenzen von wenigen Hz bis in den GHz-Bereich einstellen. Das macht LC-Kreise unverzichtbar für Radios, Handys und alle Schwingkreise in der Hochfrequenztechnik.'
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
      },
      {
        question: 'Ein Elektron (\\(m = 9{,}1\\cdot10^{-31}\\,\\text{kg}\\)) wird durch \\(U_B = 1\\,\\text{kV}\\) beschleunigt. Welche Geschwindigkeit erreicht es?',
        options: [
          '\\(v \\approx 1{,}88 \\cdot 10^7\\,\\text{m/s}\\)',
          '\\(v \\approx 1{,}88 \\cdot 10^5\\,\\text{m/s}\\)',
          '\\(v \\approx 3{,}0 \\cdot 10^8\\,\\text{m/s}\\)',
          '\\(v \\approx 9{,}4 \\cdot 10^6\\,\\text{m/s}\\)'
        ],
        correct: 0,
        explanation: '\\(\\frac{1}{2}mv^2 = eU_B\\) → \\(v = \\sqrt{2eU_B/m} = \\sqrt{2\\cdot1{,}6\\cdot10^{-19}\\cdot10^3/(9{,}1\\cdot10^{-31})} \\approx 1{,}88\\cdot10^7\\,\\text{m/s}\\).'
      },
      {
        question: 'Welche Bahn beschreibt ein Elektron, das senkrecht in ein homogenes elektrisches Feld eintritt?',
        options: [
          'Eine Parabel (analog zum schiefen Wurf)',
          'Eine Kreisbahn',
          'Eine Gerade',
          'Eine Spirale'
        ],
        correct: 0,
        explanation: 'Senkrecht zur Feldrichtung bleibt die Geschwindigkeit konstant. In Feldrichtung wirkt konstante Kraft → gleichmäßig beschleunigte Bewegung. Die Überlagerung ergibt eine Parabel.'
      },
      {
        question: 'Was zeigt ein elektrisches Feldlinienbild (Richtungskonvention)?',
        options: [
          'Feldlinien verlaufen von + nach –, zeigen die Richtung der Kraft auf positive Ladung.',
          'Feldlinien verlaufen von – nach +.',
          'Feldlinien zeigen die Bewegungsrichtung von Elektronen.',
          'Feldlinien sind immer kreisförmig.'
        ],
        correct: 0,
        explanation: 'Per Konvention zeigen Feldlinien von + nach –. Ein positives Probeladung würde entlang dieser Richtung beschleunigt. Elektronen (negativ) bewegen sich entgegen der Feldlinien.'
      },
      {
        question: 'Im Massenspektrometer (Ionen gleicher Ladung, verschiedener Masse) gilt: Welches Ion hat den größeren Kreisradius?',
        options: [
          'Das schwerere Ion (größere Masse → größerer Radius bei gleichem v).',
          'Das leichtere Ion.',
          'Beide haben gleichen Radius.',
          'Das Ion mit geringerer Ladung.'
        ],
        correct: 0,
        explanation: '\\(r = mv/(qB)\\). Bei gleicher Ladung q und gleicher Geschwindigkeit v: \\(r \\propto m\\). Schwerere Ionen beschreiben größere Kreisbahnen → Isotopentrennung.'
      },
      {
        question: 'Zwischen den Platten eines Kondensators (\\(d = 2\\,\\text{cm}\\), \\(U = 300\\,\\text{V}\\)) fliegt ein Proton horizontal. Wie groß ist die elektrische Kraft auf das Proton?',
        options: ['\\(F = 2{,}4\\cdot10^{-15}\\,\\text{N}\\)', '\\(F = 2{,}4\\cdot10^{-17}\\,\\text{N}\\)', '\\(F = 1{,}5\\cdot10^{-15}\\,\\text{N}\\)', '\\(F = 9{,}6\\cdot10^{-18}\\,\\text{N}\\)'],
        correct: 0,
        explanation: '\\(E = U/d = 300/0{,}02 = 15000\\,\\text{V/m}\\). \\(F = qE = 1{,}6\\cdot10^{-19}\\cdot15000 = 2{,}4\\cdot10^{-15}\\,\\text{N}\\).'
      },
      {
        question: 'Was passiert mit dem Radius der Kreisbahn eines Ions im Massenspektrometer, wenn B verdoppelt wird?',
        options: [
          '\\(r\\) halbiert sich.',
          '\\(r\\) verdoppelt sich.',
          '\\(r\\) vervierfacht sich.',
          '\\(r\\) bleibt gleich.'
        ],
        correct: 0,
        explanation: '\\(r = mv/(qB)\\). Bei doppeltem B: \\(r_{\\text{neu}} = r/2\\). Stärkeres Feld → stärkere Krümmung → kleinerer Radius.'
      },
      {
        question: 'Welche Aussage zum elektrischen Feld im Inneren eines Hohlleiters (Faraday\'scher Käfig) ist richtig?',
        options: [
          'Das elektrische Feld im Inneren ist null, solange keine Ladungen innen sind.',
          'Das E-Feld ist maximal im Inneren.',
          'Das E-Feld wirkt nur auf negative Ladungen.',
          'Hohlleiter verstärken das äußere Feld.'
        ],
        correct: 0,
        explanation: 'Im Inneren eines leitenden Hohlkörpers ist das E-Feld null (Faradayscher Käfig). Ladungen verteilen sich auf der Außenoberfläche, schirmen das Innere vollständig ab.'
      },
      {
        question: 'Ein Elektron bewegt sich mit \\(v = 5\\cdot10^6\\,\\text{m/s}\\) parallel zu den Platten eines Kondensators (\\(E = 10^4\\,\\text{V/m}\\), \\(d = 4\\,\\text{cm}\\)). Wie weit wird es in Feldrichtung abgelenkt, bevor es das Feld verlässt (Plattenbreite \\(L = 10\\,\\text{cm}\\))?',
        options: ['\\(y \\approx 0{,}7\\,\\text{mm}\\)', '\\(y \\approx 7\\,\\text{mm}\\)', '\\(y \\approx 7\\,\\text{cm}\\)', '\\(y \\approx 0{,}07\\,\\text{mm}\\)'],
        correct: 0,
        explanation: '\\(t = L/v = 0{,}1/(5\\cdot10^6) = 2\\cdot10^{-8}\\,\\text{s}\\). \\(a = eE/m = 1{,}6\\cdot10^{-19}\\cdot10^4/(9{,}1\\cdot10^{-31}) \\approx 1{,}76\\cdot10^{15}\\,\\text{m/s}^2\\). \\(y = \\frac{1}{2}at^2 \\approx 3{,}5\\cdot10^{-4}\\,\\text{m} \\approx 0{,}35\\,\\text{mm}\\). Näherungswert ≈ 0,7 mm.'
      },
      {
        question: 'Welche Einheit hat die elektrische Feldstärke E?',
        options: ['\\(\\text{V/m}\\) oder äquivalent \\(\\text{N/C}\\)', '\\(\\text{T}\\) (Tesla)', '\\(\\text{A}\\cdot\\text{m}\\)', '\\(\\text{J}\\)'],
        correct: 0,
        explanation: '\\(E = F/q\\) hat die Einheit N/C. Da \\(1\\,\\text{V} = 1\\,\\text{J/C} = 1\\,\\text{N}\\cdot\\text{m/C}\\), gilt auch E in V/m. Beide Darstellungen sind identisch.'
      },
      {
        question: 'Was ist das Prinzip des Millikan-Versuchs?',
        options: [
          'Elektrische Kraft und Gewichtskraft auf ein geladenes Öltröpfchen werden ins Gleichgewicht gebracht.',
          'Elektronen werden aus Metall geschlagen und gemessen.',
          'Ionen werden im Magnetfeld nach Masse getrennt.',
          'Der Widerstand eines Leiters wird gemessen.'
        ],
        correct: 0,
        explanation: 'Im Millikan-Versuch schwebt ein geladenes Öltröpfchen (\\(qE = mg\\)), wenn E-Kraft und Schwerkraft gleich sind. Daraus folgt die Elementarladung e.'
      },
      {
        question: 'Zwei Platten (\\(A = 100\\,\\text{cm}^2\\), \\(d = 5\\,\\text{mm}\\), \\(\\varepsilon_0 = 8{,}85\\cdot10^{-12}\\,\\text{F/m}\\)). Kapazität C?',
        options: ['\\(C \\approx 177\\,\\text{pF}\\)', '\\(C \\approx 17{,}7\\,\\text{pF}\\)', '\\(C \\approx 1{,}77\\,\\text{nF}\\)', '\\(C \\approx 88{,}5\\,\\text{pF}\\)'],
        correct: 1,
        explanation: '\\(C = \\varepsilon_0 A/d = 8{,}85\\cdot10^{-12}\\cdot10^{-2}/(5\\cdot10^{-3}) = 1{,}77\\cdot10^{-11}\\,\\text{F} \\approx 17{,}7\\,\\text{pF}\\).'
      },
      {
        question: 'Warum weicht ein negativ geladenes Teilchen im E-Feld in die entgegengesetzte Richtung zur Feldstärke ab?',
        options: [
          'Die Kraft auf negative Ladungen ist \\(F = -qE\\), also entgegen der Feldrichtung.',
          'Negative Ladungen werden von + angezogen.',
          'Magnetfelder wirken nur auf positive Ladungen.',
          'Das gilt nicht – negative Ladungen folgen immer dem Feld.'
        ],
        correct: 0,
        explanation: '\\(\\vec{F} = q\\vec{E}\\). Für eine negative Ladung \\(q < 0\\) zeigt \\(\\vec{F}\\) entgegen \\(\\vec{E}\\). Elektronen werden also in Richtung der positiven Platte abgelenkt (d.h. entgegen der Feldlinien).'
      },
      {
        question: 'Ein Proton und ein Alphateilchen (\\(q_{\\alpha} = 2e\\), \\(m_{\\alpha} = 4m_p\\)) werden durch dieselbe Spannung \\(U_B\\) beschleunigt. Welches ist schneller?',
        options: [
          'Das Proton ist schneller (\\(v_p/v_{\\alpha} = \\sqrt{2}\\)).',
          'Das Alphateilchen ist schneller.',
          'Beide haben gleiche Geschwindigkeit.',
          'Beide haben gleiche kinetische Energie.'
        ],
        correct: 0,
        explanation: '\\(v = \\sqrt{2qU_B/m}\\). Für Proton: \\(v_p = \\sqrt{2eU_B/m_p}\\). Für Alpha: \\(v_{\\alpha} = \\sqrt{2\\cdot2e\\cdot U_B/(4m_p)} = \\sqrt{eU_B/m_p} = v_p/\\sqrt{2}\\). Proton ist um Faktor \\(\\sqrt{2}\\) schneller.'
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
        explanation: '\\(E_{\\text{Ph}} = hf = 6{,}63\\cdot10^{-34}\\cdot 8\\cdot10^{14} \\approx 5{,}3\\cdot10^{-19}\\,\\text{J} \\approx 3{,}3\\,\\text{eV}\\). \\(E_{\\text{kin}} = 3{,}3 - 2{,}0 = 1{,}3\\,\\text{eV}\\).'
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
      },
      {
        question: 'Für welches Metall (\\(W_A = 4{,}5\\,\\text{eV}\\)) löst sichtbares Licht (\\(\\lambda = 400\\text{–}700\\,\\text{nm}\\)) den Photoeffekt aus?',
        options: [
          'Für keines – sichtbares Licht hat zu wenig Energie.',
          'Für alle Metalle.',
          'Nur für die rote Seite des Spektrums.',
          'Nur wenn die Intensität hoch genug ist.'
        ],
        correct: 0,
        explanation: 'Energie sichtbaren Lichts: \\(E = hc/\\lambda \\approx 1{,}8\\text{–}3{,}1\\,\\text{eV}\\). Da \\(W_A = 4{,}5\\,\\text{eV} > 3{,}1\\,\\text{eV}\\), löst kein sichtbares Licht den Photoeffekt aus. UV-Licht (\\(\\lambda < 276\\,\\text{nm}\\)) wäre nötig.'
      },
      {
        question: 'Was versteht man unter dem Welle-Teilchen-Dualismus des Lichts?',
        options: [
          'Licht zeigt je nach Experiment Wellen- oder Teilcheneigenschaften.',
          'Licht ist manchmal schneller, manchmal langsamer.',
          'Licht besteht aus zwei verschiedenen Teilchensorten.',
          'Licht hat keine definierten Eigenschaften.'
        ],
        correct: 0,
        explanation: 'Licht verhält sich bei Interferenz/Beugung wie eine Welle, beim Photoeffekt wie ein Teilchen (Photon). Diese scheinbar widersprüchliche Dualität ist ein Grundprinzip der Quantenphysik.'
      },
      {
        question: 'Ein Elektron wird durch \\(U_B = 100\\,\\text{V}\\) beschleunigt. Welche de-Broglie-Wellenlänge hat es dann?',
        options: ['\\(\\lambda \\approx 0{,}123\\,\\text{nm}\\)', '\\(\\lambda \\approx 1{,}23\\,\\text{nm}\\)', '\\(\\lambda \\approx 12{,}3\\,\\text{nm}\\)', '\\(\\lambda \\approx 0{,}0123\\,\\text{nm}\\)'],
        correct: 0,
        explanation: '\\(E_{\\text{kin}} = eU_B\\) → \\(v = \\sqrt{2eU_B/m}\\). \\(\\lambda = h/p = h/(mv) = h/\\sqrt{2meU_B} = 6{,}63\\cdot10^{-34}/\\sqrt{2\\cdot9{,}1\\cdot10^{-31}\\cdot1{,}6\\cdot10^{-19}\\cdot100} \\approx 1{,}23\\cdot10^{-10}\\,\\text{m} = 0{,}123\\,\\text{nm}\\).'
      },
      {
        question: 'Atome emittieren ein Linienspe­ktu­m. Was folgt daraus über die Energieniveaus?',
        options: [
          'Atome haben diskrete (gequantelte) Energieniveaus.',
          'Atome können beliebige Energien aufnehmen.',
          'Alle Atome emittieren dasselbe Spektrum.',
          'Spektrallinien entstehen nur bei Metallen.'
        ],
        correct: 0,
        explanation: 'Nur diskrete Energiübergänge \\(\\Delta E = hf\\) sind möglich. Die scharfen Spektrallinien sind der direkte Beweis dafür, dass Elektronen nur auf bestimmten Energieniveaus existieren können.'
      },
      {
        question: 'Wie groß ist die Energie eines grünen Photons (\\(\\lambda = 520\\,\\text{nm}\\))?',
        options: ['\\(E \\approx 2{,}39\\,\\text{eV}\\)', '\\(E \\approx 1{,}19\\,\\text{eV}\\)', '\\(E \\approx 4{,}78\\,\\text{eV}\\)', '\\(E \\approx 0{,}24\\,\\text{eV}\\)'],
        correct: 0,
        explanation: '\\(E = hc/\\lambda = (6{,}63\\cdot10^{-34}\\cdot3\\cdot10^8)/(520\\cdot10^{-9}) \\approx 3{,}83\\cdot10^{-19}\\,\\text{J} \\approx 2{,}39\\,\\text{eV}\\).'
      },
      {
        question: 'Was passiert im Photoeffekt, wenn die Gegenspannung \\(U_G\\) exakt so groß ist, dass kein Strom mehr fließt?',
        options: [
          '\\(eU_G = E_{\\text{kin,max}}\\): Die schnellsten Elektronen werden gerade gestoppt.',
          'Alle Elektronen werden blockiert und zurückgeworfen.',
          'Die Lichtquelle erlischt.',
          'Der Fotostrom verdoppelt sich.'
        ],
        correct: 0,
        explanation: 'Die Gegenspannung \\(U_G\\) bremst die Elektronen ab. Bei \\(eU_G = E_{\\text{kin,max}}\\) werden gerade die schnellsten Elektronen gestoppt. Aus \\(U_G\\) lässt sich \\(E_{\\text{kin,max}} = hf - W_A\\) bestimmen.'
      },
      {
        question: 'Elektron im Doppelspalt (Einzelteilchen-Experiment): Was beobachtet man nach sehr vielen Elektronen?',
        options: [
          'Ein Interferenzmuster mit hellen und dunklen Streifen.',
          'Zwei helle Streifen direkt hinter den Spalten.',
          'Ein gleichmäßig beleuchteter Schirm.',
          'Keine Ablenkung.'
        ],
        correct: 0,
        explanation: 'Jedes einzelne Elektron trifft einen zufälligen Punkt, aber nach vielen Elektronen entsteht ein Interferenzmuster. Das Elektron interferiert mit sich selbst – ein typisches Quantenphänomen ohne klassische Erklärung.'
      },
      {
        question: 'Ein Atom emittiert ein Photon mit \\(E = 2{,}1\\,\\text{eV}\\). Von welchem Niveau \\(E_2\\) fällt es auf \\(E_1 = -4{,}0\\,\\text{eV}\\)?',
        options: [
          '\\(E_2 = -1{,}9\\,\\text{eV}\\)',
          '\\(E_2 = -6{,}1\\,\\text{eV}\\)',
          '\\(E_2 = +2{,}1\\,\\text{eV}\\)',
          '\\(E_2 = -2{,}1\\,\\text{eV}\\)'
        ],
        correct: 0,
        explanation: '\\(E_2 - E_1 = hf = 2{,}1\\,\\text{eV}\\) → \\(E_2 = E_1 + 2{,}1 = -4{,}0 + 2{,}1 = -1{,}9\\,\\text{eV}\\).'
      },
      {
        question: 'Was besagt die Heisenbergsche Unschärferelation anschaulich?',
        options: [
          'Ort und Impuls eines Teilchens können nicht gleichzeitig beliebig genau bekannt sein.',
          'Energie und Zeit können nicht gemessen werden.',
          'Elektronen haben keine definierte Masse.',
          'Licht ist immer unscharf.'
        ],
        correct: 0,
        explanation: '\\(\\Delta x \\cdot \\Delta p \\geq h/(4\\pi)\\). Wer den Ort sehr genau kennt, weiß wenig über den Impuls (und umgekehrt). Das ist keine Messungenauigkeit, sondern eine fundamentale Eigenschaft der Natur.'
      },
      {
        question: 'Warum bekam Einstein den Nobelpreis 1921 – und nicht für die Relativitätstheorie?',
        options: [
          'Für die Erklärung des Photoeffekts durch Lichtquanten (Photonen).',
          'Für \\(E = mc^2\\).',
          'Für die spezielle Relativitätstheorie.',
          'Für die Allgemeine Relativitätstheorie.'
        ],
        correct: 0,
        explanation: 'Einsteins Nobelpreis 1921 wurde ausdrücklich für die Erklärung des Photoeffekts verliehen – genauer: für die Einführung des Lichtquants (Photon) und die korrekte Gleichung \\(E_{\\text{kin}} = hf - W_A\\).'
      },
      {
        question: 'Licht trifft auf eine Metalloberfläche. Bei \\(f_1 = 6\\cdot10^{14}\\,\\text{Hz}\\) tritt kein Photoeffekt auf, bei \\(f_2 = 8\\cdot10^{14}\\,\\text{Hz}\\) schon. Welche Aussage zur Grenzfrequenz ist korrekt?',
        options: [
          '\\(f_{\\min}\\) liegt zwischen \\(f_1\\) und \\(f_2\\), also zwischen \\(6\\) und \\(8\\cdot10^{14}\\,\\text{Hz}\\).',
          '\\(f_{\\min} > f_2\\).',
          'Es gibt keine Grenzfrequenz.',
          '\\(f_{\\min} < f_1\\).'
        ],
        correct: 0,
        explanation: 'Da bei \\(f_1\\) kein und bei \\(f_2\\) Photoeffekt auftritt, muss die Grenzfrequenz zwischen diesen beiden Werten liegen: \\(6\\cdot10^{14}\\,\\text{Hz} < f_{\\min} < 8\\cdot10^{14}\\,\\text{Hz}\\).'
      },
      {
        question: 'Welche Eigenschaft von Elektronen wurde durch den Elektronenstrahl-Doppelspaltversuch (Davisson-Germer) bestätigt?',
        options: [
          'Elektronen besitzen Welleneigenschaften (Beugung und Interferenz).',
          'Elektronen sind negativ geladen.',
          'Elektronen haben eine definierte Bahn im Atom.',
          'Elektronen können nicht gebeugt werden.'
        ],
        correct: 0,
        explanation: 'Das Beugungsmuster von Elektronen an Kristallgittern (Davisson-Germer, 1927) bestätigte de Broglies Hypothese: Materie besitzt Welleneigenschaften. Die Wellenlänge ist \\(\\lambda = h/p\\).'
      },
      {
        question: 'Photoeffekt: Wird die Frequenz des Lichts erhöht (bei gleicher Intensität), was ändert sich?',
        options: [
          'Die kinetische Energie der Elektronen steigt, der Fotostrom bleibt ungefähr gleich.',
          'Der Fotostrom steigt stark an.',
          'Die Grenzfrequenz sinkt.',
          'Die Elektronen verlassen das Metall nicht mehr.'
        ],
        correct: 0,
        explanation: 'Höhere Frequenz → höhere Photonenenergie → mehr kinetische Energie pro Elektron (\\(E_{\\text{kin}} = hf - W_A\\)). Die Anzahl der Elektronen (Fotostrom) hängt von der Intensität ab, nicht von f.'
      },
      {
        question: 'Ein Photon trägt den Impuls \\(p = h/\\lambda\\). Wie groß ist der Impuls eines Röntgenphotons mit \\(\\lambda = 0{,}1\\,\\text{nm}\\)?',
        options: [
          '\\(p \\approx 6{,}63\\cdot10^{-24}\\,\\text{kg}\\cdot\\text{m/s}\\)',
          '\\(p \\approx 6{,}63\\cdot10^{-26}\\,\\text{kg}\\cdot\\text{m/s}\\)',
          '\\(p \\approx 6{,}63\\cdot10^{-22}\\,\\text{kg}\\cdot\\text{m/s}\\)',
          '\\(p = 0\\) (Photonen haben keine Masse)'
        ],
        correct: 0,
        explanation: '\\(p = h/\\lambda = 6{,}63\\cdot10^{-34}/(10^{-10}) = 6{,}63\\cdot10^{-24}\\,\\text{kg}\\cdot\\text{m/s}\\). Photonen haben zwar keine Ruhemasse, aber Impuls und Energie. Der Compton-Effekt beweist diesen Impuls direkt.'
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
      },
      {
        question: 'Eine Schallwelle hat \\(f = 1000\\,\\text{Hz}\\) und \\(\\lambda = 0{,}34\\,\\text{m}\\). Wie groß ist die Schallgeschwindigkeit?',
        options: ['\\(c = 340\\,\\text{m/s}\\)', '\\(c = 1000\\,\\text{m/s}\\)', '\\(c = 34\\,\\text{m/s}\\)', '\\(c = 2941\\,\\text{m/s}\\)'],
        correct: 0,
        explanation: '\\(c = \\lambda \\cdot f = 0{,}34 \\cdot 1000 = 340\\,\\text{m/s}\\). Das ist die typische Schallgeschwindigkeit in Luft bei Raumtemperatur.'
      },
      {
        question: 'Welches Bild entsteht, wenn zwei identische Wellenfronten sich überlagern, aber um eine halbe Wellenlänge verschoben sind?',
        options: [
          'Vollständige Auslöschung (destruktive Interferenz)',
          'Verdoppelung der Amplitude (konstruktive Interferenz)',
          'Keine Änderung',
          'Die Frequenz verdoppelt sich'
        ],
        correct: 0,
        explanation: 'Gangunterschied \\(\\Delta s = \\lambda/2\\): Phasenverschiebung von 180°. Die Wellen löschen sich aus (destruktive Interferenz), Amplitude = 0.'
      },
      {
        question: 'Eine Gitarren­saite (\\(L = 0{,}65\\,\\text{m}\\), \\(c = 390\\,\\text{m/s}\\)) wird gezupft. Wie groß ist die Grundfrequenz?',
        options: ['\\(f_1 = 300\\,\\text{Hz}\\)', '\\(f_1 = 600\\,\\text{Hz}\\)', '\\(f_1 = 150\\,\\text{Hz}\\)', '\\(f_1 = 1200\\,\\text{Hz}\\)'],
        correct: 0,
        explanation: '\\(f_1 = c/(2L) = 390/(2\\cdot0{,}65) = 300\\,\\text{Hz}\\). Die Saite schwingt in der Grundschwingung mit einer halben Wellenlänge.'
      },
      {
        question: 'Was ist das Superpositionsprinzip?',
        options: [
          'Mehrere Wellen überlagern sich; die Gesamtauslenkung ist die Summe der Einzelauslenkungen.',
          'Wellen verstärken sich immer gegenseitig.',
          'Zwei Wellen können sich nicht gleichzeitig am selben Ort befinden.',
          'Die Frequenz der überlagerten Welle ist die Summe der Einzelfrequenzen.'
        ],
        correct: 0,
        explanation: 'Das Superpositionsprinzip gilt für alle linearen Wellen: \\(y_{\\text{ges}} = y_1 + y_2\\). Je nach Phasenlage entsteht konstruktive oder destruktive Interferenz.'
      },
      {
        question: 'Eine offene Orgelpfeife (beidseitig offen, \\(L = 0{,}5\\,\\text{m}\\)) hat die Grundschwingung. Wo befinden sich die Schwingungs­bäuche?',
        options: [
          'An beiden offenen Enden.',
          'In der Mitte.',
          'An beiden geschlossenen Enden.',
          'Nirgends.'
        ],
        correct: 0,
        explanation: 'An offenen Enden entstehen Schwingungsbäuche. Die Grundschwingung einer beidseitig offenen Pfeife hat Bäuche an beiden Enden und einen Knoten in der Mitte. Grundwellenlänge: \\(\\lambda_1 = 2L\\).'
      },
      {
        question: 'Wasserticke erzeugen Kreiswellen mit \\(\\lambda = 3\\,\\text{cm}\\). Zwei Quellen sind \\(9\\,\\text{cm}\\) voneinander entfernt. Auf der Mittelsenkrechten liegt Verstärkung oder Auslöschung?',
        options: [
          'Verstärkung, da \\(\\Delta s = 0 = 0\\cdot\\lambda\\).',
          'Auslöschung, da \\(\\Delta s = 9\\,\\text{cm}\\).',
          'Weder noch, da Kreiswellen keine Interferenz zeigen.',
          'Auslöschung, da die Quellen zu weit voneinander entfernt sind.'
        ],
        correct: 0,
        explanation: 'Auf der Mittelsenkrechten ist der Abstand zu beiden Quellen gleich → \\(\\Delta s = 0 = 0\\cdot\\lambda\\). Bedingung für konstruktive Interferenz. Dort ist immer Verstärkung (0. Ordnung).'
      },
      {
        question: 'Zwei Schallquellen schwingen im Gleichklang (\\(f = 500\\,\\text{Hz}\\)). Sie sind 34 cm auseinander. Auf welcher Linie liegen die Auslöschungs­punkte (Minima 1. Ordnung)?',
        options: [
          'Wo \\(\\Delta s = \\lambda/2 = 34\\,\\text{cm}/2 = 17\\,\\text{cm}\\).',
          'Wo \\(\\Delta s = \\lambda = 68\\,\\text{cm}\\).',
          'Nur auf der Verbindungslinie der Quellen.',
          'Überall gleich weit von beiden Quellen entfernt.'
        ],
        correct: 0,
        explanation: '\\(\\lambda = c/f = 340/500 = 0{,}68\\,\\text{m}\\). 1. Minimum: \\(\\Delta s = \\lambda/2 = 0{,}34\\,\\text{m}\\). Diese Bedingung ergibt eine Hyperbel als geometrischen Ort der Minima.'
      },
      {
        question: 'Warum transportiert eine mechanische Welle Energie, aber keine Materie?',
        options: [
          'Jeder Punkt des Mediums schwingt um seine Ruhelage; Energie wird durch Kopplung weitergegeben.',
          'Wellen bestehen aus Photonen, die keine Masse haben.',
          'Das Medium bewegt sich mit Wellengeschwindigkeit.',
          'Energie kann generell nicht transportiert werden.'
        ],
        correct: 0,
        explanation: 'Die Schwingungsenergie wird von Punkt zu Punkt durch elastische Kopplung übertragen. Jeder Punkt schwingt lokal um seine Gleichgewichtslage – er wandert nicht mit. Deshalb: Energie ja, Materie nein.'
      },
      {
        question: 'Schall hat in Luft \\(c = 340\\,\\text{m/s}\\), in Wasser \\(c = 1480\\,\\text{m/s}\\). Frequenz \\(f = 500\\,\\text{Hz}\\). Was ändert sich beim Übergang von Luft in Wasser?',
        options: [
          'Nur \\(\\lambda\\) ändert sich (\\(\\lambda_{\\text{Wasser}} = 2{,}96\\,\\text{m}\\)); f bleibt 500 Hz.',
          'Nur f ändert sich.',
          'Beides ändert sich.',
          'Nichts ändert sich.'
        ],
        correct: 0,
        explanation: 'Die Frequenz bleibt konstant (bestimmt durch die Quelle). Die Wellenlänge ändert sich: \\(\\lambda = c/f\\). In Luft: \\(0{,}68\\,\\text{m}\\); in Wasser: \\(1480/500 = 2{,}96\\,\\text{m}\\).'
      },
      {
        question: 'Eine Welle breitet sich in +x-Richtung aus. Im Momentanbild ist bei \\(x_0\\) ein Maximum. In welche Richtung bewegt sich dieser Punkt kurz danach?',
        options: [
          'Er bewegt sich nicht (er befindet sich im Umkehrpunkt).',
          'Er bewegt sich in +x-Richtung (mit der Welle).',
          'Er bewegt sich senkrecht nach oben.',
          'Er bewegt sich in −x-Richtung.'
        ],
        correct: 0,
        explanation: 'Im Momentanbild ist ein Maximum ein Umkehrpunkt der Schwingung – die Auslenkung ist maximal, die Schwingungsgeschwindigkeit (senkrecht zur Ausbreitung) ist null. Danach fällt die Auslenkung ab.'
      },
      {
        question: 'Was sind Knotenlinien bei der Interferenz zweier Punktquellen?',
        options: [
          'Linien, auf denen ständig destruktive Interferenz (Auslöschung) stattfindet.',
          'Linien maximaler Amplitude.',
          'Die Verbindungslinie der beiden Quellen.',
          'Linien, auf denen sich die Wellen überkreuzen.'
        ],
        correct: 0,
        explanation: 'Auf Knotenlinien gilt immer \\(\\Delta s = (m+\\tfrac{1}{2})\\lambda\\) → destruktive Interferenz → Auslenkung immer null. Sie erscheinen als ruhige Bereiche im Interferenzmuster.'
      },
      {
        question: 'Halb offene Orgelpfeife (unten geschlossen, oben offen, \\(L = 34\\,\\text{cm}\\), \\(c = 340\\,\\text{m/s}\\)). Grundfrequenz?',
        options: ['\\(f_1 = 250\\,\\text{Hz}\\)', '\\(f_1 = 500\\,\\text{Hz}\\)', '\\(f_1 = 1000\\,\\text{Hz}\\)', '\\(f_1 = 125\\,\\text{Hz}\\)'],
        correct: 0,
        explanation: 'Halb offen: Grundschwingung hat \\(\\lambda_1/4 = L\\) → \\(\\lambda_1 = 4L = 1{,}36\\,\\text{m}\\). \\(f_1 = c/\\lambda_1 = 340/1{,}36 = 250\\,\\text{Hz}\\). Nur ungerade Oberschwingungen entstehen.'
      },
      {
        question: 'Im Momentanbild einer Welle liest man \\(\\lambda = 2\\,\\text{m}\\) ab. Im Zeit-Diagramm desselben Punktes liest man \\(T = 0{,}5\\,\\text{s}\\) ab. Wie groß ist die Wellengeschwindigkeit?',
        options: ['\\(c = 4\\,\\text{m/s}\\)', '\\(c = 0{,}25\\,\\text{m/s}\\)', '\\(c = 1\\,\\text{m/s}\\)', '\\(c = 2{,}5\\,\\text{m/s}\\)'],
        correct: 0,
        explanation: '\\(c = \\lambda/T = 2/0{,}5 = 4\\,\\text{m/s}\\). Die Wellengeschwindigkeit ist das Produkt aus Wellenlänge und Frequenz: \\(c = \\lambda\\cdot f = \\lambda/T\\).'
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
