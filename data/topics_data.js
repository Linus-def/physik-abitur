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
        text: `<p>Eine <strong>harmonische Schwingung</strong> liegt vor, wenn die rücktreibende Kraft proportional zur Auslenkung ist und ihr entgegenwirkt. Das <strong>Minuszeichen</strong> drückt aus: Die Kraft wirkt <em>stets entgegengesetzt</em> zur Auslenkung. Aus Newtons 2. Gesetz (F=ma) folgt direkt: \\(m\\ddot{s} = -D \\cdot s\\) bzw. \\(\\ddot{s} + \\omega_0^2 s = 0\\) mit \\(\\omega_0 = \\sqrt{D/m}\\). Die Lösung dieser DGL ist eine Sinusfunktion – deshalb heisst es harmonisch und warum Schwingungen mit sin/cos beschrieben werden.</p>
<p>\\(F_{\\text{rück}} = -D \\cdot s\\) &nbsp; (bei Federpendel, Fadenpendel im kleinen Winkel)</p>
<p>Typische Beispiele: Federpendel, Fadenpendel (kleine Winkel ≲ 5°), schwimmende Boje, LC-Schwingkreis. Fürs Abi ist wichtig, dass du die gemeinsame Struktur hinter diesen Beispielen erkennst und nicht nur einzelne Sonderfälle auswendig lernst.</p>`,
        formulas: [
          { label: 'Differentialgleichung', latex: '\\ddot{s} + \\omega_0^2 \\cdot s = 0', note: 'Kennzeichen harm. Schwingung' },
          { label: 'Kreisfrequenz', latex: '\\omega_0 = 2\\pi f = \\frac{2\\pi}{T}' },
          { label: 'Periodendauer Feder', latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', note: 'k = Federkonstante [N/m]' },
          { label: 'Periodendauer Faden', latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}', note: 'L = Länge, g = 9{,}81 m/s²' },
        ],
        note: 'Bei der harmonischen Schwingung ist T unabhängig von der Amplitude (Isochronie)!',
        deeper: `<p><strong>Nachweis harmonische Schwingung:</strong> Im F-s-Diagramm liegt ein linearer Zusammenhang durch den Ursprung vor. Im a-s-Diagramm: Gerade mit negativer Steigung (da \\(a = -\\omega^2 s\\)). <strong>Warum ist das Nachweis für Harmonizität?</strong> Das lineare F-s-Diagramm zeigt, dass die Rückkraft proportional zur Auslenkung ist. Das a-s-Diagramm mit negativer Steigung bestätigt \\(a = -\\omega^2 s\\), was die DGL der harmonischen Schwingung erfüllt. <strong>Isochronie erklärt:</strong> Warum ist T unabhängig von der Amplitude? Weil mit größerer Amplitude auch größere Rückkraft und damit größere Geschwindigkeit auftreten – größerer Weg und höhere Geschwindigkeit heben sich exakt auf.</p>
<p><strong>Wichtige Grenze:</strong> Das Fadenpendel ist nur für Auslenkungswinkel ≲ 5° harmonisch. Bei größeren Winkeln wächst T mit der Amplitude an.</p>`
      },
      {
        title: 'Beschreibung der Bewegung',
        text: `<p>Die Auslenkung, Geschwindigkeit und Beschleunigung sind Sinusfunktionen der Zeit – das folgt direkt aus der Lösung der DGL \\(\\ddot{s} + \\omega_0^2 s = 0\\). <strong>Auslenkung:</strong> \\(s(t) = \\hat{s}\\sin(\\omega_0 t + \\varphi_0)\\). <strong>Geschwindigkeit:</strong> \\(v(t) = \\hat{s}\\omega_0\\cos(\\omega_0 t + \\varphi_0)\\). <strong>Beschleunigung:</strong> \\(a(t) = -\\hat{s}\\omega_0^2\\sin(\\omega_0 t + \\varphi_0)\\). Wichtig: Die Ableitung von s(t) ergibt v(t) (Kettenregel!), die Ableitung von v(t) ergibt a(t). Die Beschleunigung ist stets \\(a = -\\omega_0^2 s\\) – das ist genau die Definitionseigenschaft der harmonischen Schwingung.</p>`,
        formulas: [
          { label: 'Auslenkung', latex: 's(t) = \\hat{s}\\cdot\\sin(\\omega_0 t + \\varphi_0)' },
          { label: 'Geschwindigkeit', latex: 'v(t) = \\hat{s}\\cdot\\omega_0\\cdot\\cos(\\omega_0 t + \\varphi_0)' },
          { label: 'Beschleunigung', latex: 'a(t) = -\\hat{s}\\cdot\\omega_0^2\\cdot\\sin(\\omega_0 t + \\varphi_0)' },
          { label: 'Max. Geschwindigkeit', latex: 'v_{\\max} = \\hat{s}\\cdot\\omega_0 = \\hat{s}\\cdot 2\\pi f' },
        ],
        deeper: `<p><strong>Phasenlage:</strong> Auslenkung und Beschleunigung sind stets <em>gegenphasig</em> (180° Phasenverschiebung). Die Geschwindigkeit eilt der Auslenkung um 90° vor.</p> <p><strong>Warum sind Auslenkung und Beschleunigung genau 180° phasenverschoben?</strong> Weil \\(a = -\\omega^2 s\\): Ist s maximal positiv, so ist a maximal negativ – das ist genau die rücktreibende Kraft am Umkehrpunkt. Das Minuszeichen erzwingt die Gegenphasigkeit. <strong>Warum eilt v der Auslenkung 90° vor?</strong> \\(v(t) = \\dot{s}(t) = \\hat{s}\\omega_0\\cos(\\omega_0 t)\\): Kosinus und Sinus sind 90° verschoben. In der Gleichgewichtslage (s = 0, sin = 0) ist der Kosinus = 1 – also v maximal.</p>
<p><strong>Merksatz:</strong> In der Gleichgewichtslage (s = 0): v maximal, a = 0. An den Umkehrpunkten (s = ±ŝ): v = 0, a maximal.</p>`
      },
      {
        title: 'Energie bei harmonischen Schwingungen',
        text: `<p>Die Gesamtenergie bleibt bei ungedämpfter Schwingung konstant und pendelt zwischen kinetischer und potentieller Energie – das ist <strong>Energieerhaltung</strong> in Aktion. <strong>Warum?</strong> Die Gesamtenergie \\(E_{\\text{ges}} = \\frac{1}{2}k\\hat{s}^2\\) ist konstant. An den <em>Umkehrpunkten</em> (s = ±ś): Alles ist Federenergie (\\(E_{\\text{pot}} = \\frac{1}{2}ks^2\\)), die kinetische Energie ist null (v = 0). In der <em>Gleichgewichtslage</em> (s = 0): Die Federenergie ist null, alles ist kinetische Energie (\\(E_{\\text{kin}} = \\frac{1}{2}mv^2\\)), v ist maximal. <strong>Merke:</strong> \\(E_{\\text{kin}} + E_{\\text{pot}} = \\text{const}\\) gilt immer bei ungedämpfter Schwingung.</p>`,
        formulas: [
          { label: 'Kinetische Energie', latex: 'E_{\\text{kin}} = \\frac{1}{2}m v^2' },
          { label: 'Pot. Energie (Feder)', latex: 'E_{\\text{pot}} = \\frac{1}{2}k s^2' },
          { label: 'Gesamtenergie', latex: 'E_{\\text{ges}} = \\frac{1}{2}k\\hat{s}^2 = \\frac{1}{2}m v_{\\max}^2', note: 'konstant!' },
        ],
        note: 'Im Gleichgewicht: Ekin maximal, Epot = 0. An Umkehrpunkten: Ekin = 0, Epot maximal.',
        deeper: `<p><strong>Gedämpfte Schwingung:</strong> Amplitude klingt exponentiell ab (\\(\\hat{s}(t) = \\hat{s}_0 e^{-\\delta t}\\)), Energie nimmt quadratisch dazu ab (\\(E \\propto \\hat{s}^2\\)). <strong>Warum nimmt die Energie quadratisch ab, wenn die Amplitude nur linear ablängt?</strong> Weil \\(E_{\\text{ges}} = \\frac{1}{2}k\\hat{s}^2\\). Wenn \\(\\hat{s}\\) auf 50% sinkt, geht E auf 25%. <strong>Frequenz bleibt bei schwacher Dämpfung nahezu konstant.</p>
<p><strong>Energiediagramm:</strong> \\(E_{\\text{kin}}\\) und \\(E_{\\text{pot}}\\) schwingen gegeneinander. Ihr zeitlicher Mittelwert beträgt jeweils \\(E_{\\text{ges}}/2\\).</p>`
      },
      {
        title: 'Erzwungene Schwingungen & Resonanz',
        text: `<p>Wird ein Schwinger von außen mit der Erregerfrequenz \\(f_E\\) angetrieben, spricht man von einer <strong>erzwungenen Schwingung</strong>. <strong>Was passiert dabei?</strong> Das System nimmt die Erregerfrequenz an (nicht die Eigenfrequenz!) und die Amplitude hängt davon ab, wie nah \\(f_E\\) an \\(f_0\\) liegt. <strong>Resonanz</strong> (\\(f_E = f_0\\)) ist der Extremfall: Die Amplitude wird maximal, weil das System optimal mit dem Erreger zusammenarbeitet. Mit mehr Dämpfung bleibt die Resonanzamplitude kleiner und das Resonanzmaximum verbreitert sich. Ohne jede Dämpfung würde die Amplitude bei Resonanz theoretisch unbegrenzt anwachsen.</p></p>
<p>Bei <strong>Resonanz</strong> gilt \\(f_E = f_0\\): Die Amplitude wird maximal.</p>`,
        formulas: [
          { label: 'Resonanzbedingung', latex: 'f_E = f_0', note: 'Erreger = Eigenfrequenz' },
        ],
        note: 'Resonanz kann gefährlich sein (Brücken, Gebäude, Bojen). Starke Dämpfung senkt die Resonanzamplitude.',
        deeper: `<p>Im Resonanzfall ist die Phasenverschiebung zwischen Erreger und Schwinger genau 90°. Das System nimmt dann maximal Energie auf. <strong>Warum gerade 90° Phasenverschiebung bei Resonanz?</strong> Die Energieübertragung vom Erreger auf den Schwinger ist maximal, wenn Erreger und Schwingungsgeschwindigkeit phasengleich sind – das tritt auf, wenn Auslenkung und Erreger 90° verschoben sind. <strong>Resonanz in der Praxis:</strong> Schaukeln (bei jeder Periode passend anschubsen), Radioempfang (LC-Kreis auf Senderfrequenz einstellen), MRT-Geräte (Kernspinresonanz). <strong>Gefahr:</strong> Tacoma-Narrows-Brücke (1940) kollabierte durch Windresonanz. Bei Gebäuden und Brücken müssen Dämpfer eingebaut werden.</p>
<p><strong>Historisches Beispiel:</strong> Die Tacoma-Narrows-Brücke (1940) kollabierte durch Resonanz mit Windwirbeln – ein klassisches Resonanz-Desaster.</p>`
      },
      {
        title: 'Mechanische und elektromagnetische Schwingungen vergleichen',
        text: `<p>Im Leistungsfach geht es nicht nur um das Federpendel, sondern um die <strong>gemeinsame Struktur von Oszillatoren</strong>. Beim mechanischen Schwinger pendelt die Energie zwischen Bewegungsenergie und Lage- oder Federenergie. Beim LC-Kreis pendelt sie zwischen elektrischem Feld des Kondensators und magnetischem Feld der Spule.</p>
<p>Diese Analogie ist abi-relevant, weil dadurch klar wird: Schwingungen sind kein Einzelsachverhalt, sondern ein allgemeines Modell. Wer das versteht, kommt später auch bei Wellen und Elektrodynamik leichter mit.</p>`,
        formulas: [
          { label: 'Schwingungsdauer LC-Kreis', latex: 'T = 2\\pi\\sqrt{LC}' },
          { label: 'Elektrische Energie', latex: 'E_{\\text{el}} = \\frac{1}{2} C U^2' },
          { label: 'Magnetische Energie', latex: 'E_{\\text{mag}} = \\frac{1}{2} L I^2' },
        ],
        deeper: `<p><strong>Transfergedanke:</strong> In beiden Fällen gibt es eine rückstellende Wirkung, eine träge Größe und einen periodischen Energieaustausch. Genau diese Gemeinsamkeit ist fachlich wichtiger als der Unterschied zwischen Feder, Pendel und Stromkreis.</p>
<p><strong>Prüfungsnutzen:</strong> Wenn du mechanische und elektromagnetische Schwingungen sauber vergleichen kannst, bist du in Erklär- und Transferaufgaben deutlich sicherer als mit reinen Formelantworten.</p>`
      }
    ],
    quickcheck: [
      {
        question: 'Ein Federpendel hat \\(m = 400\\,\\text{g}\\) und \\(k = 10\\,\\text{N/m}\\). Wie groß ist die Periodendauer?',
        options: ['\\(T \\approx 1{,}26\\,\\text{s}\\)', '\\(T \\approx 0{,}63\\,\\text{s}\\)', '\\(T \\approx 2{,}51\\,\\text{s}\\)', '\\(T \\approx 0{,}20\\,\\text{s}\\)'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0{,}4/10} \\approx 1{,}26\\,\\text{s}\\)',
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
        explanation: 'Definitionsmerkmal: \\(F_{\\text{rück}} = -D \\cdot s\\). Daraus folgt die DGL \\(\\ddot{s} + \\omega^2 s = 0\\).',
                detailedExplanation: 'Die Definition der harmonischen Schwingung ist die rücktreibende Kraft proportional zur Auslenkung: F_rück = -D·s. Daraus folgt die Differentialgleichung. Die Amplitude nimmt nur bei gedämpften Schwingungen ab - das ist kein definierendes Merkmal. Die Periodendauer ist gerade UNABHÄNGIG von der Amplitude (Isochronie)!',
        links: [
          { title: 'Simple Club – Harmonische Schwingung Erklärung', url: 'https://www.youtube.com/results?search_query=simple+club+harmonische+schwingung' },
          { title: 'Leifiphysik: Definition harmonische Schwingung', url: 'https://www.leifiphysik.de/mechanik/mechanische-schwingungen/grundwissen/harmonische-schwingung' },
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
        explanation: 'In der Gleichgewichtslage: \\(s = 0\\) → \\(E_{\\text{pot}} = 0\\). Die gesamte Energie ist kinetisch.',       detailedExplanation: 'Energie-Argumentation: Gesamtenergie = E_kin + E_pot. In der Gleichgewichtslage (s=0) ist E_pot = 0 (keine Federausdehnung, keine Fadenpendel-Höhe). Also muss E_kin = E_ges = maximal sein. An den Umkehrpunkten ist es genau umgekehrt: v=0, also E_kin=0, E_pot=E_ges.'
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
        explanation: 'Resonanz tritt auf, wenn \\(f_E = f_0\\). Dann wird die Amplitude maximal.',       detailedExplanation: 'Resonanz ist der kritischste Spezialfall erzwungener Schwingungen. Bei f_E = f_0 gibt das System bei jeder Schwingung maximal Energie an den Erreger ab und nimmt maximal Energie auf. Ohne Dämpfung würde die Amplitude theoretisch unendlich wachsen. Mit Dämpfung begrenzt der Energieverlust die Amplitude. Merke: Phasenverschiebung bei Resonanz = 90\u00b0.',       detailedExplanation: 'Resonanz ist der kritischste Spezialfall erzwungener Schwingungen. Bei f_E = f_0 gibt das System bei jeder Schwingung maximal Energie an den Erreger ab und nimmt maximal Energie auf. Ohne Dämpfung würde die Amplitude theoretisch unendlich wachsen. Mit Dämpfung begrenzt der Energieverlust die Amplitude. Merke: Phasenverschiebung bei Resonanz = 90\u00b0.'
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
      },
      {
        question: 'Bei einer harmonischen Schwingung gilt \\(f = 5\\,\\text{Hz}\\). Wie groß ist die Periodendauer?',
        options: ['\\(T = 0{,}20\\,\\text{s}\\)', '\\(T = 5\\,\\text{s}\\)', '\\(T = 2{,}5\\,\\text{s}\\)', '\\(T = 31{,}4\\,\\text{s}\\)'],
        correct: 0,
        explanation: '\\(T = 1/f = 1/5\\,\\text{s} = 0{,}20\\,\\text{s}\\). Frequenz und Periodendauer sind Kehrwerte.'
      },
      {
        question: 'Ein Federpendel hat \\(\\hat{s} = 6\\,\\text{cm}\\) und \\(\\omega = 4\\,\\text{rad/s}\\). Wie groß ist die Maximalgeschwindigkeit?',
        options: ['\\(v_{\\max} = 0{,}24\\,\\text{m/s}\\)', '\\(v_{\\max} = 0{,}67\\,\\text{m/s}\\)', '\\(v_{\\max} = 24\\,\\text{m/s}\\)', '\\(v_{\\max} = 1{,}5\\,\\text{m/s}\\)'],
        correct: 0,
        explanation: '\\(v_{\\max} = \\hat{s}\\cdot\\omega = 0{,}06\\cdot4 = 0{,}24\\,\\text{m/s}\\).'
      },
      {
        question: 'Was passiert bei stärkerer Dämpfung mit der Resonanzkurve eines erzwungenen Schwingers?',
        options: [
          'Das Maximum wird niedriger und breiter.',
          'Das Maximum wird höher und schmaler.',
          'Die Resonanz verschwindet vollständig.',
          'Nur die Eigenfrequenz verdoppelt sich.'
        ],
        correct: 0,
        explanation: 'Stärkere Dämpfung reduziert die maximale Resonanzamplitude und verbreitert die Resonanzkurve. Das System reagiert also weniger stark auf die Anregung.'
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
        text: `<p>Auf eine <strong>bewegte Ladung</strong> oder einen <strong>stromdurchflossenen Leiter</strong> in einem Magnetfeld wirkt die <strong>Lorentzkraft</strong>. Sie ist immer dann besonders wichtig, wenn Teilchenbahnen abgelenkt oder Leiter mechanisch bewegt werden. Für das Abi musst du nicht nur die Formel kennen, sondern auch die <strong>Richtung sicher bestimmen</strong> und erklären können, warum die Kraft nur dann wirkt, wenn Bewegungsrichtung und Feld nicht parallel sind.</p>
<p>Die Richtung bestimmt man mit der <strong>Drei-Finger-Regel</strong> für positive Ladungen beziehungsweise technische Stromrichtung: Daumen = Strom- oder Bewegungsrichtung, Zeigefinger = Magnetfeldrichtung, Mittelfinger = Kraftrichtung. Für Elektronen als negative Ladungen ist die Kraftrichtung umgekehrt.</p>`,
        formulas: [
          { label: 'Lorentzkraft (Ladung)', latex: 'F_L = q \\cdot v \\cdot B \\cdot \\sin\\alpha', note: 'α = Winkel v zu B' },
          { label: 'Kraft auf Leiter', latex: 'F = B \\cdot I \\cdot \\ell \\cdot \\sin\\alpha', note: 'ℓ = Leiterlänge im Feld' },
          { label: 'Kreisbahn (Lorentz)', latex: 'r = \\frac{m \\cdot v}{q \\cdot B}', note: 'Lorentzkraft = Zentripetalkraft' },
          { label: 'Umlaufdauer im B-Feld', latex: 'T = \\frac{2\\pi m}{qB}', note: 'unabhängig von v' },
        ],
        deeper: `<p><strong>Abi-Kernidee:</strong> Die Lorentzkraft steht immer senkrecht auf \\(\\vec{v}\\) und \\(\\vec{B}\\). Deshalb ändert sie die <strong>Richtung</strong> der Bewegung, aber nicht den Betrag der Geschwindigkeit. Genau darum bewegt sich ein Teilchen im homogenen Magnetfeld auf einer Kreisbahn oder Schraubenbahn, ohne im Magnetfeld selbst Energie zu gewinnen.</p>
<p><strong>Typische Prüfungsfrage:</strong> Erkläre, warum ein Elektron trotz Kraft keine Arbeit aufnimmt. Antwort: \\(W = \\vec{F} \\cdot \\vec{s}\\); da \\(\\vec{F}_L \\perp \\vec{v}\\), ist das Skalarprodukt null. Das ist die Verbindung zwischen Magnetfeld und Mechanik.</p>`
      },
      {
        title: 'Elektromagnetische Induktion',
        text: `<p>Eine Spannung entsteht immer dann, wenn sich der <strong>magnetische Fluss</strong> \\(\\Phi\\) durch eine Leiterschleife ändert. Das ist der eigentliche Kern der Induktion. Im Abi musst du unterscheiden können, <strong>wodurch</strong> sich der Fluss ändert: durch Änderung der Feldstärke \\(B\\), der wirksamen Fläche \\(A\\) oder des Winkels zwischen Feld und Fläche.</p>
<p>Das <strong>Faraday'sche Induktionsgesetz</strong> beschreibt die Größe der induzierten Spannung, die <strong>Lenz'sche Regel</strong> ihre Richtung. Das Minuszeichen bedeutet nicht „negative Spannung", sondern: Das induzierte System reagiert immer so, dass es der Flussänderung entgegenwirkt. Das ist letztlich eine Folge der Energieerhaltung.</p>`,
        formulas: [
          { label: 'Magnetischer Fluss', latex: '\\Phi = B \\cdot A \\cdot \\cos\\alpha' },
          { label: 'Induktionsgesetz', latex: 'U_{\\text{ind}} = -n \\cdot \\frac{\\Delta\\Phi}{\\Delta t}', note: 'n = Windungszahl' },
          { label: 'Geradlinig (Stab)', latex: 'U_{\\text{ind}} = B \\cdot \\ell \\cdot v', note: 'Stab senkrecht zu B' },
          { label: 'Selbstinduktion', latex: 'U_{\\text{ind}} = -L \\cdot \\frac{\\Delta I}{\\Delta t}', note: 'L = Induktivität [H]' },
        ],
        note: 'Das Minuszeichen im Induktionsgesetz drückt die Lenz\'sche Regel aus: induzierte Spannung wirkt ihrer Ursache entgegen.',
        deeper: `<p><strong>Wichtig für Aufgaben:</strong> Eine Spule kann sich bewegen und trotzdem <em>keine</em> Spannung liefern, wenn der Fluss konstant bleibt. Ein vollständig in einem homogenen Feld bewegter Rahmen ohne Winkeländerung liefert daher keine Induktion. Viele Aufgaben testen genau dieses Verständnis und nicht nur das Einsetzen in Formeln.</p>
<p><strong>Graphen lesen:</strong> Wenn \\(\\Phi(t)\\) linear steigt, ist \\(U_{\\text{ind}}\\) konstant. Wenn \\(\\Phi(t)\\) konstant ist, ist \\(U_{\\text{ind}} = 0\\). Wenn \\(\\Phi(t)\\) sinusförmig verläuft, ist die induzierte Spannung phasenverschoben. Solche Diagrammdeutungen sind typisch abiturrelevant.</p>`
      },
      {
        title: 'Generator und Transformator',
        text: `<p>Der <strong>Generator</strong> nutzt eine periodische Flussänderung und wandelt mechanische in elektrische Energie um. Im rotierenden Leiterrahmen entsteht dadurch eine sinusförmige Wechselspannung. Der <strong>Transformator</strong> basiert ebenfalls auf Induktion, funktioniert aber nur mit veränderlichem Strom und damit mit einem veränderlichen Magnetfeld.</p>
<p>Für das Abi reicht es nicht, nur die Trafo-Gleichung hinzuschreiben. Du solltest erklären können, warum ein idealer Transformator Spannung und Strom gegensinnig verändert und warum hohe Spannung in Stromnetzen die Leitungsverluste reduziert.</p>`,
        formulas: [
          { label: 'Generator', latex: 'U(t) = n \\cdot B \\cdot A \\cdot \\omega \\cdot \\sin(\\omega t)' },
          { label: 'Max. Spannung', latex: 'U_0 = n \\cdot B \\cdot A \\cdot \\omega' },
          { label: 'Transformator', latex: '\\frac{U_1}{U_2} = \\frac{n_1}{n_2}', note: 'idealer Trafo' },
          { label: 'Leistungserhaltung', latex: 'U_1 I_1 = U_2 I_2', note: 'beim idealen Trafo' },
          { label: 'Effektivspannung', latex: 'U_{\\text{eff}} = \\frac{U_0}{\\sqrt{2}}', note: 'sinusförmige Wechselspannung' },
        ],
        deeper: `<p>Die Generatorspannung ist maximal, wenn sich der Fluss gerade am schnellsten ändert. Deshalb ist \\(U\\) maximal, wenn der Rahmen <em>parallel</em> zu den Feldlinien steht, obwohl der Fluss dort selbst null ist. Genau dieser Unterschied zwischen <strong>Fluss</strong> und <strong>Flussänderung</strong> ist eine häufige Fehlerquelle.</p>
<p><strong>Stromversorgung verstehen:</strong> Bei gleicher Leistung führt größere Spannung zu kleinerem Strom. Da Leitungsverluste mit \\(I^2R\\) wachsen, ist Hochspannung technisch sinnvoll. Das ist ein klassischer Transfer zwischen Physik und realer Anwendung.</p>`
      },
      {
        title: 'Spule, Selbstinduktion und Wirbelströme',
        text: `<p>Eine <strong>Spule</strong> speichert Energie im Magnetfeld. Beim Ein- und Ausschalten eines Stromkreises reagiert sie träge: Eine schnelle Stromänderung erzeugt eine große Selbstinduktionsspannung, die der Änderung entgegenwirkt. Deshalb springt der Strom durch eine Spule nicht sofort auf seinen Endwert.</p>
<p><strong>Wirbelströme</strong> entstehen in massiven leitenden Körpern, wenn sich der magnetische Fluss im Material ändert. Sie sind kein Randthema, sondern ausdrücklich abi-relevant, weil man damit Induktionskochfelder, Wirbelstrombremsen oder metallische Erwärmung erklären kann.</p>`,
        formulas: [
          { label: 'Selbstinduktion', latex: 'U_{\\text{ind}} = -L \\cdot \\frac{\\Delta I}{\\Delta t}' },
          { label: 'Induktivität Spule', latex: 'L = \\mu_0 \\mu_r n^2 \\frac{A}{l}' },
          { label: 'Magnetische Energie', latex: 'E_{\\text{Spule}} = \\frac{1}{2} L I^2' },
        ],
        deeper: `<p><strong>Schaltvorgänge:</strong> Beim Ausschalten will die Spule die Stromänderung „verhindern" und erzeugt deshalb oft eine hohe Gegenspannung. Das erklärt Funken an Schaltern oder Schutzdioden in technischen Schaltungen.</p>
<p><strong>Wirbelströme bewerten:</strong> Manchmal sind sie nützlich (Bremsen, Erwärmung), manchmal störend (Energieverluste in Eisenkernen). Genau dieses Unterscheiden von technischer Chance und Nachteil passt sehr gut zu Abiturfragen mit Anwendungsbezug.</p>`
      },
      {
        title: 'Maxwell-Überblick und elektromagnetische Felder',
        text: `<p>Im Leistungsfach sollst du die <strong>Ursache und Struktur elektromagnetischer Felder</strong> im Überblick mit den Aussagen der Maxwell-Gleichungen verbinden. Dafür brauchst du keine vollständige Hochschulmathematik, aber die Kernaussagen müssen sitzen: Elektrische Felder entstehen an Ladungen, magnetische Felder an bewegten Ladungen beziehungsweise Strömen, und zeitliche Änderungen von E- und B-Feldern können sich gegenseitig erzeugen.</p>
<p>Genau daraus folgt die Idee elektromagnetischer Wellen: Ein veränderliches elektrisches Feld erzeugt ein magnetisches Feld und umgekehrt. Elektrodynamik endet also nicht bei Generator und Trafo, sondern verbindet Induktion mit dem allgemeinen Feldbegriff.</p>`,
        formulas: [
          { label: 'Maxwell-Idee 1', latex: '\\text{Ladungen} \\rightarrow \\text{elektrische Felder}' },
          { label: 'Maxwell-Idee 2', latex: '\\text{Ströme und } \\dot{E} \\rightarrow \\text{magnetische Felder}' },
          { label: 'Maxwell-Idee 3', latex: '\\dot{B} \\rightarrow \\text{elektrische Wirbelfelder}' },
        ],
        note: 'Fürs Abi geht es hier vor allem um das physikalische Verständnis, nicht um den vollständigen Differentialgleichungs-Formalismus.',
        deeper: `<p><strong>Gute mündliche Erklärung:</strong> Ein statisches Feld allein „steht". Erst zeitliche Änderungen koppeln E- und B-Feld dynamisch aneinander. Darum ist die Induktion der Einstieg in die Elektrodynamik und nicht nur ein einzelnes Spezialgesetz.</p>
<p><strong>Prüfungsniveau:</strong> Wenn du Generator, Transformator, Induktion, Wirbelströme und elektromagnetische Felder als zusammenhängendes System erklären kannst, bist du deutlich näher am offiziellen Erwartungshorizont als mit vier isolierten Formeln.</p>`
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
        explanation: 'Lenz\'sche Regel: Der induzierte Strom erzeugt ein Feld, das der Flussänderung entgegenwirkt. Das erklärt das Minuszeichen im Induktionsgesetz.',       detailedExplanation: 'Die Lenz\'sche Regel ist das "Trägheitsprinzip" für magnetische Felder. Wenn ein Magnet auf eine Spule zufährt, erzeugt der induzierte Strom ein Magnetfeld, das dem annähernden Magneten abstoBt. Das kostet Kraft (Energieerhaltung!). Das Minuszeichen in U_ind = -n\u00b7\u0394\u03a6/\u0394t drückt genau diese Gegenreaktion aus.'
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
        explanation: 'Schritt-für-Schritt: v in +x, B in +z. Für positive Ladung: \\(\\vec{F} = q(\\vec{v} \\times \\vec{B}) = q \\cdot v \\cdot B (\\hat{x} \\times \\hat{z}) = q \\cdot v \\cdot B \\cdot (-\\hat{y})\\). Das Elektron hat \\(q = -e\\) (negativ), daher: \\(\\vec{F} = (-e) \\cdot v \\cdot B \\cdot (-\\hat{y}) = +e \\cdot v \\cdot B \\cdot \\hat{y}\\). Die Kraft zeigt also in +y-Richtung (nach oben). Merke: Bei negativen Ladungen dreht sich die Kraftrichtung um!',
        correct: 1,
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
      },
      {
        question: 'Eine Leiterschleife befindet sich ruhig in einem konstanten Magnetfeld. Wann entsteht eine Induktionsspannung?',
        options: [
          'Wenn sich der magnetische Fluss durch die Schleife ändert.',
          'Immer, solange ein Magnet in der Nähe ist.',
          'Nur bei supraleitenden Leitern.',
          'Nur wenn die Schleife geladen ist.'
        ],
        correct: 0,
        explanation: 'Nach Faraday gilt: Nur eine Änderung des magnetischen Flusses \\(\\Phi\\) erzeugt eine Induktionsspannung. Ein konstantes Feld allein reicht nicht.'
      },
      {
        question: 'Ein Elektron fliegt senkrecht zu \\(B\\) auf einer Kreisbahn. Was bleibt dabei konstant?',
        options: [
          'Der Betrag der Geschwindigkeit und damit die kinetische Energie.',
          'Die Richtung der Geschwindigkeit.',
          'Der Kreisradius wird ständig größer.',
          'Die Lorentzkraft ist null.'
        ],
        correct: 0,
        explanation: 'Die Lorentzkraft steht senkrecht zur Bewegung und verrichtet keine Arbeit. Deshalb bleibt der Betrag der Geschwindigkeit konstant; nur die Richtung ändert sich.'
      },
      {
        question: 'Bei einem Transformator hat die Primärspule 200 Windungen und die Sekundärspule 50 Windungen. Wenn \\(U_1 = 230\\,\\text{V}\\), wie groß ist idealerweise \\(U_2\\)?',
        options: ['\\(U_2 = 57{,}5\\,\\text{V}\\)', '\\(U_2 = 920\\,\\text{V}\\)', '\\(U_2 = 115\\,\\text{V}\\)', '\\(U_2 = 230\\,\\text{V}\\)'],
        correct: 0,
        explanation: 'Für den idealen Trafo gilt \\(U_2/U_1 = n_2/n_1\\). Also \\(U_2 = 230\\cdot 50/200 = 57{,}5\\,\\text{V}\\).'
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
        text: `

**Licht als Welle** – Das Wellenmodell des Lichts erklärt Phänomene wie Interferenz, Beugung und Polarisation, die mit dem Teilchenmodell nicht erklärbar sind.

Wenn zwei Wellen am gleichen Ort zusammentreffen, überlagern sie sich nach dem **Superpositionsprinzip**: Die Gesamtauslenkung ist die **Summe** der Einzelauslenkungen. Das Ergebnis hängt vom **Gangunterschied** \\(\\Delta s\\) ab – also dem Unterschied in den zurückgelegten Weglängen.

**Konstruktive Interferenz (Maxima, helle Stellen):**
Die Wellen treffen in Phase aufeinander – Wellenberg trifft auf Wellenberg. Bedingung: Der Gangunterschied ist ein **ganzzahliges Vielfaches** der Wellenlänge. Die Amplituden addieren sich, die Intensität ist maximal.

**Destruktive Interferenz (Minima, dunkle Stellen):**
Die Wellen treffen gegenphasig aufeinander – Wellenberg trifft auf Wellental. Bedingung: Der Gangunterschied ist ein **halbzahliges Vielfaches** der Wellenlänge. Die Amplituden löschen sich aus.

**Wichtig:** Interferenz funktioniert nur bei **kohärentem Licht** – Licht, dessen Wellen eine feste, konstante Phasenbeziehung haben (z.B. Laser). Gewöhnliches Licht (Glühbirne) ist inkohärent und erzeugt kein stabiles Muster.

`,
        formulas: [
          { label: 'Konstruktiv (Max.)', latex: '\\Delta s = m \\cdot \\lambda \\quad (m = 0,\\pm1,\\pm2,\\ldots)' },
          { label: 'Destruktiv (Min.)', latex: '\\Delta s = \\left(m + \\frac{1}{2}\\right) \\cdot \\lambda' },
          { label: 'Wellengleichung', latex: 'c = \\lambda \\cdot f', note: 'c = Lichtgeschwindigkeit' },
        ],
        deeper: `

**Was ist Kohärenz genau?**
Kohärentes Licht bedeutet: Alle Wellenzüge haben eine **konstante Phasendifferenz** zueinander. Praktisch erreicht man das mit einem Laser (alle Photonen gleicher Frequenz und Phase) oder indem man Licht durch eine einzige Quelle auf zwei Spalte lenkt (wie beim Youngschen Doppelspaltexperiment).

**Warum funktioniert Interferenz bei normaler Glühbirne nicht stabil?**
Glühbirnenlicht besteht aus vielen kurzen, zufällig einsetzenden Wellenzügen. Die Phasenbeziehung wechselt ständig. Das entstehende Muster mittelt sich zeitlich weg – man sieht nur gleichmäßige Helligkeit.

**Energie bleibt erhalten!**
Bei destruktiver Interferenz verschwindet die Energie nicht. Sie verteilt sich nur anders im Raum: Wo es dunkel wird (Minima), wird es woanders heller (Maxima). Die Gesamtenergie bleibt konstant.

**Phasenunterschied und Gangunterschied zusammengefasst:**
- Gangunterschied \\(\\Delta s = 0, \\lambda, 2\\lambda, \\ldots\\) → Phasenunterschied 0°, 360°, 720°, … → konstruktiv
- Gangunterschied \\(\\Delta s = \\frac{\\lambda}{2}, \\frac{3\\lambda}{2}, \\ldots\\) → Phasenunterschied 180°, 540°, … → destruktiv

**Modellvergleich im Abi:**
Das Strahlenmodell erklärt Reflexion und Brechung gut, das Wellenmodell aber zusätzlich Interferenz, Beugung und Polarisation. Genau dieser Vergleich wird im Leistungsfach erwartet.

`
      },
      {
        title: 'Doppelspalt und optisches Gitter',
        text: `

**Das Youngs'sche Doppelspaltexperiment (1801)**
Thomas Young bewies durch dieses Experiment erstmals, dass Licht Wellencharakter hat. Licht fällt durch zwei eng benachbarte Spalte (Abstand g = Gitterkonstante). Jeder Spalt wird nach dem **Huygensschen Prinzip** zur Quelle einer neuen Kugelwelle. Diese beiden Wellen überlagern sich und erzeugen auf einem Schirm ein **Interferenzmuster** aus hellen und dunklen Streifen.

**Warum funktioniert das?**
Die beiden Spalte werden von derselben Lichtquelle beleuchtet → sie schwingen kohärent (gleiche Phase). Je nach Winkel \\(\\vartheta\\) ist der Gangunterschied \\(\\Delta s = g \\cdot \\sin\\vartheta\\) unterschiedlich groß.

**Maxima (helle Streifen):** \\(g \\cdot \\sin\\vartheta_m = m \\cdot \\lambda\\), wobei m = 0, \u00b11, \u00b12, …
- m = 0: **Zentralmaximum** (geradeaus, beide Wellen legen gleichlange Wege zurück)
- m = 1: **1. Nebenmaximum** links und rechts, Gangunterschied = 1\u03bb
- m = 2: **2. Nebenmaximum**, Gangunterschied = 2\u03bb

**Optisches Gitter – die Verbesserung:**
Statt zwei Spalten hat ein Gitter Hunderte oder Tausende von Spalten pro Millimeter. Die Wirkung: Die Maxima werden **viel schärfer und heller**. Warum? Weil nur in den exakten Winkeln alle Wellen konstruktiv interferieren – bereits kleinste Abweichungen führen zur Auslöschung durch die vielen anderen Spalte.

**Näherung für kleine Winkel:**
Für \\(\\vartheta < 5\u00b0\\) gilt \\(\\sin\\vartheta \\approx \\tan\\vartheta = y/L\\). Damit ergibt sich direkt die Position der Maxima auf dem Schirm.

`,
        formulas: [
          { label: 'Gangunterschied', latex: '\\Delta s = g \\cdot \\sin\\vartheta', note: 'g = Gitterkonstante / Spaltabstand' },
          { label: 'Maxima (Gitter)', latex: 'g \\cdot \\sin\\vartheta_m = m \\cdot \\lambda' },
          { label: 'Näherung (kleine Winkel)', latex: 'y_m = \\frac{m \\cdot \\lambda \\cdot L}{g}', note: 'y = Abstand vom 0. Maximum, L = Schirmabstand' },
        ],
        deeper: `

**Gitterkonstante g berechnen und messen:**
Die Gitterkonstante g ist der Abstand zwischen zwei benachbarten Spalten. Bei einem Gitter mit N Strichen pro Millimeter gilt: \\(g = 1/N\\) mm. Beispiel: 500 Linien/mm → g = 0,002 mm = 2 μm.

Aus einem Experiment lässt sich g bestimmen: \\(g = m \\cdot \\lambda / \\sin\\vartheta_m\\)

Und umgekehrt die Wellenlänge: \\(\\lambda = g \\cdot \\sin\\vartheta_m / m\\)

**Wie zählt man die Ordnungen?**
- m = 0: Zentralmaximum (direkt gerade durch)
- m = \u00b11: erstes Nebenmaximum links und rechts
- m = \u00b12: zweites Nebenmaximum links und rechts
- Höchste sichtbare Ordnung: \\(m_{max} = g / \\lambda\\) (da \\(\\sin\\vartheta \\leq 1\\))

**Weißes Licht am Gitter:**
Weißes Licht besteht aus allen Wellenlängen \\(\\approx\\) 380–780 nm. Jede Wellenlänge wird unter einem anderen Winkel gebeugt (\\(\\sin\\vartheta = m\\lambda/g\\)). Das Ergebnis: Das Zentralmaximum (m = 0) bleibt **weiß**, weil alle Wellenlängen denselben Gangunterschied 0 haben. Alle Nebenmaxima (m \u2260 0) werden in **Spektralfarben aufgefächert**: Violett (kleinste \u03bb) liegt näher am Zentrum, Rot (größte \u03bb) am weitesten außen.

**Warum ist das Gitter besser als der Doppelspalt?**
Beim Gitter überlagern sich nicht 2, sondern Tausende von Spalten. Die Maxima werden dadurch extrem **schmal und intensiv**. Zwischen zwei Maxima hösher Ordnung liegen viele Minima. Das ermöglicht eine sehr genaue Wellenlängenbestimmung (Spektroskopie).

`
      },
      {
        title: 'Einzelspalt',
        text: `

**Warum entsteht beim Einzelspalt ein Muster?**
Man sollte meinen, dass ein Einzelspalt nur einen hellen Streifen direkt dahinter erzeugt. Tatsächlich entsteht aber ein ausgedehntes Beugungsmuster mit einem breiten Zentralmaximum und schmäleren Nebenmaxima. Der Grund liegt im **Huygensschen Prinzip**: Jeder Punkt innerhalb des Spalts sendet eine neue Elementarwelle aus. Diese Wellen aus verschiedenen Bereichen des Spalts können miteinander interferieren.

**Entstehung der Minima (dunkle Stellen):**
Für die Minima teilt man den Spalt gedanklich in **zwei Hälften**. Wenn Wellen von der oberen Hälfte mit Wellen der unteren Hälfte einen Gangunterschied von \\(\\lambda/2\\) haben, löschen sie sich paarweise aus. Das passiert, wenn:
\\[ b \\cdot \\sin\\vartheta = m \\cdot \\lambda \\quad (m = \u00b11, \u00b12, \u00b13, \\ldots) \\]
Achtung: Beim Einzelspalt bezeichnen diese Gleichungen **Minima** (dunkle Stellen) – anders als beim Gitter, wo dieselbe Form Maxima beschreibt!

**Das Zentralmaximum ist besonders:**
- Es ist **doppelt so breit** wie alle Nebenmaxima
- Es ist viel **heller** als die Nebenmaxima
- Seine Breite: \\(\\Delta y = 2\\lambda L / b\\) (von Minimum zu Minimum)

**Einfluss der Spaltbreite b:**
- Enger Spalt (kleines b) → stärkere Beugung → **breiteres** Zentralmaximum
- Breiter Spalt (großes b) → schwache Beugung → **schmales** Maximum (fast wie geometrische Optik)
- Wenn b ≈ λ ist die Beugung am stärksten

**Anwendung: Haardicke messen mit Licht**
Nach dem Babinet-Prinzip erzeugt ein dünner Draht (z.B. ein Haar) dasselbe Beugungsmuster wie ein Spalt gleicher Breite. Man misst b über \\(b = m \\lambda L / y_m\\).

`,
        formulas: [
          { label: 'Minima (Einzelspalt)', latex: 'b \\cdot \\sin\\vartheta = m \\cdot \\lambda \\quad (m = \\pm1, \\pm2, \\ldots)' },
          { label: 'Breite zentrales Max.', latex: '\\Delta y = \\frac{2 \\lambda L}{b}', note: 'nimmt zu wenn b kleiner wird' },
        ],
        note: 'Kleinere Spaltbreite b → breiteres zentrales Maximum (stärkere Beugung).',
        deeper: `

**Babinet-Prinzip (Abitur-relevant!):**
Ein dünner Draht oder Haar erzeugt dasselbe Beugungsmuster wie ein Spalt gleicher Breite. Das ist das Babinet-Prinzip. Praktische Anwendung: Mit einem Laser kann man die Dicke eines Haares messen!

**Rechenweg zur Haardickenbestimmung:**
1. Laser durch das Haar scheinen lassen → Muster auf Schirm
2. Abstand der Minima von der Mitte messen: \\(y_m\\)
3. Schirmabstand L messen
4. Breite des Haares: \\(b = m \\cdot \\lambda \\cdot L / y_m\\)

**Vergleich Einzelspalt vs. Doppelspalt vs. Gitter:**
| | Einzelspalt | Doppelspalt | Gitter |
|---|---|---|---|
| Maxima | Breites Zentralmax., schmale Nebenmaxima | Gleichmäßig breite Maxima | Sehr scharfe Maxima |
| Minima-Bed. | \\(b\\sin\\vartheta = m\\lambda\\) | \\(\\Delta s = (m+\\tfrac{1}{2})\\lambda\\) | kein scharfes Min. |
| Maxima-Bed. | Nur näherungsweise | \\(\\Delta s = m\\lambda\\) | \\(g\\sin\\vartheta = m\\lambda\\) |

**Faustformel:**
Das zentrale Maximum des Einzelspalts ist genau **doppelt so breit** wie alle anderen Nebenmaxima.

`
      },
      {
        title: 'Weitere Wellenphänomene',
        text: `

Licht zeigt alle klassischen Wellenphänomene. Diese sind neben Interferenz und Beugung für das Abitur wichtig:

**1. Reflexion:**
An einer Grenzfläche wird Licht zurückgeworfen. Das Reflexionsgesetz gilt immer: **Einfallswinkel = Ausfallswinkel** (beide gegenüber dem Lot gemessen). Dies gilt für ebene Spiegel, aber auch für Grenzflächen zwischen zwei Medien.

**2. Brechung (Snellius-Gesetz):**
Beim Übergang zwischen zwei Medien ändert Licht seine Richtung. Der Grund: Die Lichtgeschwindigkeit ändert sich (\\(c_n = c_0 / n\\)). Das Snellius-Gesetz:
\\[ n_1 \\cdot \\sin\\alpha_1 = n_2 \\cdot \\sin\\alpha_2 \\]
Brechungsindex n = Verhältnis der Lichtgeschwindigkeiten. Luft: n ≈ 1, Wasser: n ≈ 1,33, Glas: n ≈ 1,5.

**3. Totale Reflexion:**
Beim Übergang vom optisch dichteren ins dünnere Medium (n1 > n2) kann ab einem kritischen Einfallswinkel α_grenz kein Licht mehr hindurch. Der Grenzwinkel: \\(\\sin\\alpha_{\\text{grenz}} = n_2 / n_1\\). Anwendung: Glasfaserkabel funktionieren durch totale Reflexion!

**4. Beugung (Huygenssches Prinzip):**
Jeder Punkt einer Wellenfront wird zur Quelle einer neuen Kugelwelle (Elementarwelle). Dadurch biegt sich Licht um Hindernisse und durch enge Öffnungen. Beugung ist umso stärker, je kleiner die Öffnung (je näher an \\(\\lambda\\)).

**5. Polarisation:**
Licht als Transversalwelle kann polarisiert werden – die Schwingungsrichtung wird auf eine Richtung beschränkt. Bei Polarisationsfiltern: Intensität nach Filter folgt \\(I = I_0 \\cdot \\cos^2\\varphi\\) (Malus-Gesetz).

`,
        formulas: [
          { label: 'Snellius', latex: 'n_1 \\cdot \\sin\\alpha_1 = n_2 \\cdot \\sin\\alpha_2' },
          { label: 'Malus', latex: 'I = I_0 \\cdot \\cos^2\\varphi', note: 'Polarisationsfilter' },
        ],
            deeper: `

**Brechungsindex n – was steckt dahinter?**
Der Brechungsindex n eines Mediums gibt an, um welchen Faktor die Lichtgeschwindigkeit in diesem Medium kleiner ist als im Vakuum:
\\[ n = \\frac{c_0}{c_n} \\]
Mit \\(c_0 = 3 \\cdot 10^8\\) m/s. In Glas (n = 1,5): \\(c_{\\text{Glas}} = 2 \\cdot 10^8\\) m/s. Die Frequenz des Lichts bleibt beim Übergang **unverandert** – nur die Wellenlänge ändert sich: \\(\\lambda_{\\text{Medium}} = \\lambda_{\\text{Luft}} / n\\).

**Totale Reflexion – Rechenbeispiel:**
Glas (n = 1,5) zu Luft (n = 1,0). Grenzwinkel:
\\[\\sin\\alpha_{\\text{grenz}} = \\frac{n_2}{n_1} = \\frac{1{,}0}{1{,}5} = 0{,}667 \\implies \\alpha_{\\text{grenz}} \\approx 41{,}8\u00b0\\]
Ab 41,8° Einfallswinkel wird Licht vollständig reflektiert. Glasfaserkabel nutzen dies: Licht bleibt durch totale Reflexion im Kern und kann über km transportiert werden.

**Dispersion:**
Verschiedene Wellenlängen haben leicht verschiedene Brechungsindizes \\(n(\\lambda)\\). Violettes Licht wird stärker gebrochen als rotes. Das ist der Grund für das Prismenspektrum und den Regenbogen!

**Michelson-Interferometer:**
Im Leistungsfach gehört auch das Michelson-Interferometer zum Überblick. Ein Strahlteiler erzeugt zwei Teilstrahlen mit unterschiedlichem Weg, die anschließend wieder interferieren. Schon winzige Wegdifferenzen verschieben das Muster – deshalb ist das Verfahren extrem empfindlich.

**Huygenssches Prinzip – tieferes Verständnis:**
Wenn Licht auf einen Spalt trifft, senden alle Punkte des Spalts neue Elementarwellen aus. Diese superponieren sich. In Vorwärtsrichtung verstärken sie sich (konstruktiv), seitlich und nach hinten löschen sie sich überwiegend aus. Nur an bestimmten Winkeln entsteht wieder konstruktive Interferenz (Beugungsmaxima).

`
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
      },
      {
        question: 'Beim Doppelspalt wird die Wellenlänge verdoppelt, Spaltabstand und Schirmabstand bleiben gleich. Was passiert mit dem Streifenabstand?',
        options: [
          'Er verdoppelt sich.',
          'Er halbiert sich.',
          'Er bleibt gleich.',
          'Er vervierfacht sich.'
        ],
        correct: 0,
        explanation: 'Der Streifenabstand ist proportional zur Wellenlänge: \\(\\Delta y \\propto \\lambda\\). Größere Wellenlänge bedeutet also größere Abstände der Interferenzmaxima.'
      },
      {
        question: 'Welcher Zusammenhang gilt bei einem optischen Gitter für das 3. Maximum?',
        options: ['\\(g\\sin\\vartheta = 3\\lambda\\)', '\\(g\\sin\\vartheta = \\lambda/3\\)', '\\(b\\sin\\vartheta = 3\\lambda\\)', '\\(\\Delta s = 3g\\)'],
        correct: 0,
        explanation: 'Allgemein gilt beim Gitter: \\(g\\sin\\vartheta = m\\lambda\\). Für das 3. Maximum ist also \\(m = 3\\).'
      },
      {
        question: 'Warum ist das Zentralmaximum am Einzelspalt breiter als die Nebenmaxima?',
        options: [
          'Weil die ersten Minima symmetrisch links und rechts bei \\(\\pm \\lambda L/b\\) liegen.',
          'Weil dort keine Interferenz stattfindet.',
          'Weil das Licht im Zentrum schneller ist.',
          'Weil das Zentralmaximum immer nur von einem Spalt stammt.'
        ],
        correct: 0,
        explanation: 'Das Zentralmaximum reicht vom ersten Minimum links bis zum ersten Minimum rechts und hat daher die doppelte Breite eines einzelnen Nebenmaximums.'
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
      },
      {
        question: 'Ein LC-Kreis hat \\(L = 2\\,\\text{mH}\\) und \\(C = 8\\,\\mu\\text{F}\\). Wie groß ist die Periodendauer \\(T\\)?',
        options: ['\\(T \\approx 0{,}79\\,\\text{ms}\\)', '\\(T \\approx 7{,}9\\,\\text{ms}\\)', '\\(T \\approx 0{,}079\\,\\text{ms}\\)', '\\(T \\approx 1{,}6\\,\\text{ms}\\)'],
        correct: 0,
        explanation: '\\(T = 2\\pi\\sqrt{LC} = 2\\pi\\sqrt{2\\cdot10^{-3} \\cdot 8\\cdot10^{-6}} \\approx 7{,}95\\cdot10^{-4}\\,\\text{s} = 0{,}79\\,\\text{ms}\\).'
      },
      {
        question: 'Wenn im idealen LC-Kreis die Kondensatorspannung gerade \\(U = U_0/2\\) beträgt, welcher Anteil der Gesamtenergie liegt dann im Magnetfeld?',
        options: ['75%', '50%', '25%', '100%'],
        correct: 0,
        explanation: 'Elektrische Energie: \\(E_{\\text{el}} = \\tfrac{1}{2} C (U_0/2)^2 = \\tfrac{1}{4} \\cdot \\tfrac{1}{2} C U_0^2 = 25\\%\\) der Gesamtenergie. Also liegen die restlichen 75% im Magnetfeld.'
      },
      {
        question: 'Bei einem LC-Kreis bleibt \\(L\\) konstant, aber \\(C\\) wird auf ein Neuntel verkleinert. Wie ändert sich die Eigenfrequenz?',
        options: ['Sie verdreifacht sich.', 'Sie wird dreimal kleiner.', 'Sie verneunfacht sich.', 'Sie bleibt gleich.'],
        correct: 0,
        explanation: '\\(f_0 \\propto 1/\\sqrt{C}\\). Wird \\(C\\) auf \\(C/9\\) verkleinert, so gilt \\(f_{\\text{neu}} = f_0 \\cdot \\sqrt{9} = 3f_0\\).'
      },
      {
        question: 'In einem LC-Kreis wird \\(L\\) vervierfacht und gleichzeitig \\(C\\) auf ein Viertel verkleinert. Was passiert mit der Eigenfrequenz \\(f_0\\)?',
        options: ['Sie bleibt gleich.', 'Sie halbiert sich.', 'Sie verdoppelt sich.', 'Sie vervierfacht sich.'],
        correct: 0,
        quizMode: 'advanced',
        explanation: 'Für den LC-Kreis gilt \\(f_0 = \\frac{1}{2\\pi\\sqrt{LC}}\\). Das Produkt \\(LC\\) bleibt hier gleich, weil \\(4L \\cdot C/4 = LC\\). Deshalb ändert sich die Eigenfrequenz nicht.',
        detailedExplanation: 'Der Knackpunkt ist nicht L oder C einzeln, sondern immer ihr Produkt unter der Wurzel. Viele sehen nur „L größer“ und schließen sofort auf kleinere Frequenz. Das wäre nur dann richtig, wenn C gleich bliebe. Sobald sich beide Größen gleichzeitig ändern, musst du zuerst das neue Produkt \\(LC\\) betrachten.'
      },
      {
        question: 'Warum kann die Stromstärke in einer Spule eines LC-Kreises nicht sprunghaft ansteigen?',
        options: [
          'Weil die Selbstinduktion schnelle Stromänderungen entgegenwirkt.',
          'Weil der Kondensator Strom grundsätzlich verbietet.',
          'Weil die Spannung immer null bleiben muss.',
          'Weil elektrische Energie nicht in magnetische Energie umgewandelt werden kann.'
        ],
        correct: 0,
        quizMode: 'exam',
        explanation: 'Eine Spule erzeugt bei Stromänderung eine Induktionsspannung, die der Stromänderung entgegenwirkt. Genau diese träge Reaktion macht \\(L\\) im LC-Kreis zur Analogie der Masse beim Federpendel.',
        detailedExplanation: 'Die Spule speichert Energie im Magnetfeld. Damit dieses Feld aufgebaut wird, muss der Strom erst wachsen. Eine sprunghafte Änderung würde eine unendlich große Induktionsspannung erfordern. Deshalb wirkt die Spule wie eine elektrische Trägheit: Sie bremst schnelle Stromänderungen und sorgt dafür, dass die Schwingung stetig verläuft.'
      },
      {
        question: 'Ein idealer LC-Kreis startet mit maximal geladener Kondensatorplatte. Welche Aussage gilt nach einer Viertelperiode \\(T/4\\)?',
        options: [
          'Der Kondensator ist entladen und die Stromstärke ist maximal.',
          'Spannung und Stromstärke sind beide null.',
          'Der Kondensator ist wieder maximal geladen.',
          'Die magnetische Energie ist null und die elektrische Energie maximal.'
        ],
        correct: 0,
        quizMode: 'exam',
        explanation: 'Nach dem Start mit maximaler Kondensatorspannung ist nach \\(T/4\\) die gesamte Energie ins Magnetfeld der Spule übergegangen. Dann gilt \\(U = 0\\) und \\(I = I_0\\).',
        detailedExplanation: 'Das ist die direkte Analogie zum Federpendel: Startest du am Umkehrpunkt, dann ist nach einem Viertel der Periode die Auslenkung null und die Geschwindigkeit maximal. Im LC-Kreis entspricht das einer entladenen Kapazität und maximaler Stromstärke. Wer nur auf Formeln schaut, verpasst oft diesen Energieaustausch als eigentliche Grundidee.'
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
        title: 'Elektrisches Feld: Struktur, Kraftwirkung und Superposition',
        text: `<p>Das <strong>elektrische Feld</strong> beschreibt, wie stark auf eine Probeladung an jedem Ort eine Kraft wirkt. Im Abi geht es dabei nicht nur um den Plattenkondensator, sondern auch um die <strong>Struktur verschiedener Feldtypen</strong>: homogenes Feld, radiales Feld einer Punktladung, Dipolfeld und die Überlagerung mehrerer Felder.</p>
<p>Feldlinien verlaufen definitionsgemäß von <strong>positiv nach negativ</strong> und zeigen die Richtung der Kraft auf eine positive Probeladung. Du solltest Feldbilder nicht nur wiedererkennen, sondern aus ihnen auch qualitative Aussagen über Feldstärke, Symmetrie und Bewegungsrichtung von Teilchen ableiten können.</p>`,
        formulas: [
          { label: 'Coulomb-Gesetz', latex: 'F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q_1 Q_2}{r^2}', note: 'Punktladungen im Vakuum' },
          { label: 'Elektrische Feldstärke', latex: 'E = \\frac{F}{q} = \\frac{U}{d}', note: 'd = Plattenabstand' },
          { label: 'Kraft auf Ladung', latex: 'F_{\\text{el}} = q \\cdot E' },
          { label: 'Arbeit im E-Feld', latex: 'W = q \\cdot U = q \\cdot E \\cdot d' },
          { label: 'Feld einer Punktladung', latex: 'E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{r^2}' },
        ],
        deeper: `<p><strong>Offiziell relevant:</strong> Im Leistungsfach kommt auch die <strong>Superposition</strong> elektrischer Felder vor. Das bedeutet: Felder addieren sich vektoriell. Bei parallelen oder senkrechten Feldern kann man das rechnerisch auswerten, sonst meist zeichnerisch. Genau dieses Zusammendenken fehlt oft in einfachen Zusammenfassungen.</p>
<p><strong>Bahnvorstellung:</strong> Tritt ein Elektron mit Anfangsgeschwindigkeit quer in ein homogenes E-Feld ein, entsteht wegen konstanter Kraft in Feldrichtung eine Parabelbahn. Das ist der direkte Mechanik-Transfer zum schiefen Wurf und ein typischer Abi-Klassiker.</p>`
      },
      {
        title: 'Magnetisches Feld: Leiter, Spule und Feldstruktur',
        text: `<p>Das <strong>magnetische Feld</strong> wirkt auf bewegte Ladungen und auf stromdurchflossene Leiter. Im Unterschied zum elektrischen Feld gibt es keine isolierten magnetischen Monopole; Feldlinien verlaufen immer in <strong>geschlossenen Linien</strong>. Für das Abi solltest du Feldbilder um gerade Leiter, in Spulen und in homogenen Feldern sicher deuten können.</p>
<p>Wichtig ist auch die Entstehung des Magnetfelds: Es wird durch <strong>bewegte Ladungen beziehungsweise Ströme</strong> erzeugt. Deshalb gehört die schlanke Spule ausdrücklich zum Pflichtstoff und nicht nur als technische Anwendung an den Rand.</p>`,
        formulas: [
          { label: 'Magnetischer Fluss', latex: '\\Phi = B \\cdot A \\cdot \\cos\\alpha' },
          { label: 'Kraft auf Leiter', latex: 'F = B \\cdot I \\cdot s', note: 'bei 90° zwischen I und B' },
          { label: 'Spule', latex: 'B = \\mu_0 \\mu_r \\frac{n}{l} I', note: 'schlanke Spule' },
          { label: 'Kreisbahn im B-Feld', latex: 'r = \\frac{m v}{q B}' },
          { label: 'Periode Kreisbahn', latex: 'T = \\frac{2\\pi m}{q B}', note: 'unabh. von v!' },
        ],
        note: 'Die Kreisbahnperiode im B-Feld ist unabhängig von der Geschwindigkeit – Grundlage des Massenspektrometers!',
        deeper: `<p><strong>Vergleiche beherrschen:</strong> Das Bildungsplan-Niveau verlangt auch Gemeinsamkeiten und Unterschiede zwischen elektrischem, magnetischem und Gravitationsfeld. Elektrische und Gravitationsfelder können bereits auf ruhende Körper wirken; ein Magnetfeld dagegen nur auf bewegte Ladungen oder Ströme. Dafür verrichtet das Magnetfeld bei senkrechtem Eintritt keine Arbeit.</p>
<p><strong>Massenspektrometer und Spule:</strong> Die Kreisbahnen von Ionen verbinden Mechanik und Magnetismus, die Spulenformel verbindet Stromstärke mit Feldstärke. Beides sind klassische Stellen, an denen das Niveau schnell über „nur Feldlinien anschauen" hinausgeht.</p>`
      },
      {
        title: 'Materie, Kondensator und gekreuzte Felder',
        text: `<p>Zum elektrischen Feld gehört im Bildungsplan nicht nur die Kraft auf freie Ladungen, sondern auch das <strong>Verhalten von Materie</strong> im Feld: <strong>Influenz</strong> bei Leitern und <strong>Polarisation</strong> bei Nichtleitern. Damit wird erklärt, warum Körper ohne Nettoladung trotzdem angezogen oder im Feld ausgerichtet werden können.</p>
<p>Außerdem musst du den <strong>Plattenkondensator</strong> als Modell eines homogenen Feldes sicher beherrschen und geladene Teilchen in <strong>gekreuzten E- und B-Feldern</strong> analysieren können. Das ist der Stoff hinter Geschwindigkeitsselektor und Wien-Filter.</p>`,
        formulas: [
          { label: 'Kapazität', latex: 'C = \\frac{Q}{U}', note: 'Einheit Farad' },
          { label: 'Plattenkondensator', latex: 'C = \\varepsilon_0 \\frac{A}{d}', note: 'im Vakuum' },
          { label: 'Gleichgewicht (Selektor)', latex: 'q E = q v B \\implies v = \\frac{E}{B}', note: 'Geschwindigkeitsselektor' },
          { label: 'Energie aus Beschl.-Spannung', latex: 'E_{\\text{kin}} = q U_B = \\frac{1}{2}m v^2' },
          { label: 'Geschwindigkeit', latex: 'v = \\sqrt{\\frac{2qU_B}{m}}' },
        ],
        deeper: `<p><strong>Influenz und Polarisation:</strong> In Leitern verschieben sich freie Ladungen, in Isolatoren nur die Ladungsschwerpunkte. Das klingt erstmal theoretisch, taucht aber in Erklärfragen gerne auf, wenn begründet werden soll, warum ungeladene Körper im Feld reagieren.</p>
<p><strong>Wien-Filter:</strong> Nur Teilchen mit \\(v = E/B\\) passieren unabgelenkt. Alle anderen werden nach oben oder unten abgelenkt. Das ist ein typischer Aufgabentyp, weil dabei Feldrichtung, Ladungsvorzeichen und Kräftebilanz sauber zusammengebracht werden müssen.</p>`
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
      },
      {
        question: 'Ein Proton tritt senkrecht in ein homogenes Magnetfeld ein. Wie ist die Richtung der Lorentzkraft im Vergleich zur Geschwindigkeit?',
        options: [
          'Immer senkrecht zur Geschwindigkeit.',
          'Immer parallel zur Geschwindigkeit.',
          'Immer entgegengesetzt zur Geschwindigkeit.',
          'Sie verschwindet grundsätzlich.'
        ],
        correct: 0,
        explanation: 'Die Lorentzkraft ist \\(\\vec{F}_L = q\\,\\vec{v} \\times \\vec{B}\\). Das Kreuzprodukt steht immer senkrecht auf \\(\\vec{v}\\) und \\(\\vec{B}\\). Deshalb ändert sich die Richtung der Bewegung, aber nicht der Betrag der Geschwindigkeit.'
      },
      {
        question: 'Im Geschwindigkeitsselektor gilt \\(E = 6{,}0\\cdot10^4\\,\\text{V/m}\\) und \\(B = 0{,}20\\,\\text{T}\\). Welche Geschwindigkeit passiert unabgelenkt?',
        options: ['\\(v = 3{,}0\\cdot10^5\\,\\text{m/s}\\)', '\\(v = 1{,}2\\cdot10^4\\,\\text{m/s}\\)', '\\(v = 1{,}2\\cdot10^6\\,\\text{m/s}\\)', '\\(v = 8{,}3\\cdot10^{-6}\\,\\text{m/s}\\)'],
        correct: 0,
        explanation: 'Im Selektor gilt \\(qE = qvB\\), also \\(v = E/B = 6{,}0\\cdot10^4 / 0{,}20 = 3{,}0\\cdot10^5\\,\\text{m/s}\\).'
      },
      {
        question: 'Ein Elektron bewegt sich parallel zu einem Magnetfeld. Welche magnetische Kraft wirkt dann auf es?',
        options: ['Keine, weil \\(\\sin 0^\\circ = 0\\).', 'Eine maximale Kraft.', 'Eine Kraft entgegen der Flugrichtung.', 'Eine Kraft in Feldrichtung.'],
        correct: 0,
        explanation: 'Für die Lorentzkraft gilt \\(F_L = qvB\\sin\\alpha\\). Bei paralleler Bewegung ist \\(\\alpha = 0^\\circ\\), also \\(\\sin 0^\\circ = 0\\) und damit \\(F_L = 0\\).'
      },
      {
        question: 'Warum wird ein ungeladener Metallkörper in der Nähe einer positiven Ladung trotzdem angezogen?',
        options: [
          'Durch Influenz verschieben sich im Leiter die freien Ladungen, sodass die negative Seite näher an der positiven Ladung liegt.',
          'Weil auch ungeladene Körper immer positiv geladen sind.',
          'Weil Magnetfelder zwischen beiden Körpern entstehen.',
          'Weil die Gewichtskraft im elektrischen Feld größer wird.'
        ],
        correct: 0,
        quizMode: 'exam',
        explanation: 'In einem Leiter können sich freie Elektronen verschieben. Auf der der positiven Ladung zugewandten Seite sammelt sich dadurch mehr negative Ladung, auf der anderen Seite bleibt positive Überschussladung zurück. Die Anziehung der nahen negativen Seite überwiegt.',
        detailedExplanation: 'Entscheidend ist der unterschiedliche Abstand: Die entgegengesetzte Ladung sitzt näher an der äußeren positiven Ladung als die gleichnamige Ladung auf der Rückseite. Nach dem Coulomb-Gesetz nimmt die Kraft mit \\(1/r^2\\) ab. Deshalb ist die Anziehung stärker als die Abstoßung, obwohl der Körper insgesamt neutral bleibt.'
      },
      {
        question: 'Im Geschwindigkeitsselektor werden sowohl \\(E\\) als auch \\(B\\) verdoppelt. Welche Geschwindigkeit passiert dann unabgelenkt?',
        options: [
          'Dieselbe wie vorher.',
          'Die doppelte Geschwindigkeit.',
          'Die halbe Geschwindigkeit.',
          'Es kann dann kein Teilchen mehr unabgelenkt passieren.'
        ],
        correct: 0,
        quizMode: 'advanced',
        explanation: 'Es gilt \\(v = E/B\\). Wenn Zähler und Nenner mit demselben Faktor verändert werden, bleibt das Verhältnis gleich. Deshalb bleibt auch die selektierte Geschwindigkeit unverändert.',
        detailedExplanation: 'Im Selektor zählt nicht die absolute Größe der Kräfte, sondern ihr Gleichgewicht. Verdoppelst du beide Felder, verdoppeln sich elektrische Kraft \\(qE\\) und Lorentzkraft \\(qvB\\) gleichzeitig. Die Bedingung fürs Aufheben bleibt also für genau dieselbe Geschwindigkeit erfüllt.'
      },
      {
        question: 'Warum verrichtet ein homogenes Magnetfeld an einem geladenen Teilchen auf Kreisbahn keine Arbeit?',
        options: [
          'Weil die Lorentzkraft immer senkrecht zur momentanen Geschwindigkeit steht.',
          'Weil Magnetfelder grundsätzlich zu schwach für Arbeit sind.',
          'Weil nur elektrische Felder Arbeit verrichten können, wenn ein Teilchen geladen ist.',
          'Weil auf der Kreisbahn überhaupt keine Kraft wirkt.'
        ],
        correct: 0,
        quizMode: 'exam',
        explanation: 'Arbeit wird nur verrichtet, wenn eine Kraft eine Komponente in Bewegungsrichtung hat. Die Lorentzkraft steht aber stets senkrecht auf \\(\\vec{v}\\). Deshalb ändert sich nur die Richtung der Geschwindigkeit, nicht ihr Betrag.',
        detailedExplanation: 'Genau deshalb bleiben kinetische Energie und Geschwindigkeit im homogenen B-Feld konstant, obwohl die Bahn gekrümmt wird. Das Magnetfeld lenkt um, es beschleunigt nicht entlang der Bahn. Dieser Unterschied ist im Abi wichtig, weil man Magnetfeld und elektrisches Feld sonst zu schnell durcheinanderwirft: Das E-Feld kann Energie übertragen, das reine B-Feld bei senkrechtem Eintritt nicht.'
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
<p>Ein Photon überträgt seine gesamte Energie auf ein Elektron. Ist diese größer als die <strong>Austrittsarbeit</strong> \\(W_A\\), verlässt das Elektron das Metall. Im Unterricht taucht dazu oft der <strong>Hallwachs-Versuch</strong> auf: Eine negativ geladene Zinkplatte entlädt sich unter UV-Licht, bei rotem Licht aber nicht.</p>`,
        formulas: [
          { label: 'Photonenenergie', latex: 'E_{\\text{Ph}} = h \\cdot f = \\frac{hc}{\\lambda}', note: 'h = 6,626·10⁻³⁴ J·s' },
          { label: 'Einstein-Gleichung', latex: 'E_{\\text{kin}} = h f - W_A', note: 'kinetische Energie der Elektronen' },
          { label: 'Grenzfrequenz', latex: 'f_{\\text{min}} = \\frac{W_A}{h}', note: 'darunter kein Photoeffekt' },
          { label: 'Gegenspannung', latex: 'e U_G = E_{\\text{kin,max}} = h f - W_A' },
        ],
        note: 'Einsteinsche Lichtquantenhypothese: Licht besteht aus Photonen. Für den Photoeffekt ist nur f entscheidend, nicht die Intensität.',
        deeper: `<p><strong>Intensität vs. Frequenz:</strong> Höhere Intensität = mehr Photonen = größerer Fotostrom. Höhere Frequenz = mehr Energie pro Photon = schnellere Elektronen (größere kin. Energie). Diese beiden Effekte sind unabhängig voneinander.</p>
<p><strong>Typischer Abiturpunkt:</strong> Man muss zwischen ausgelösten Elektronen, maximaler kinetischer Energie und Fotostrom sauber unterscheiden. Intensität verändert vor allem die Anzahl der Elektronen, die Frequenz vor allem deren Energie.</p>
<p><strong>Umrechnung eV ↔ J:</strong> \\(1\\,\\text{eV} = 1{,}6 \\cdot 10^{-19}\\,\\text{J}\\). Austrittsarbeit wird oft in eV angegeben (typisch: 2–5 eV).</p>
<p><strong>Grenzwellenlänge:</strong> \\(\\lambda_{\\max} = hc/W_A\\). Nur Licht mit \\(\\lambda < \\lambda_{\\max}\\) löst den Photoeffekt aus.</p>`
      },
      {
        title: 'Welle-Teilchen-Dualismus',
        text: `<p>Licht verhält sich manchmal wie eine Welle (Interferenz, Beugung) und manchmal wie ein Teilchen (Photoeffekt). Diesen scheinbaren Widerspruch nennt man <strong>Welle-Teilchen-Dualismus</strong>.</p>
<p>Auch Elektronen und andere Materieteilchen zeigen Wellenverhalten (de Broglie). Für Quantenobjekte reicht also weder ein reines Teilchenbild noch ein reines Wellenbild vollständig aus.</p>`,
        formulas: [
          { label: 'De-Broglie-Wellenlänge', latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}', note: 'p = Impuls' },
        ],
        deeper: `<p><strong>Doppelspalt mit Elektronen:</strong> Einzelne Elektronen erzeugen zusammen ein Interferenzmuster – obwohl sie einzeln durch den Apparat geschickt werden. Das Elektron „interferiert mit sich selbst". Es gibt keinen klassisch definierbaren Weg durch genau einen Spalt.</p>
<p><strong>Moderne Deutung:</strong> Die Quantenphysik macht Aussagen über Wahrscheinlichkeiten von Messwerten. Vor der Messung beschreibt man kein Teilchen auf einer festen Bahn, sondern einen Zustand mit Wahrscheinlichkeitsverteilung.</p>
<p><strong>Heisenbergsche Unschärferelation:</strong> Ort und Impuls können nicht gleichzeitig beliebig genau bestimmt werden: \\(\\Delta x \\cdot \\Delta p \\geq h/(4\\pi)\\). Das ist keine schlechte Messung, sondern eine fundamentale Grenze der Naturbeschreibung.</p>`
      },
      {
        title: 'Energieniveaus und Spektren',
        text: `<p>Elektronen in Atomen können nicht beliebige Energien annehmen, sondern nur <strong>diskrete Energieniveaus</strong>. Deshalb entstehen auch nicht beliebige Photonenergien, sondern nur ganz bestimmte Übergänge zwischen erlaubten Zuständen.</p>
<p>Fällt ein Elektron auf ein niedrigeres Energieniveau, wird ein Photon mit der Energiedifferenz emittiert. Für einen Übergang nach oben muss das Atom genau diese Energiedifferenz absorbieren. Genau daraus entstehen <strong>Emissions- und Absorptionsspektren</strong>.</p>
<p>Im Abi ist wichtig, dass du nicht nur Linien im Spektrum erkennst, sondern daraus argumentierst: Scharfe Linien sind ein direkter Hinweis auf gequantelte Energieniveaus und damit auf ein nichtklassisches Atommodell.</p>`,
        formulas: [
          { label: 'Emittiertes Photon', latex: 'h f = E_m - E_n \\quad (E_m > E_n)' },
          { label: 'Absorbiertes Photon', latex: 'h f = E_n - E_m \\quad (E_n > E_m)' },
        ],
        note: 'Linienspektren sind der Fingerabdruck eines Elements. Nur Photonen mit genau der richtigen Energie werden absorbiert.',
        deeper: `<p><strong>Emission und Absorption unterscheiden:</strong> Bei der Emission gibt das Atom Energie ab, bei der Absorption nimmt es Energie auf. In beiden Fällen gilt aber dieselbe Grundidee: Nur die Differenz zweier erlaubter Niveaus zählt.</p>
<p><strong>Linienspektren als Beweis:</strong> Wären beliebige Energien möglich, müsste auch ein kontinuierliches Spektrum entstehen. Die beobachteten scharfen Linien zeigen dagegen, dass nur bestimmte Übergänge erlaubt sind. Genau das ist die physikalische Aussage hinter dem Spektrum.</p>
<p><strong>Anwendung: Spektralanalyse</strong> Sterne und Gasentladungen werden über ihre Spektrallinien untersucht. Aus den Linien kann man auf die chemische Zusammensetzung und teilweise sogar auf Bewegungen oder Temperaturen schließen. Das macht den Themenblock besonders abi-typisch, weil hier Theorie und Anwendung eng zusammenhängen.</p>`
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
      },
      {
        question: 'Die Austrittsarbeit eines Metalls beträgt \\(W_A = 2{,}0\\,\\text{eV}\\). Ein Photon hat \\(E = 3{,}5\\,\\text{eV}\\). Wie groß ist die maximale kinetische Energie des ausgelösten Elektrons?',
        options: ['\\(1{,}5\\,\\text{eV}\\)', '\\(5{,}5\\,\\text{eV}\\)', '\\(2{,}0\\,\\text{eV}\\)', '\\(3{,}5\\,\\text{eV}\\)'],
        correct: 0,
        explanation: 'Nach Einstein gilt \\(E_{\\text{kin,max}} = E_{\\text{Ph}} - W_A = 3{,}5 - 2{,}0 = 1{,}5\\,\\text{eV}\\).'
      },
      {
        question: 'Was erhöht beim Photoeffekt den Fotostrom am stärksten, solange die Frequenz über der Grenzfrequenz liegt?',
        options: [
          'Eine höhere Lichtintensität.',
          'Eine größere Austrittsarbeit.',
          'Eine kleinere Gegenspannung allein.',
          'Eine längere Wellenlänge unterhalb der Grenzfrequenz.'
        ],
        correct: 0,
        explanation: 'Höhere Intensität bedeutet mehr Photonen pro Zeit und damit mehr ausgelöste Elektronen pro Zeit. Dadurch wächst der Fotostrom.'
      },
      {
        question: 'Warum zeigt ein Elektron im Doppelspaltexperiment ein Interferenzmuster, obwohl es einzeln ausgesendet wird?',
        options: [
          'Weil Elektronen Welleneigenschaften besitzen und ihre Wahrscheinlichkeitsamplitude interferiert.',
          'Weil zwei Elektronen immer gemeinsam ausgesendet werden.',
          'Weil das Magnetfeld zwischen den Spalten oszilliert.',
          'Weil Elektronen im Flug zu Photonen werden.'
        ],
        correct: 0,
        explanation: 'Der Welle-Teilchen-Dualismus beschreibt genau dieses Verhalten: Einzelne Elektronen werden punktförmig nachgewiesen, aber ihre Wahrscheinlichkeitswelle interferiert mit sich selbst.'
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
        text: `<p>Eine <strong>Welle</strong> ist die räumliche Ausbreitung einer Schwingung. Dabei wird <strong>Energie</strong> übertragen, aber nicht dauerhaft Materie mitgenommen: Die Teilchen des Mediums schwingen nur um ihre Ruhelage. Genau diese Unterscheidung zwischen <em>Teilchenbewegung</em> und <em>Ausbreitung der Störung</em> wird im Abi oft abgefragt.</p>
<p>Für das Rechnen sind drei Größen zentral: <strong>Frequenz</strong> \\(f\\), <strong>Periodendauer</strong> \\(T\\) und <strong>Wellenlänge</strong> \\(\\lambda\\). Die Frequenz wird von der Quelle vorgegeben, die Ausbreitungsgeschwindigkeit \\(c\\) hängt vom Medium ab, und daraus folgt die Wellenlänge über \\(c = \\lambda f\\).</p>
<p><strong>Transversalwellen:</strong> Schwingungsrichtung senkrecht zur Ausbreitungsrichtung, zum Beispiel Seilwellen oder Licht. <strong>Longitudinalwellen:</strong> Schwingungsrichtung parallel zur Ausbreitungsrichtung, zum Beispiel Schall in Luft. Im Leistungsfach solltest du außerdem erklären können, warum elektromagnetische Wellen kein materielles Trägermedium brauchen.</p>`,
        formulas: [
          { label: 'Wellengeschwindigkeit', latex: 'c = \\lambda \\cdot f = \\frac{\\lambda}{T}' },
          { label: 'Wellenlänge', latex: '\\lambda = \\frac{c}{f}' },
          { label: 'Frequenz', latex: 'f = \\frac{1}{T} = \\frac{c}{\\lambda}' },
        ],
        note: 'Die Quelle bestimmt die Frequenz, das Medium bestimmt die Ausbreitungsgeschwindigkeit.',
        deeper: `<p><strong>Merkhilfe:</strong> \\(c = \\lambda \\cdot f\\) ist die Leitformel. Wenn sich das Medium ändert, bleibt bei einer vorgegebenen Quelle \\(f\\) gleich, also muss sich bei verändertem \\(c\\) die Wellenlänge \\(\\lambda\\) mit ändern.</p>
<p><strong>Wellenfront und Wellennormale:</strong> Eine Wellenfront verbindet Punkte gleicher Phase. Die Wellennormale steht senkrecht auf dieser Front und zeigt die Ausbreitungsrichtung. Dieses Bild brauchst du später für Brechung, Beugung und das Huygens-Prinzip.</p>
<p><strong>Typischer Denkfehler:</strong> Oft wird gesagt, „die Teilchen laufen mit der Welle mit". Das stimmt nicht. Bei mechanischen Wellen schwingen die Teilchen lokal hin und her, während sich nur die Störung durch das Medium fortpflanzt. Bei elektromagnetischen Wellen schwingt kein Stoff, sondern elektrische und magnetische Feldgrößen ändern sich periodisch.</p>`
      },
      {
        title: 'Momentanbild und Zeit-Ort-Diagramm',
        text: `<p>Das <strong>Momentanbild</strong> zeigt die Auslenkung vieler Orte zu <em>einem festen Zeitpunkt</em>. Auf der horizontalen Achse steht also der Ort. Deshalb liest man dort typischerweise die <strong>Wellenlänge</strong> \\(\\lambda\\) und die räumliche Form der Welle ab.</p>
<p>Das <strong>Zeit-Auslenkung-Diagramm</strong> zeigt dagegen die Bewegung <em>eines einzigen Ortes</em> im Laufe der Zeit. Auf der horizontalen Achse steht hier die Zeit. Deshalb liest man dort vor allem die <strong>Periodendauer</strong> \\(T\\) und daraus die Frequenz ab.</p>
<p>Im Abi ist diese Unterscheidung wichtig, weil beide Diagramme oft gleich sinusförmig aussehen, aber völlig unterschiedliche Aussagen liefern. Wer nur auf die Form schaut und nicht auf die Achsen, verwechselt schnell \\(T\\) und \\(\\lambda\\).</p>`,
        formulas: [
          { label: 'Momentanbild', latex: 'y(x) = \\hat{y}\\sin\\!\\left(\\frac{2\\pi}{\\lambda}x\\right)' },
          { label: 'Zeit-Diagramm', latex: 'y(t) = \\hat{y}\\sin\\!\\left(\\frac{2\\pi}{T}t\\right)' },
        ],
        note: 'Vorsicht: Im Momentanbild liest man λ ab, im Zeit-Diagramm T. Die Achsenbezeichnung entscheidet!',
        deeper: `<p><strong>Bewegungsrichtung aus dem Momentanbild:</strong> Bei einer nach rechts laufenden Welle nimmt ein fester Punkt kurz danach die Auslenkung an, die sein linker Nachbar jetzt schon hat. Bei einer nach links laufenden Welle ist es entsprechend umgekehrt. Dieses qualitative Denken ist in Erklärfragen oft hilfreicher als bloßes Formelwissen.</p>
<p><strong>Prüfungstypisch:</strong> In Diagrammaufgaben sollst du oft aus einem Zeitdiagramm \\(T\\) bestimmen, mit \\(c = \\lambda f\\) die Wellenlänge berechnen und anschließend diese Wellenlänge im Momentanbild wiederfinden. Genau diese Verbindung zwischen beiden Darstellungen solltest du sicher beherrschen.</p>`
      },
      {
        title: 'Stehende Wellen',
        text: `<p>Überlagern sich zwei gleichartige, gleich schnelle und gleichfrequente Wellen, die sich in entgegengesetzte Richtungen ausbreiten, entsteht eine <strong>stehende Welle</strong>. Typischerweise passiert das bei Reflexion an einem Rand.</p>
<p>Dabei gibt es feste <strong>Schwingungsknoten</strong>, an denen die Auslenkung immer null bleibt, und <strong>Schwingungsbäuche</strong>, an denen die Amplitude maximal ist. Anders als bei einer laufenden Welle wird also kein Muster weitergetragen; das räumliche Muster bleibt stehen.</p>
<p>Für Saiten, Luftsäulen und ähnliche Systeme ist entscheidend, welche <strong>Randbedingungen</strong> gelten. Genau daraus folgen die erlaubten Eigenfrequenzen. Im Abi ist das oft der eigentliche Kern der Aufgabe.</p>`,
        formulas: [
          { label: 'Wellenlängen (beidseitig fest)', latex: '\\lambda_n = \\frac{2L}{n} \\quad (n = 1, 2, 3, \\ldots)' },
          { label: 'Eigenfrequenzen', latex: 'f_n = \\frac{n \\cdot c}{2L}', note: 'harmonische Reihe' },
        ],
        note: 'Knoten und Bäuche entstehen aus den Randbedingungen des Systems.',
        deeper: `<p><strong>Randbedingungen:</strong> Am festen Ende liegt ein Knoten, am losen Ende ein Bauch. Bei einer beidseitig festen Saite gilt deshalb \\(\\lambda_1 = 2L\\). In offenen oder halboffenen Luftsäulen ändern sich diese Bedingungen, und damit auch die erlaubten Frequenzen.</p>
<p><strong>Grundschwingung und Obertöne:</strong> Die Grundschwingung ist die tiefste mögliche Eigenschwingung. Höhere Moden besitzen zusätzliche Knoten und Bäuche. In Aufgaben sollst du oft aus einer Skizze die Ordnung \\(n\\) erkennen und daraus \\(\\lambda_n\\) oder \\(f_n\\) bestimmen.</p>
<p><strong>Anwendungsbezug:</strong> Musikinstrumente funktionieren genau über diese Eigenmoden. Der Grundton legt die wahrgenommene Höhe fest, die Obertöne bestimmen den Klangcharakter.</p>`
      },
      {
        title: 'Interferenz zweier Quellen',
        text: `<p>Treffen zwei Wellen zusammen, überlagern sich ihre Auslenkungen. Bei zwei <strong>kohärenten</strong> Quellen, also Quellen mit fester Phasenbeziehung und gleicher Frequenz, entsteht dadurch ein stabiles <strong>Interferenzmuster</strong> aus Verstärkungs- und Auslöschungszonen.</p>
<p>Entscheidend ist der <strong>Gangunterschied</strong> \\(\\Delta s\\): Ist er ein ganzzahliges Vielfaches der Wellenlänge, verstärken sich die Wellen konstruktiv. Bei einem halbzahlig verschobenen Gangunterschied löschen sie sich destruktiv aus.</p>
<p>Das ist nicht nur ein Rechenthema. In Begründungsaufgaben musst du oft erklären, warum an einem bestimmten Ort ein Maximum oder Minimum entsteht und wieso das Muster nur bei kohärenten Quellen stabil bleibt.</p>`,
        formulas: [
          { label: 'Verstärkung', latex: '\\Delta s = m \\cdot \\lambda \\quad (m = 0,\\pm1,\\pm2,\\ldots)' },
          { label: 'Auslöschung', latex: '\\Delta s = (m + \\tfrac{1}{2}) \\cdot \\lambda' },
          { label: 'Gangunterschied', latex: '\\Delta s = |r_1 - r_2|' },
        ],
        note: 'Ohne Kohärenz kein stabiles Interferenzmuster.',
        deeper: `<p><strong>Huygens-Prinzip:</strong> Jeder Punkt einer Wellenfront kann als Ausgangspunkt neuer Elementarwellen gedacht werden. Damit lassen sich Interferenz, Beugung und Brechung in einem gemeinsamen Bild verstehen.</p>
<p><strong>Typischer Denkfehler:</strong> Ein Intensitätsminimum bedeutet nicht, dass dort keine Wellen ankommen. Beide Wellen kommen an, aber ihre Auslenkungen heben sich dort gegenseitig auf.</p>
<p><strong>Technischer Bezug:</strong> Gegenschall in Kopfhörern nutzt destruktive Interferenz. So wird aus einem abstrakten Wellenprinzip direkt eine praktische Anwendung.</p>`
      },
      {
        title: 'Brechung, Beugung und elektromagnetische Wellen',
        text: `<p>Bei der <strong>Brechung</strong> ändert eine Welle an einer Grenzfläche ihre Richtung, weil sich ihre Ausbreitungsgeschwindigkeit im neuen Medium ändert. Dabei bleibt die <strong>Frequenz konstant</strong>, aber die Wellenlänge passt sich an. Genau deshalb folgt aus Brechung nicht nur ein Richtungswechsel, sondern auch eine veränderte Phasenlage im neuen Medium.</p>
<p>Bei der <strong>Beugung</strong> breitet sich eine Welle auch in den geometrischen Schattenraum aus. Besonders deutlich wird das, wenn Öffnungen oder Hindernisse in der Größenordnung der Wellenlänge liegen. Das ist ein klares Zeichen dafür, dass das reine Strahlenmodell nicht ausreicht.</p>
<p>Diese Gedanken lassen sich direkt auf <strong>elektromagnetische Wellen</strong> übertragen. Licht ist also keine Sondererscheinung, sondern ein Wellenphänomen, bei dem elektrische und magnetische Felder miteinander gekoppelt sind.</p>`,
        formulas: [
          { label: 'Brechungsindex', latex: 'n = \\frac{c_0}{c}' },
          { label: 'Snellius', latex: 'n_1 \\sin\\alpha_1 = n_2 \\sin\\alpha_2' },
        ],
        note: 'Bei Brechung bleibt f gleich, bei kleinerem c wird auch λ kleiner.',
        deeper: `<p><strong>Grenze des Strahlenmodells:</strong> Sind Öffnungen und Hindernisse viel größer als \\(\\lambda\\), kann man Licht oft gut mit Strahlen beschreiben. In der Größenordnung der Wellenlänge treten Beugung und Interferenz so deutlich auf, dass nur das Wellenmodell die Beobachtungen erklären kann.</p>
<p><strong>Brechung sauber begründen:</strong> Beim Übergang in ein optisch dichteres Medium wird Licht langsamer. Dadurch dreht sich die Wellennormale zum Lot hin. Viele Aufgaben fragen genau diese qualitative Begründung und nicht nur das Einsetzen in das Snelliussche Gesetz.</p>
<p><strong>Polarisation als Brücke zur Wellenoptik:</strong> Dass Licht polarisiert werden kann, zeigt seinen Transversalcharakter. Damit ist die Wellenlehre direkt mit der Wellenoptik verbunden.</p>`
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
      },
      {
        question: 'Eine Welle hat \\(\\lambda = 0{,}80\\,\\text{m}\\) und \\(f = 5\\,\\text{Hz}\\). Wie groß ist die Ausbreitungsgeschwindigkeit?',
        options: ['\\(c = 4{,}0\\,\\text{m/s}\\)', '\\(c = 6{,}25\\,\\text{m/s}\\)', '\\(c = 0{,}16\\,\\text{m/s}\\)', '\\(c = 40\\,\\text{m/s}\\)'],
        correct: 0,
        explanation: '\\(c = \\lambda f = 0{,}80\\cdot5 = 4{,}0\\,\\text{m/s}\\).'
      },
      {
        question: 'Bei einer stehenden Welle auf einer Saite: Was befindet sich an einem Knoten?',
        options: [
          'Ein Punkt mit dauerhaft null Auslenkung.',
          'Ein Punkt maximaler Amplitude.',
          'Ein Bereich mit doppelter Frequenz.',
          'Der Ort maximaler Wellengeschwindigkeit.'
        ],
        correct: 0,
        explanation: 'Knoten sind Punkte, die sich bei der stehenden Welle gar nicht bewegen. Dort ist die Auslenkung jederzeit null.'
      },
      {
        question: 'Zwei kohärente Quellen erzeugen am Punkt P konstruktive Interferenz. Welcher Gangunterschied ist dafür möglich?',
        options: ['\\(\\Delta s = 2\\lambda\\)', '\\(\\Delta s = 1{,}5\\lambda\\)', '\\(\\Delta s = 0{,}5\\lambda\\)', '\\(\\Delta s = 2{,}5\\lambda\\)'],
        correct: 0,
        explanation: 'Konstruktive Interferenz liegt vor, wenn \\(\\Delta s = m\\lambda\\) mit ganzzahligem \\(m\\). \\(2\\lambda\\) erfüllt diese Bedingung.'
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
