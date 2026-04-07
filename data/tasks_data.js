// ===== ABITURAUFGABEN-DATEN =====
// Aufgaben transkribiert aus den Original-PDFs 2018–2025

const TASKS_DATA = {

  // ══════════════════════════════════════════════════════
  // MECHANISCHE SCHWINGUNGEN
  // ══════════════════════════════════════════════════════
  schwingungen: [
    {
      id: 'schw_2025_2',
      year: 2025,
      title: 'Schwimmende Boje – Resonanz im Hafen',
      pdfImages: ['2025_2_p1.png','2025_2_p2.png','2025_2_p3.png'],
      context: 'Im Hafen schwimmt eine zylindrische Boje (Masse \\(m = 4900\\,\\text{kg}\\), Durchmesser \\(d = 2{,}55\\,\\text{m}\\)). Meereswellen mit der Wellenlänge \\(\\lambda = 12\\,\\text{m}\\) und Geschwindigkeit \\(c = 6{,}11\\,\\text{m/s}\\) treffen auf die Boje. Die Gleichgewichtsbedingung liefert die DGL: \\(m\\ddot{s} + A\\rho g s = 0\\).',
      subtasks: [
        {
          label: 'a)',
          points: 2,
          text: 'Zeige anhand der Differentialgleichung \\(m\\ddot{s} + A\\rho g s = 0\\), dass es sich um eine harmonische Schwingung handelt.',
          hint: 'Bringe die DGL auf die Form \\(\\ddot{s} + \\omega^2 s = 0\\).',
          solution: '\\[m\\ddot{s} = -A\\rho g s \\implies \\ddot{s} = -\\frac{A\\rho g}{m}\\cdot s\\] Damit hat die DGL die Form \\(\\ddot{s} = -\\omega_0^2 \\cdot s\\) mit \\(\\omega_0^2 = \\frac{A\\rho g}{m}\\). Die rücktreibende Kraft ist proportional zur Auslenkung → harmonische Schwingung. \\(\\checkmark\\)',
          deeperExplanation: 'Die Einheit von \\(A\\rho g / m\\): \\([\\text{m}^2 \\cdot \\text{kg/m}^3 \\cdot \\text{m/s}^2 / \\text{kg}] = \\text{s}^{-2}\\) – das ist korrekt für \\(\\omega^2\\).'
        },
        {
          label: 'b)',
          points: 6,
          text: 'Berechne die Eigenfrequenz \\(f_0\\) der Boje. (\\(\\rho = 1{,}0 \\cdot 10^3\\,\\text{kg/m}^3\\), \\(g = 9{,}81\\,\\text{m/s}^2\\))',
          hint: '\\(f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{A\\rho g}{m}}\\), berechne zuerst die Querschnittsfläche A.',
          solution: '\\[A = \\pi r^2 = \\pi \\cdot (1{,}275\\,\\text{m})^2 \\approx 5{,}11\\,\\text{m}^2\\] \\[f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{5{,}11 \\cdot 1000 \\cdot 9{,}81}{4900}} \\approx \\frac{1}{2\\pi}\\sqrt{10{,}22} \\approx 0{,}51\\,\\text{Hz}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 4,
          text: 'Berechne die Erregerfrequenz der Meereswellen und beurteile, ob Resonanz auftritt. Welche Gefahr besteht?',
          hint: '\\(f_E = c/\\lambda\\). Vergleiche mit \\(f_0\\).',
          solution: '\\[f_E = \\frac{c}{\\lambda} = \\frac{6{,}11\\,\\text{m/s}}{12\\,\\text{m}} \\approx 0{,}51\\,\\text{Hz}\\] Da \\(f_E = f_0 \\approx 0{,}51\\,\\text{Hz}\\), liegt <strong>Resonanz</strong> vor. Selbst bei kleiner Wellenamplitude kann die Boje sehr große Amplituden entwickeln – gefährlich für Verankerung und Schiffsbetrieb.',
          deeperExplanation: 'Dies ist das Problem der Resonanzkatastrophe. Je geringer die Dämpfung, desto größer die Resonanzamplitude. Im Extremfall kann die Boje kentern.'
        }
      ]
    },
    {
      id: 'schw_2024_1',
      year: 2024,
      title: 'Schaukel – Harmonische Schwingung mit Sensor',
      pdfImages: ['2024_1_p1.png','2024_1_p2.png','2024_1_p3.png'],
      context: 'Mit dem Beschleunigungssensor eines Smartphones wird die Bewegung einer Schaukel aufgezeichnet. Das Diagramm zeigt die Beschleunigung als Funktion der Zeit (\\(a\\)-\\(t\\)-Diagramm mit sinusförmigem Verlauf, Amplitude \\(\\hat{a} \\approx 2{,}5\\,\\text{m/s}^2\\), sichtbar für 8 Perioden).',
      pdfHint: 'Originaldiagramm: Abi 2024, Aufgabe 1, Abb. 1 (a-t-Diagramm der Schaukel)',
      subtasks: [
        {
          label: 'a)',
          points: 4,
          text: 'Bestimme die Periodendauer \\(T\\) dieser Schwingung möglichst genau aus dem \\(a\\)-\\(t\\)-Diagramm.',
          hint: 'Zähle möglichst viele Perioden und dividiere die Gesamtzeit durch die Anzahl.',
          solution: 'Aus dem Diagramm: 8 Perioden entsprechen \\(t = 16{,}0\\,\\text{s}\\). \\[T = \\frac{16{,}0\\,\\text{s}}{8} = 2{,}0\\,\\text{s}\\] Die Frequenz beträgt \\(f = 0{,}5\\,\\text{Hz}\\).',
          deeperExplanation: 'Das Ablesen vieler Perioden und Mittelung reduziert den Messfehler. Bei ±0,2 s Ableseungenauigkeit und 8 Perioden: Fehler pro Periode nur ±0,025 s.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Zeige, dass die Schaukel als Fadenpendel mit \\(L = 1{,}0\\,\\text{m}\\) beschrieben werden kann.',
          hint: '\\(T = 2\\pi\\sqrt{L/g}\\)',
          solution: '\\[T_{\\text{theo}} = 2\\pi\\sqrt{\\frac{1{,}0}{9{,}81}} \\approx 2{,}01\\,\\text{s}\\] Sehr gute Übereinstimmung mit \\(T = 2{,}0\\,\\text{s}\\). \\(\\checkmark\\)',
          deeperExplanation: 'Das Fadenpendel-Modell gilt nur für kleine Winkel (≲5°). Bei größeren Winkeln wird T von der Amplitude abhängig.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Die Amplitude der Auslenkung beträgt \\(\\hat{s} = 0{,}5\\,\\text{m}\\). Berechne die maximale Geschwindigkeit.',
          hint: '\\(v_{\\max} = \\hat{s} \\cdot \\omega_0 = \\hat{s} \\cdot 2\\pi f\\)',
          solution: '\\[v_{\\max} = 0{,}5\\,\\text{m} \\cdot 2\\pi \\cdot 0{,}5\\,\\text{Hz} \\approx 1{,}57\\,\\text{m/s}\\]',
          deeperExplanation: 'Alternativ über Energieerhaltung: \\(\\frac{1}{2}mv_{\\max}^2 = mgh\\) mit \\(h = L(1-\\cos\\varphi)\\).'
        },
        {
          label: 'd)',
          points: 2,
          text: 'Die Amplitude wird verdoppelt. Wie ändert sich die Periodendauer? Begründe.',
          hint: 'Denke an die Isochronie.',
          solution: 'Die Periodendauer ändert sich nicht. Bei der harmonischen Schwingung gilt Isochronie: \\(T = 2\\pi\\sqrt{L/g}\\) ist unabhängig von der Amplitude.',
          deeperExplanation: 'Die Isochronie gilt nur näherungsweise für kleine Winkel. Bei \\(\\hat{s} = 1\\,\\text{m}\\) und \\(L = 1\\,\\text{m}\\) wäre der Winkel 90° – hier versagt das Fadenpendel-Modell.'
        }
      ]
    },
    {
      id: 'schw_2023_1',
      year: 2023,
      title: 'Federpendel mit Smartphone-Sensor',
      pdfImages: ['2023_1_p1.png','2023_1_p2.png'],
      context: 'Ein Smartphone wird an einer Schraubenfeder (\\(k = 5{,}0\\,\\text{N/m}\\)) befestigt und schwingt vertikal. Der Beschleunigungssensor zeichnet \\(a(t) = a_0 \\cdot \\sin(\\omega t)\\) mit \\(a_0 = 0{,}50\\,\\text{m/s}^2\\) und \\(T = 1{,}26\\,\\text{s}\\) auf.',
      subtasks: [
        {
          label: 'a)',
          points: 4,
          text: 'Bestimme aus den Messdaten die Masse des Smartphones.',
          hint: '\\(T = 2\\pi\\sqrt{m/k}\\) nach m umformen.',
          solution: '\\[m = k \\cdot \\left(\\frac{T}{2\\pi}\\right)^2 = 5{,}0 \\cdot \\left(\\frac{1{,}26}{2\\pi}\\right)^2 \\approx 0{,}201\\,\\text{kg} = 201\\,\\text{g}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Die Auslenkungsamplitude beträgt \\(\\hat{s} = 2{,}0\\,\\text{cm}\\). Berechne die Geschwindigkeit in der Gleichgewichtslage.',
          hint: '\\(v_{\\max} = \\hat{s} \\cdot \\omega = \\hat{s} \\cdot 2\\pi/T\\)',
          solution: '\\[v_{\\max} = 0{,}02\\,\\text{m} \\cdot \\frac{2\\pi}{1{,}26\\,\\text{s}} \\approx 0{,}100\\,\\text{m/s}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Ein Mitschüler behauptet: „In der Gleichgewichtslage muss der Sensor a = 0 messen." Nimm Stellung.',
          hint: 'Wo ist bei harmonischer Schwingung a = 0 und wo ist a maximal?',
          solution: 'Die Behauptung ist richtig – aber aus dem falschen Grund. Bei harmonischer Schwingung gilt \\(a = -\\omega^2 s\\). In der Gleichgewichtslage (\\(s = 0\\)) ist \\(a = 0\\). Dort ist die Geschwindigkeit maximal. An den Umkehrpunkten ist \\(a\\) maximal und \\(v = 0\\).',
          deeperExplanation: 'Bei realen Smartphone-Messungen muss die Erdbeschleunigung g als Offset abgezogen werden, da der Sensor auch die Gewichtskraft registriert.'
        }
      ]
    },
    {
      id: 'schw_2022_1',
      year: 2022,
      title: 'Wagen an Schraubenfeder',
      pdfImages: ['2022_1_p1.png','2022_1_p2.png'],
      context: 'Ein Wagen (\\(m = 300\\,\\text{g}\\)) ist an einer Schraubenfeder (\\(k = 74{,}0\\,\\text{N/m}\\)) befestigt. Ein Ultraschallsensor misst den Abstand als Funktion der Zeit: Sinusförmige Schwingung, Amplitude \\(A \\approx 5\\,\\text{cm}\\), \\(T = 0{,}40\\,\\text{s}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 2,
          text: 'Lies Amplitude und Frequenz der Schwingung aus dem Diagramm ab.',
          hint: 'Amplitude = halbe Schwingungsbreite. \\(f = 1/T\\).',
          solution: '\\(\\hat{s} = 5{,}0\\,\\text{cm}\\), \\(T = 0{,}40\\,\\text{s}\\), \\(f = 2{,}5\\,\\text{Hz}\\)',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Weise nach, dass \\(m = 300\\,\\text{g}\\) mit \\(T = 0{,}40\\,\\text{s}\\) und \\(k = 74{,}0\\,\\text{N/m}\\) verträglich ist.',
          hint: '\\(T = 2\\pi\\sqrt{m/k}\\) nach m auflösen.',
          solution: '\\[m = k\\left(\\frac{T}{2\\pi}\\right)^2 = 74{,}0 \\cdot \\left(\\frac{0{,}40}{2\\pi}\\right)^2 \\approx 0{,}300\\,\\text{kg} \\checkmark\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Berechne \\(v_{\\max}\\) und die kinetische Energie bei Auslenkung \\(s = 3{,}5\\,\\text{cm}\\).',
          hint: '\\(v_{\\max} = 2\\pi f \\hat{s}\\). Für \\(E_{\\text{kin}}\\): Energieerhaltung.',
          solution: '\\[v_{\\max} = 2\\pi \\cdot 2{,}5 \\cdot 0{,}05 \\approx 0{,}785\\,\\text{m/s}\\] \\[E_{\\text{ges}} = \\tfrac{1}{2}k\\hat{s}^2 = 0{,}0925\\,\\text{J}\\] \\[E_{\\text{pot}} = \\tfrac{1}{2}\\cdot74\\cdot0{,}035^2 = 0{,}0453\\,\\text{J}\\] \\[E_{\\text{kin}} = 0{,}0925 - 0{,}0453 \\approx 0{,}047\\,\\text{J}\\]',
          deeperExplanation: 'Die kinetische Energie ist nie negativ. \\(E_{\\text{kin}} + E_{\\text{pot}} = E_{\\text{ges}} = \\text{const}\\).'
        }
      ]
    },
    {
      id: 'schw_2021_1',
      year: 2021,
      title: 'Federschwinger mit Dämpfung',
      pdfImages: ['2021_1_p1.png','2021_1_p2.png'],
      context: 'Ein Massestück (\\(m = 250\\,\\text{g}\\)) hängt an einer Feder (\\(k = 9{,}87\\,\\text{N/m}\\)) und führt eine gedämpfte Schwingung aus. Aus dem \\(s\\)-\\(t\\)-Diagramm liest man ab: \\(T = 1{,}00\\,\\text{s}\\), Anfangsamplitude \\(\\hat{s}_0 = 8{,}0\\,\\text{cm}\\), nach 5 Perioden: \\(\\hat{s}_5 = 5{,}0\\,\\text{cm}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Überprüfe, ob die Periodendauer \\(T = 1{,}00\\,\\text{s}\\) mit den gegebenen Werten für \\(m\\) und \\(k\\) konsistent ist.',
          hint: '\\(T = 2\\pi\\sqrt{m/k}\\)',
          solution: '\\[T = 2\\pi\\sqrt{\\frac{0{,}250}{9{,}87}} = 2\\pi \\cdot 0{,}159 \\approx 1{,}00\\,\\text{s} \\checkmark\\]',
          deeperExplanation: 'Dass \\(k/m = (2\\pi)^2 \\approx 39{,}5\\,\\text{s}^{-2}\\) ergibt \\(T = 1\\,\\text{s}\\), ist kein Zufall – die Werte wurden so gewählt.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne den relativen Energieverlust pro Periode.',
          hint: '\\(E \\propto \\hat{s}^2\\). Berechne \\(E_0\\) und \\(E_5\\), dann \\(\\Delta E / E_0\\).',
          solution: '\\[E_0 = \\tfrac{1}{2}k\\hat{s}_0^2 = \\tfrac{1}{2}\\cdot9{,}87\\cdot0{,}08^2 = 31{,}6\\,\\text{mJ}\\] \\[E_5 = \\tfrac{1}{2}\\cdot9{,}87\\cdot0{,}05^2 = 12{,}3\\,\\text{mJ}\\] Gesamtverlust in 5 Perioden: \\(\\Delta E = 19{,}3\\,\\text{mJ}\\) \\(\\approx 61\\,\\%\\). Pro Periode: \\(\\approx 12\\,\\%\\).',
          deeperExplanation: 'Die Amplitude nimmt exponentiell ab: \\(\\hat{s}(t) = \\hat{s}_0 \\cdot e^{-\\delta t}\\). Daraus folgt für die Energie: \\(E(t) \\propto e^{-2\\delta t}\\).'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Erkläre den Unterschied zwischen ungedämpfter und gedämpfter Schwingung bezüglich Amplitude und Periodendauer.',
          hint: 'Was ändert sich bei Dämpfung – was nicht (näherungsweise)?',
          solution: 'Bei gedämpfter Schwingung nimmt die Amplitude mit der Zeit ab (Energie wird in Wärme umgewandelt). Die Periodendauer bleibt bei schwacher Dämpfung nahezu konstant (\\(T \\approx T_0\\)). Starke Dämpfung erhöht \\(T\\) etwas; bei Kriechfall findet keine Schwingung mehr statt.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'schw_2020_1',
      year: 2020,
      title: 'Fadenpendel im Physiksaal',
      pdfImages: ['2020_1_p1.png','2020_1_p2.png'],
      context: 'Im Physiksaal wird ein Fadenpendel (Fadenlänge \\(L = 64{,}0\\,\\text{cm}\\), Masse \\(m = 200\\,\\text{g}\\)) untersucht. Ein Schüler misst die Zeit für 20 Schwingungen: \\(t_{20} = 32{,}0\\,\\text{s}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Bestimme die Periodendauer \\(T\\) aus der Messung und vergleiche mit dem theoretischen Wert.',
          hint: '\\(T = 2\\pi\\sqrt{L/g}\\)',
          solution: '\\[T_{\\text{exp}} = \\frac{32{,}0\\,\\text{s}}{20} = 1{,}60\\,\\text{s}\\] \\[T_{\\text{theo}} = 2\\pi\\sqrt{\\frac{0{,}640}{9{,}81}} \\approx 1{,}604\\,\\text{s}\\] Sehr gute Übereinstimmung. \\(\\checkmark\\)',
          deeperExplanation: 'Durch Messen von 20 Perioden statt einer wird der Ablesefehler auf 1/20 reduziert – eine wichtige Messmethode.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne die maximale Geschwindigkeit des Pendelkörpers bei einer Auslenkung von \\(\\hat{s} = 5{,}0\\,\\text{cm}\\).',
          hint: '\\(v_{\\max} = \\hat{s} \\cdot \\omega_0 = \\hat{s} \\cdot 2\\pi/T\\)',
          solution: '\\[v_{\\max} = 0{,}050\\,\\text{m} \\cdot \\frac{2\\pi}{1{,}60\\,\\text{s}} \\approx 0{,}196\\,\\text{m/s}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 4,
          text: 'Welche Fadenlänge \\(L\'\\) wäre nötig, damit das Pendel genau eine Schwingung pro Sekunde macht (\\(T\' = 2{,}00\\,\\text{s}\\))? Wie müsste die Fadenlänge verändert werden?',
          hint: '\\(L = g \\cdot (T/(2\\pi))^2\\)',
          solution: '\\[L\' = g \\cdot \\left(\\frac{T\'}{2\\pi}\\right)^2 = 9{,}81 \\cdot \\left(\\frac{2{,}00}{2\\pi}\\right)^2 \\approx 0{,}993\\,\\text{m}\\] Der Faden müsste von \\(64{,}0\\,\\text{cm}\\) auf \\(99{,}3\\,\\text{cm}\\) verlängert werden (um ca. 35 cm).',
          deeperExplanation: 'Das sogenannte „Sekundenpendel" mit \\(T = 2\\,\\text{s}\\) (also 1 s pro Halbschwingung) hat eine Länge von fast genau 1 m. Es war historisch wichtig für die Definition der Längeneinheit.'
        }
      ]
    },
    {
      id: 'schw_2019_1',
      year: 2019,
      title: 'Stimmgabel und Resonanz',
      pdfImages: ['2019_1_p1.png','2019_1_p2.png'],
      context: 'Eine Stimmgabel schwingt mit \\(f = 440\\,\\text{Hz}\\) (Kammerton A). Wird sie über ein Reagenzglas gehalten, das mit Wasser teilweise gefüllt ist, kann Resonanz entstehen. Die Schallgeschwindigkeit in Luft beträgt \\(c = 340\\,\\text{m/s}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Wellenlänge des Kammerton-A-Klangs in Luft.',
          hint: '\\(\\lambda = c/f\\)',
          solution: '\\[\\lambda = \\frac{c}{f} = \\frac{340\\,\\text{m/s}}{440\\,\\text{Hz}} \\approx 0{,}773\\,\\text{m} = 77{,}3\\,\\text{cm}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Berechne, bei welcher Luftsäulenlänge \\(L\\) im Reagenzglas Resonanz auftritt (offenes Ende oben, geschlossenes Ende unten). Gib die ersten drei Möglichkeiten an.',
          hint: 'Resonanz bei \\(L = (2n-1) \\cdot \\lambda/4\\) für \\(n = 1, 2, 3, \\ldots\\)',
          solution: '\\[L_1 = \\frac{\\lambda}{4} = \\frac{77{,}3}{4} \\approx 19{,}3\\,\\text{cm}\\] \\[L_2 = \\frac{3\\lambda}{4} \\approx 57{,}9\\,\\text{cm}\\] \\[L_3 = \\frac{5\\lambda}{4} \\approx 96{,}5\\,\\text{cm}\\] (Das Reagenzglas ist meist zu kurz für \\(L_3\\).)',
          deeperExplanation: 'Am geschlossenen Ende entsteht ein Schwingungsknoten (kein Auslenkungsbauch), am offenen Ende ein Schwingungsbauch. Daher sind nur ungerade Vielfache von \\(\\lambda/4\\) möglich.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Erkläre, warum Resonanz auftritt und was man dabei hört.',
          hint: 'Stehende Wellen, Eigenschwingung, konstruktive Überlagerung.',
          solution: 'Die Stimmgabel erzeugt eine stehende Schallwelle in der Luftsäule. Bei Resonanz entspricht die Erregerfrequenz einer Eigenfrequenz der Luftsäule. Die reflektierten Wellen überlagern sich konstruktiv → stehende Welle → maximale Amplitude. Man hört eine deutliche Lautstärkezunahme (Resonanzbrummen).',
          deeperExplanation: 'Dieses Experiment lässt sich auch zur Bestimmung der Schallgeschwindigkeit nutzen: Aus der gemessenen Resonanzlänge und der bekannten Frequenz berechnet man \\(c = 4Lf\\).'
        }
      ]
    },
    {
      id: 'schw_2018_1',
      year: 2018,
      title: 'Astronaut in Schwerelosigkeit',
      pdfImages: ['2018_1_p1.png','2018_1_p2.png'],
      context: 'Da in der Schwerelosigkeit keine Waage funktioniert, kann man die Masse eines Astronauten messen, indem man ihn auf einem Sitz mit Federkonstante \\(k = 2540\\,\\text{N/m}\\) schwingen lässt. Das \\(s\\)-\\(t\\)-Diagramm zeigt die Schwingung mit \\(\\hat{s} = 15\\,\\text{cm}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Stelle eine Funktionsgleichung \\(s(t)\\) auf. Die Periodendauer beträgt \\(T = 1{,}2\\,\\text{s}\\).',
          hint: '\\(s(t) = \\hat{s}\\cdot\\sin(\\omega t)\\) mit \\(\\omega = 2\\pi/T\\).',
          solution: '\\[\\omega = \\frac{2\\pi}{1{,}2} \\approx 5{,}24\\,\\text{rad/s}\\] \\[s(t) = 0{,}15\\,\\text{m} \\cdot \\sin(5{,}24 \\cdot t)\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Berechne die Masse des Astronauten samt Sitz.',
          hint: '\\(T = 2\\pi\\sqrt{m/k}\\) nach m auflösen.',
          solution: '\\[m = k \\left(\\frac{T}{2\\pi}\\right)^2 = 2540 \\cdot \\left(\\frac{1{,}2}{2\\pi}\\right)^2 \\approx 92{,}8\\,\\text{kg}\\]',
          deeperExplanation: 'Diese Methode funktioniert im Weltall, weil \\(T = 2\\pi\\sqrt{m/k}\\) unabhängig von g ist.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Vergleiche die maximale Beschleunigung mit \\(g = 9{,}81\\,\\text{m/s}^2\\). Ist die Schwingung für den Astronauten angenehm?',
          hint: '\\(a_{\\max} = \\hat{s} \\cdot \\omega^2\\)',
          solution: '\\[a_{\\max} = 0{,}15 \\cdot (5{,}24)^2 \\approx 4{,}1\\,\\text{m/s}^2 \\approx 0{,}42\\,g\\] Die maximale Beschleunigung beträgt ca. 42% der Erdbeschleunigung – gut verträglich.',
          deeperExplanation: null
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // ELEKTRODYNAMIK
  // ══════════════════════════════════════════════════════
  elektrodynamik: [
    {
      id: 'edyn_2025_1',
      year: 2025,
      title: 'Sicherheitsschalter – Lorentzkraft und Induktion',
      pdfImages: ['2025_1_p1.png','2025_1_p2.png','2025_1_p3.png'],
      context: 'Ein Sicherheitsschalter soll bei zu hoher Stromstärke auslösen. Er verwendet einen Hufeisenmagnet und ein bewegliches Drahtstück. Bei ausreichend hohem Strom hebt die Lorentzkraft das Drahtstück aus dem Stromkreis.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Ein gerader Leiter (\\(\\ell = 8{,}0\\,\\text{cm}\\)) trägt \\(I = 20{,}0\\,\\text{A}\\) senkrecht in \\(B = 0{,}31\\,\\text{T}\\). Berechne die Lorentzkraft.',
          hint: '\\(F = B \\cdot I \\cdot \\ell\\)',
          solution: '\\[F = 0{,}31 \\cdot 20{,}0 \\cdot 0{,}080 = 0{,}496\\,\\text{N} \\approx 0{,}50\\,\\text{N}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Eine Messreihe liefert (Breite \\(a = 8\\,\\text{cm}\\)): \\(I = 5\\,\\text{A} \\to F = 12{,}5\\,\\text{mN}\\); \\(I = 10\\,\\text{A} \\to F = 25{,}1\\,\\text{mN}\\); \\(I = 20\\,\\text{A} \\to F = 49{,}8\\,\\text{mN}\\). Weise \\(F \\propto I\\) nach und bestimme \\(B\\).',
          hint: 'Bilde den Quotienten \\(F/I\\) für alle Messwerte.',
          solution: '\\(F/I\\): 2,50 / 2,51 / 2,49 mN/A – annähernd konstant → \\(F \\propto I\\). \\[B = \\frac{F}{I \\cdot a} = \\frac{2{,}5 \\cdot 10^{-3}}{0{,}08} \\approx 0{,}031\\,\\text{T}\\]',
          deeperExplanation: 'Der Proportionalitätsfaktor \\(k = F/(I\\cdot a)\\) entspricht der magnetischen Flussdichte B.'
        },
        {
          label: 'c)',
          points: 4,
          text: 'Der maximale Strom beträgt \\(I_{\\max} = 60\\,\\text{A}\\) bei \\(U = 230\\,\\text{V}\\). Berechne den Gesamtwiderstand des Kreises.',
          hint: '\\(R = U/I_{\\max}\\)',
          solution: '\\[R_{\\text{ges}} = \\frac{230\\,\\text{V}}{60\\,\\text{A}} \\approx 3{,}8\\,\\Omega\\]',
          deeperExplanation: 'Die Induktivität der Spule verzögert den Stromanstieg und gibt dem Schalter Zeit zum Auslösen – ein wichtiges Sicherheitsprinzip.'
        }
      ]
    },
    {
      id: 'edyn_2024_3',
      year: 2024,
      title: 'Dynamo und Induktionsschleifen',
      pdfImages: ['2024_3_p1.png','2024_3_p2.png','2024_3_p3.png'],
      context: 'Ein Generator besteht aus einem rotierenden Hufeisenmagnet und einer feststehenden Spule (50 Windungen, \\(7{,}0\\,\\text{cm} \\times 9{,}0\\,\\text{cm}\\)). Das \\(U\\)-\\(t\\)-Diagramm zeigt eine Wechselspannung.',
      pdfHint: 'Originaldiagramm: Abi 2024, Aufgabe 3 (U-t-Diagramm)',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Aus dem Diagramm: \\(U_0 = 5{,}0\\,\\text{V}\\), \\(T = 0{,}20\\,\\text{s}\\). Berechne die magnetische Flussdichte \\(B\\).',
          hint: '\\(U_0 = n \\cdot B \\cdot A \\cdot \\omega\\)',
          solution: '\\[A = 0{,}070 \\cdot 0{,}090 = 6{,}3 \\cdot 10^{-3}\\,\\text{m}^2\\] \\[\\omega = 2\\pi/0{,}20 \\approx 31{,}4\\,\\text{rad/s}\\] \\[B = \\frac{5{,}0}{50 \\cdot 6{,}3 \\cdot 10^{-3} \\cdot 31{,}4} \\approx 0{,}051\\,\\text{T}\\]',
          deeperExplanation: 'Die Spannung ist maximal, wenn die Rahmenebene parallel zu den Feldlinien steht – dann ist die Flussänderungsrate maximal.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Erkläre, warum die induzierte Spannung ihr Vorzeichen wechselt.',
          hint: 'Lenz\'sche Regel, Richtung der Flussänderung.',
          solution: '\\(U_{\\text{ind}} = -n \\cdot d\\Phi/dt\\). Nach einer halben Umdrehung hat der Magnet Nord- und Südpol vertauscht – die Richtung der Flussänderung kehrt um → Vorzeichenwechsel.',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Eine Induktionsschleife in der Straße erkennt Fahrzeuge. Erkläre das Messprinzip.',
          hint: 'Eisenmasse verändert den Fluss.',
          solution: 'Die Schleife ist Teil eines Schwingkreises. Das ferromagnetische Material des Fahrzeugs erhöht die Induktivität L → Resonanzfrequenz ändert sich → elektronisch detektierbar.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'edyn_2022_4',
      year: 2022,
      title: 'Transformator und Energieübertragung',
      pdfImages: ['2022_4_p1.png','2022_4_p2.png'],
      context: 'Ein Transformator (Primärwicklung: \\(n_1 = 500\\), Sekundärwicklung: \\(n_2 = 50\\)) wird an \\(U_1 = 230\\,\\text{V}\\) betrieben. Ein Verbraucher mit \\(R = 10\\,\\Omega\\) ist an der Sekundärseite angeschlossen.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Sekundärspannung und den Sekundärstrom (idealer Transformator).',
          hint: '\\(U_2/U_1 = n_2/n_1\\), \\(I_2 = U_2/R\\)',
          solution: '\\[U_2 = U_1 \\cdot \\frac{n_2}{n_1} = 230 \\cdot \\frac{50}{500} = 23{,}0\\,\\text{V}\\] \\[I_2 = \\frac{U_2}{R} = \\frac{23{,}0}{10} = 2{,}3\\,\\text{A}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne den Primärstrom beim idealen Transformator.',
          hint: 'Leistungserhaltung: \\(U_1 I_1 = U_2 I_2\\)',
          solution: '\\[I_1 = \\frac{U_2 I_2}{U_1} = \\frac{23{,}0 \\cdot 2{,}3}{230} = 0{,}23\\,\\text{A}\\] Oder: \\(I_1/I_2 = n_2/n_1 = 1/10\\) → \\(I_1 = 0{,}23\\,\\text{A}\\)',
          deeperExplanation: 'Beim idealen Transformator gilt: Was an Spannung gewonnen wird, geht an Strom verloren – Energie bleibt erhalten.'
        },
        {
          label: 'c)',
          points: 4,
          text: 'In der Praxis beträgt der Wirkungsgrad \\(\\eta = 96\\,\\%\\). Die Zuleitungen zur Sekundärseite haben Widerstand \\(R_L = 0{,}5\\,\\Omega\\). Berechne den Spannungsabfall an den Leitungen und die Spannung am Verbraucher.',
          hint: 'Leitungsstrom \\(I_2 = 2{,}3\\,\\text{A}\\). Spannungsabfall \\(U_L = I_2 \\cdot R_L\\).',
          solution: '\\[U_L = I_2 \\cdot R_L = 2{,}3 \\cdot 0{,}5 = 1{,}15\\,\\text{V}\\] \\[U_V = U_2 - U_L = 23{,}0 - 1{,}15 = 21{,}85\\,\\text{V} \\approx 21{,}9\\,\\text{V}\\] Der Leitungsverlust beträgt ca. 5%. Das zeigt, warum man für die Energieübertragung über weite Strecken hohe Spannungen verwendet: Bei \\(10 \\times\\) höherer Spannung ist der Strom \\(10 \\times\\) kleiner, die Verluste \\((I^2R_L)\\) werden 100× kleiner.',
          deeperExplanation: 'Das ist das Prinzip der Hochspannungsübertragung (Hochspannungsleitungen 110–380 kV). Der Transformator ist eine der wichtigsten technischen Anwendungen der Induktion.'
        }
      ]
    },
    {
      id: 'edyn_2021_3',
      year: 2021,
      title: 'Leiterrahmen im Magnetfeld (Induktion)',
      pdfImages: ['2021_4_p1.png','2021_4_p2.png'],
      context: 'Ein quadratischer Leiterrahmen (\\(a = 5{,}0\\,\\text{cm}\\), 100 Windungen, \\(R = 10\\,\\Omega\\)) wird mit \\(v = 5{,}0\\,\\text{cm/s}\\) durch ein homogenes Magnetfeld \\(B = 2{,}0\\,\\text{T}\\) geschoben.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Skizziere qualitativ den Verlauf von \\(\\Phi(t)\\) für Einfahren – vollständig drin – Ausfahren.',
          hint: 'Im Feld: \\(\\Phi = B \\cdot A_{\\text{drin}}\\). Beim Einfahren steigt A linear.',
          solution: 'Einfahren: \\(\\Phi\\) steigt linear. Vollständig drin: \\(\\Phi = B \\cdot a^2 = \\text{const}\\). Ausfahren: \\(\\Phi\\) nimmt linear ab. Zeitverlauf: Trapezform.',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne die induzierte Spannung und den Induktionsstrom beim Einfahren.',
          hint: '\\(U_{\\text{ind}} = n \\cdot B \\cdot a \\cdot v\\)',
          solution: '\\[U_{\\text{ind}} = 100 \\cdot 2{,}0 \\cdot 0{,}05 \\cdot 0{,}05 = 0{,}50\\,\\text{V}\\] \\[I = 0{,}50/10 = 0{,}050\\,\\text{A} = 50\\,\\text{mA}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 4,
          text: 'Berechne die gesamte mechanische Arbeit.',
          hint: '\\(W = P \\cdot t = U \\cdot I \\cdot t\\). Nur während Einfahren/Ausfahren.',
          solution: '\\(t_1 = a/v = 1{,}0\\,\\text{s}\\). Vollständig drin: keine Kraft, keine Arbeit. \\[W = 2 \\cdot 0{,}50 \\cdot 0{,}05 \\cdot 1{,}0 = 0{,}050\\,\\text{J}\\]',
          deeperExplanation: 'Die mechanische Energie wird vollständig in Wärme im Widerstand umgewandelt (Lenz\'sche Bremskraft).'
        }
      ]
    },
    {
      id: 'edyn_2020_3',
      year: 2020,
      title: 'Induktion im Fahrraddynamo',
      pdfImages: ['2020_3_p1.png','2020_3_p2.png'],
      context: 'Ein Fahrraddynamo besteht aus einem rotierenden Permanentmagneten (\\(B = 0{,}12\\,\\text{T}\\)) und einer Spule (\\(n = 75\\) Windungen, Querschnitt \\(A = 3{,}2\\,\\text{cm}^2\\)). Bei \\(v = 15\\,\\text{km/h}\\) dreht der Magnet mit \\(f = 10\\,\\text{Hz}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die maximale induzierte Spannung des Dynamos.',
          hint: '\\(U_0 = n \\cdot B \\cdot A \\cdot \\omega\\) mit \\(\\omega = 2\\pi f\\)',
          solution: '\\[\\omega = 2\\pi \\cdot 10 \\approx 62{,}8\\,\\text{rad/s}\\] \\[U_0 = 75 \\cdot 0{,}12 \\cdot 3{,}2 \\cdot 10^{-4} \\cdot 62{,}8 \\approx 0{,}180\\,\\text{V}\\]',
          deeperExplanation: 'Beim Dynamo rotiert der Magnet; bei einem Wechselstromgenerator rotiert die Spule. Beide Prinzipien sind äquivalent – entscheidend ist nur die Änderung des Flusses.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Bei welcher Fahrgeschwindigkeit liefert der Dynamo genau \\(U_0 = 6{,}0\\,\\text{V}\\) (Nennspannung der Fahrradlampe)?',
          hint: '\\(U_0 \\propto f \\propto v\\). Nutze den Proportionalitätszusammenhang.',
          solution: '\\[\\frac{U_{0,\\text{neu}}}{U_{0,\\text{alt}}} = \\frac{v_{\\text{neu}}}{v_{\\text{alt}}}\\] \\[v_{\\text{neu}} = 15\\,\\text{km/h} \\cdot \\frac{6{,}0\\,\\text{V}}{0{,}180\\,\\text{V}} = 500\\,\\text{km/h}\\] Das ist unrealistisch – reale Fahrraddynamos haben mehr Windungen oder stärkere Magnete.',
          deeperExplanation: 'Moderne Fahrrad-Nabendynamos haben typisch 28 Pole und deutlich mehr Windungen. Sie liefern schon ab ~5 km/h nutzbare Spannung.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Erkläre, warum das Licht flackert, wenn man sehr langsam fährt.',
          hint: 'Frequenz der Wechselspannung sinkt.',
          solution: 'Bei niedriger Geschwindigkeit ist die Drehfrequenz des Magneten klein → kleine Frequenz der Wechselspannung. Das menschliche Auge nimmt einzelne Helligkeitsmaxima als Flackern wahr, wenn \\(f \\lesssim 15\\,\\text{Hz}\\). Außerdem sinkt die Amplitude \\(U_0\\) mit kleiner werdender Frequenz – die Lampe leuchtet also auch schwächer.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'edyn_2019_3',
      year: 2019,
      title: 'Induktion bei bewegtem Leiter',
      pdfImages: ['2019_3_p1.png','2019_3_p2.png'],
      context: 'Ein Aluminiumstab (\\(\\ell = 40\\,\\text{cm}\\)) bewegt sich mit \\(v = 2{,}0\\,\\text{m/s}\\) senkrecht zu einem homogenen Magnetfeld \\(B = 0{,}35\\,\\text{T}\\). Die Enden des Stabs sind über einen Widerstand \\(R = 0{,}20\\,\\Omega\\) verbunden.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die im Stab induzierte Spannung.',
          hint: '\\(U_{\\text{ind}} = B \\cdot \\ell \\cdot v\\)',
          solution: '\\[U_{\\text{ind}} = 0{,}35 \\cdot 0{,}40 \\cdot 2{,}0 = 0{,}28\\,\\text{V}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne den Strom und die Kraft, die auf den Stab wirkt (Lenz\'sche Bremskraft).',
          hint: '\\(I = U/R\\), \\(F = BIl\\)',
          solution: '\\[I = \\frac{0{,}28\\,\\text{V}}{0{,}20\\,\\Omega} = 1{,}4\\,\\text{A}\\] \\[F = B \\cdot I \\cdot \\ell = 0{,}35 \\cdot 1{,}4 \\cdot 0{,}40 = 0{,}196\\,\\text{N} \\approx 0{,}20\\,\\text{N}\\]',
          deeperExplanation: 'Diese Bremskraft wirkt der Bewegung entgegen (Lenz\'sche Regel) – sie hält den Stab aufrecht nicht mit konstanter Geschwindigkeit, wenn keine externe Kraft angreift.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Berechne die im Widerstand umgesetzte Leistung und vergleiche sie mit der mechanischen Antriebsleistung.',
          hint: '\\(P_{\\text{el}} = U \\cdot I\\), \\(P_{\\text{mech}} = F \\cdot v\\)',
          solution: '\\[P_{\\text{el}} = 0{,}28 \\cdot 1{,}4 = 0{,}392\\,\\text{W}\\] \\[P_{\\text{mech}} = F \\cdot v = 0{,}196 \\cdot 2{,}0 = 0{,}392\\,\\text{W}\\] Beide Leistungen sind gleich – Energieerhaltung! Die gesamte mechanische Leistung wird in elektrische Energie umgewandelt.',
          deeperExplanation: 'Dies ist das Grundprinzip des elektrischen Generators: Mechanische Arbeit wird vollständig (beim idealen Generator ohne Reibung) in elektrische Energie umgewandelt.'
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // WELLENOPTIK
  // ══════════════════════════════════════════════════════
  wellenoptik: [
    {
      id: 'wopt_2024_2',
      year: 2024,
      title: 'Einzelspalt – Faserdicke messen',
      pdfImages: ['2024_2_p1.png','2024_2_p2.png','2024_2_p3.png'],
      context: 'Mit einem Laser (\\(\\lambda = 635\\,\\text{nm}\\)) und einem Einzelspalt kann man die Dicke dünner Fasern bestimmen (Babinet-Prinzip). Schirmabstand: \\(L = 1{,}0\\,\\text{m}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Erkläre, warum beim Einzelspalt (Breite b) das erste Minimum bei \\(b \\cdot \\sin\\vartheta = \\lambda\\) auftritt.',
          hint: 'Teile den Spalt gedanklich in zwei Hälften.',
          solution: 'Jedes Wellenpaar aus oberer und unterer Spalthälfte hat Gangunterschied \\(\\lambda/2\\) → destruktive Interferenz. Das tritt auf, wenn \\(b \\cdot \\sin\\vartheta = \\lambda\\).',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Ein Menschenhaar (\\(D = 0{,}070\\,\\text{mm}\\)) wird vor den Laser gehalten. Berechne den Abstand \\(H\\) der ersten Minima.',
          hint: '\\(H = 2\\lambda L / D\\)',
          solution: '\\[H = \\frac{2 \\cdot 635 \\cdot 10^{-9} \\cdot 1{,}0}{0{,}070 \\cdot 10^{-3}} \\approx 0{,}018\\,\\text{m} = 1{,}8\\,\\text{cm}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Das Gerät misst Faserdicken \\(0{,}010\\,\\text{mm}\\) bis \\(0{,}12\\,\\text{mm}\\). Ist ein Tierhaar mit \\(D = 0{,}020\\,\\text{mm}\\) messbar?',
          hint: 'Liegt 0,020 mm im Bereich?',
          solution: '\\(0{,}020\\,\\text{mm}\\) liegt im Bereich \\([0{,}010;\\,0{,}12]\\,\\text{mm}\\). Probe: \\(H = 2{,}0 \\cdot 10^{-4}/0{,}020 \\cdot 10^{-3} = 10\\,\\text{cm}\\) – gut messbar. \\(\\checkmark\\)',
          deeperExplanation: 'Für sehr dünne Fasern wird H groß und passt ggf. nicht auf den Schirm. Für sehr dicke Fasern wird H zu klein zum Messen.'
        }
      ]
    },
    {
      id: 'wopt_2023_2',
      year: 2023,
      title: 'Stehende Wellen auf dem Wellenträger',
      pdfImages: ['2023_2_p1.png','2023_2_p2.png'],
      context: 'Auf einem Wellenträger (\\(L = 100\\,\\text{cm}\\)) entstehen stehende Wellen. Erregerfrequenz \\(f = 0{,}40\\,\\text{Hz}\\), \\(v = 0{,}16\\,\\text{m/s}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Wellenlänge und weise nach, dass eine stehende Welle entsteht.',
          hint: '\\(\\lambda = v/f\\). Prüfe, ob L ein ganzzahliges Vielfaches von \\(\\lambda/2\\) enthält.',
          solution: '\\[\\lambda = 0{,}16/0{,}40 = 0{,}40\\,\\text{m} = 40\\,\\text{cm}\\] \\[L/(\\lambda/2) = 100/20 = 5 \\in \\mathbb{N} \\checkmark\\] → 5. Eigenfrequenz.',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'An welchen Stellen befinden sich Schwingungsknoten? (\\(x = 0\\) bis \\(x = 100\\,\\text{cm}\\))',
          hint: 'Knoten im Abstand \\(\\lambda/2 = 20\\,\\text{cm}\\)',
          solution: 'Knoten bei: \\(x = 0,\\;20,\\;40,\\;60,\\;80,\\;100\\,\\text{cm}\\).',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'wopt_2022_3',
      year: 2022,
      title: 'Interferenz am Doppelspalt (Wellenwanne)',
      pdfImages: ['2022_2_p1.png','2022_2_p2.png'],
      context: 'Zwei Stifte \\(E_1\\), \\(E_2\\) (Abstand \\(a = 3{,}0\\,\\text{cm}\\)) erzeugen kohärente Wellen mit \\(c = 20{,}0\\,\\text{cm/s}\\). Punkt P: \\(r_1 = 3{,}7\\,\\text{cm}\\), \\(r_2 = 3{,}2\\,\\text{cm}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Erkläre, warum es dauerhaft ruhende Punkte im Wellenmuster gibt.',
          hint: 'Bedingung für destruktive Interferenz bei kohärenten Quellen.',
          solution: 'An Punkten mit Gangunterschied \\(\\Delta s = (m+\\frac{1}{2})\\lambda\\) überlagern sich Berg und Tal dauerhaft → Auslöschung. Da die Quellen kohärent sind, bleibt diese Bedingung permanent erfüllt.',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Bestimme die Wellenlänge. Punkt P ist ein Ruhebereich.',
          hint: '\\(\\Delta s = \\lambda/2\\) für das 1. Minimum.',
          solution: '\\[\\Delta s = 3{,}7 - 3{,}2 = 0{,}5\\,\\text{cm} = \\frac{\\lambda}{2}\\] \\[\\lambda = 1{,}0\\,\\text{cm}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Berechne die Frequenz.',
          hint: '\\(f = c/\\lambda\\)',
          solution: '\\[f = 20{,}0/1{,}0 = 20{,}0\\,\\text{Hz}\\]',
          deeperExplanation: null
        },
        {
          label: 'd)',
          points: 3,
          text: 'Welche minimale Frequenz ist nötig, damit es auf der Verbindungslinie \\(E_1E_2\\) keine Ruhebereiche gibt?',
          hint: 'Kein Ruhebereich wenn \\(\\Delta s_{\\max} = a < \\lambda/2\\).',
          solution: '\\[\\lambda > 2a = 6{,}0\\,\\text{cm}\\] \\[f_{\\min} = c/\\lambda_{\\max} = 20{,}0/6{,}0 \\approx 3{,}3\\,\\text{Hz}\\]',
          deeperExplanation: 'Unterhalb dieser Frequenz ist \\(\\lambda > 2a\\) – der maximale Gangunterschied reicht nicht für destruktive Interferenz.'
        }
      ]
    },
    {
      id: 'wopt_2021_2',
      year: 2021,
      title: 'Gitterspektrum – Wellenlänge von Natriumlicht',
      pdfImages: ['2021_2_p1.png','2021_2_p2.png'],
      context: 'Ein optisches Gitter (600 Linien/mm) wird mit Natriumlicht beleuchtet. Auf einem Schirm im Abstand \\(L = 1{,}20\\,\\text{m}\\) werden die Maxima gemessen. Das 1. Maximum liegt im Abstand \\(y_1 = 53{,}2\\,\\text{cm}\\) vom Zentralmaximum.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Gitterkonstante \\(g\\) aus der Linienzahl.',
          hint: 'Gitterkonstante = Kehrwert der Liniendichte.',
          solution: '\\[g = \\frac{1}{600\\,\\text{mm}^{-1}} = \\frac{1}{600} \\cdot 10^{-3}\\,\\text{m} \\approx 1{,}667 \\cdot 10^{-6}\\,\\text{m} = 1{,}667\\,\\mu\\text{m}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Bestimme die Wellenlänge des Natriumlichts aus den Messdaten.',
          hint: '\\(\\tan\\vartheta_1 = y_1/L\\), dann \\(\\lambda = g \\sin\\vartheta_1\\)',
          solution: '\\[\\tan\\vartheta_1 = \\frac{0{,}532}{1{,}20} = 0{,}4433 \\implies \\vartheta_1 \\approx 23{,}9°\\] \\[\\lambda = g \\sin\\vartheta_1 = 1{,}667 \\cdot 10^{-6} \\cdot \\sin(23{,}9°) \\approx 675 \\cdot 10^{-9}\\,\\text{m}\\]',
          deeperExplanation: 'Das Natriumspektrum zeigt zwei eng beieinander liegende Linien (Natrium-D-Linie bei 589 nm). Hier wurde abweichend \\(\\approx 675\\,\\text{nm}\\) gemessen – wäre rotes Licht.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Das 2. Maximum liegt bei \\(y_2 = 1{,}28\\,\\text{m}\\). Prüfe Konsistenz mit \\(\\lambda\\).',
          hint: '\\(\\sin\\vartheta_2 = 2\\lambda/g\\)',
          solution: '\\[\\sin\\vartheta_2 = \\frac{2\\lambda}{g} = \\frac{2 \\cdot 675 \\cdot 10^{-9}}{1{,}667 \\cdot 10^{-6}} = 0{,}810\\] \\[\\vartheta_2 \\approx 54{,}1°\\] \\[y_2^{\\text{erw}} = L \\tan\\vartheta_2 = 1{,}20 \\cdot \\tan(54{,}1°) \\approx 1{,}66\\,\\text{m}\\] Abweichung von gemessenen 1,28 m – Modellkontrolle sinnvoll.',
          deeperExplanation: 'Bei großen Winkeln muss man den exakten \\(\\tan\\vartheta\\) verwenden, nicht die Kleinwinkelnäherung \\(y = m\\lambda L/g\\).'
        }
      ]
    },
    {
      id: 'wopt_2020_2',
      year: 2020,
      title: 'Doppelspalt – Wellenlänge und Kohärenz',
      pdfImages: ['2020_2_p1.png','2020_2_p2.png'],
      context: 'Ein Doppelspalt (Spaltabstand \\(g = 0{,}50\\,\\text{mm}\\)) wird mit monochromatischem Licht beleuchtet. Auf einem Schirm im Abstand \\(L = 2{,}00\\,\\text{m}\\) misst man: Abstand von 5 Maxima \\(\\Delta y_{5} = 8{,}8\\,\\text{mm}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 4,
          text: 'Berechne die Wellenlänge des Lichts.',
          hint: 'Abstand aufeinanderfolgender Maxima: \\(\\Delta y = \\lambda L/g\\)',
          solution: '\\[\\Delta y = \\frac{8{,}8\\,\\text{mm}}{5} = 1{,}76\\,\\text{mm}\\] \\[\\lambda = \\frac{\\Delta y \\cdot g}{L} = \\frac{1{,}76 \\cdot 10^{-3} \\cdot 0{,}50 \\cdot 10^{-3}}{2{,}00} = 440\\,\\text{nm}\\] Blaues Licht.',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Beschreibe, wie sich das Muster ändert, wenn der Spaltabstand g verdoppelt wird.',
          hint: '\\(\\Delta y = \\lambda L / g\\)',
          solution: 'Der Abstand zwischen den Maxima halbiert sich: \\(\\Delta y\' = \\lambda L/(2g) = \\Delta y/2 = 0{,}88\\,\\text{mm}\\). Das Muster wird feiner (engere Streifen).',
          deeperExplanation: 'Größerer Spaltabstand → schärferes Muster. Das entspricht der Analogie: Je weiter die Quellen, desto enger die Interferenzstreifen.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Was beobachtet man, wenn weißes Licht statt monochromatischem Licht verwendet wird?',
          hint: 'Jede Wellenlänge erzeugt ein eigenes Muster mit anderen Maxima-Positionen.',
          solution: 'Das Zentralmaximum (m=0) bleibt weiß, da alle Wellenlängen hier überlagern. Die höheren Ordnungen werden regenbogenartig aufgefächert: Violett (kürzere λ, kleinerer Winkel) innen, Rot (längere λ, größerer Winkel) außen. Dies wird als <strong>Interferenzfarben</strong> bezeichnet.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'wopt_2019_2',
      year: 2019,
      title: 'Beugung am Einzelspalt – Laserlicht',
      pdfImages: ['2019_2_p1.png','2019_2_p2.png'],
      context: 'Ein Laserstrahl (\\(\\lambda = 532\\,\\text{nm}\\)) trifft auf einen Einzelspalt der Breite \\(b\\). Auf einem Schirm (\\(L = 1{,}50\\,\\text{m}\\)) misst man die Breite des zentralen Maximums: \\(\\Delta y = 3{,}20\\,\\text{cm}\\) (Abstand der ersten Minima beiderseits).',
      subtasks: [
        {
          label: 'a)',
          points: 4,
          text: 'Berechne die Spaltbreite \\(b\\).',
          hint: '\\(\\Delta y = 2\\lambda L / b\\) → nach b auflösen.',
          solution: '\\[b = \\frac{2\\lambda L}{\\Delta y} = \\frac{2 \\cdot 532 \\cdot 10^{-9} \\cdot 1{,}50}{3{,}20 \\cdot 10^{-2}} \\approx 4{,}99 \\cdot 10^{-5}\\,\\text{m} \\approx 50{,}0\\,\\mu\\text{m}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Der Spalt wird auf \\(b\' = 2b\\) verbreitert. Wie ändert sich das zentrale Maximum?',
          hint: '\\(\\Delta y \\propto 1/b\\)',
          solution: '\\[\\Delta y\' = \\frac{2\\lambda L}{2b} = \\frac{\\Delta y}{2} = 1{,}60\\,\\text{cm}\\] Das zentrale Maximum wird halb so breit (stärkere Bündelung, schwächere Beugung).',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Erkläre mit dem Huygensschen Prinzip, warum Beugung an einem schmalen Spalt auftritt.',
          hint: 'Jeder Punkt des Spalts ist Ausgangspunkt einer Kugelwelle.',
          solution: 'Nach dem Huygensschen Prinzip ist jeder Punkt der Wellenfront im Spalt Ausgangspunkt einer Elementarwelle (Kugelwelle). Diese breiten sich in alle Richtungen aus. Die Überlagerung der Elementarwellen ergibt das Beugungsmuster: Unter großen Winkeln überlagern sich die Wellen konstruktiv oder destruktiv → helles Zentrum, dunkle Minima.',
          deeperExplanation: 'Bei sehr breiten Spalten (b >> λ) ist die Beugung kaum sichtbar – dann verhält sich das Licht fast geometrisch-optisch.'
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // LC-SCHWINGKREIS
  // ══════════════════════════════════════════════════════
  lc_kreis: [
    {
      id: 'lc_2024_2',
      year: 2024,
      title: 'LC-Schwingkreis – Kondensator und Spule',
      pdfImages: ['2024_2_p1.png','2024_2_p2.png','2024_2_p3.png'],
      context: 'Ein LC-Schwingkreis (\\(C = 40\\,\\mu\\text{F}\\)) zeigt eine gedämpfte Schwingung. Aus dem Diagramm: \\(T \\approx 1{,}59\\,\\text{s}\\), \\(U_0 = 25{,}0\\,\\text{V}\\), nach 2 Perioden: \\(U_2 \\approx 20{,}0\\,\\text{V}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 4,
          text: 'Berechne die Induktivität der Spule.',
          hint: '\\(T = 2\\pi\\sqrt{LC}\\) nach L umformen.',
          solution: '\\[L = \\frac{T^2}{4\\pi^2 C} = \\frac{(1{,}59)^2}{4\\pi^2 \\cdot 40 \\cdot 10^{-6}} \\approx 1600\\,\\text{H}\\]',
          deeperExplanation: 'Eine Induktivität von 1600 H ist für Schulversuche ungewöhnlich groß – ermöglicht gut beobachtbare Perioden von ~1,5 s.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne die anfangs gespeicherte Energie und die Energie nach 2 Perioden. Wie viel wurde in Wärme umgewandelt?',
          hint: '\\(E = \\frac{1}{2}CU^2\\)',
          solution: '\\[E_0 = \\tfrac{1}{2} \\cdot 40 \\cdot 10^{-6} \\cdot 25^2 = 12{,}5\\,\\text{mJ}\\] \\[E_2 = \\tfrac{1}{2} \\cdot 40 \\cdot 10^{-6} \\cdot 20^2 = 8{,}0\\,\\text{mJ}\\] \\[\\Delta E = 4{,}5\\,\\text{mJ}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Die Kapazität wird auf \\(C\' = 4C\\) erhöht. Wie ändert sich die Frequenz?',
          hint: '\\(f \\propto 1/\\sqrt{C}\\)',
          solution: '\\[f\' = f \\cdot \\frac{1}{\\sqrt{4}} = \\frac{f}{2}\\] Die Frequenz halbiert sich.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'lc_2023_4',
      year: 2023,
      title: 'LC-Schwingkreis – Energieanalyse',
      pdfImages: ['2023_4_p1.png','2023_4_p2.png'],
      context: 'Ein ungedämpfter LC-Kreis (\\(L = 0{,}20\\,\\text{H}\\), \\(C = 50\\,\\mu\\text{F}\\)) wird mit \\(U_0 = 10\\,\\text{V}\\) gestartet.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Eigenfrequenz.',
          hint: '\\(f_0 = 1/(2\\pi\\sqrt{LC})\\)',
          solution: '\\[f_0 = \\frac{1}{2\\pi\\sqrt{0{,}20 \\cdot 50 \\cdot 10^{-6}}} \\approx 50{,}3\\,\\text{Hz}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Berechne die maximale Stromstärke.',
          hint: '\\(\\frac{1}{2}CU_0^2 = \\frac{1}{2}LI_0^2\\)',
          solution: '\\[I_0 = U_0\\sqrt{\\frac{C}{L}} = 10 \\cdot \\sqrt{\\frac{50 \\cdot 10^{-6}}{0{,}20}} \\approx 0{,}158\\,\\text{A}\\]',
          deeperExplanation: null
        },
        {
          label: 'c)',
          points: 3,
          text: 'Erläutere den Energietransfer zwischen Kondensator und Spule. Vergleiche mit der mechanischen Schwingung.',
          hint: 'Wann ist welche Energieform maximal?',
          solution: 'Start: alle Energie elektrisch im Kondensator (\\(E_{\\text{el}} = \\frac{1}{2}CU_0^2\\)). Beim Entladen nimmt \\(E_{\\text{el}}\\) ab, magnetische Energie \\(E_{\\text{mag}} = \\frac{1}{2}LI^2\\) nimmt zu. Bei \\(U_C = 0\\): \\(I = I_0\\) maximal. Dann Umladung – vollständige Analogie zum Federpendel (\\(E_{\\text{el}} \\leftrightarrow E_{\\text{pot}}\\), \\(E_{\\text{mag}} \\leftrightarrow E_{\\text{kin}}\\)).',
          deeperExplanation: null
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // ELEKTRISCHE UND MAGNETISCHE FELDER
  // ══════════════════════════════════════════════════════
  felder: [
    {
      id: 'feld_2023_3',
      year: 2023,
      title: 'Geladene Kugel im Plattenkondensator',
      pdfImages: ['2023_3_p1.png','2023_3_p2.png'],
      context: 'Eine geladene Kugel hängt an einem Faden zwischen den Platten eines Kondensators (40 cm × 40 cm, \\(d = 12\\,\\text{cm}\\)). Bei \\(U = 9{,}0\\,\\text{kV}\\): \\(F = 1{,}7\\,\\text{mN}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Feldstärke und die Ladung der Kugel.',
          hint: '\\(E = U/d\\), \\(F = q \\cdot E\\)',
          solution: '\\[E = 9000/0{,}12 = 75{.}000\\,\\text{V/m}\\] \\[q = F/E = 1{,}7 \\cdot 10^{-3}/75{.}000 \\approx 22{,}7\\,\\text{nC}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Ermittle aus den Messwerten, dass \\(F \\propto U\\) gilt.',
          hint: 'Bilde den Quotienten F/U für alle Messwerte.',
          solution: '\\(F/U = q/d = \\text{const} \\approx 1{,}89 \\cdot 10^{-7}\\,\\text{N/V}\\) → \\(F \\propto U \\checkmark\\)',
          deeperExplanation: '\\(F = qE = q \\cdot U/d\\). Da q und d konstant: \\(F \\propto U\\).'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Plattenabstand wird auf \\(d\' = 6\\,\\text{cm}\\) halbiert. Wie ändern sich Feldstärke und Kraft?',
          hint: '\\(E = U/d\\) – was passiert bei halbiertem d?',
          solution: '\\(E\' = U/d\' = 150{.}000\\,\\text{V/m} = 2E\\). Kraft verdoppelt sich: \\(F\' = 3{,}4\\,\\text{mN}\\).',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'feld_2022_3',
      year: 2022,
      title: 'Massenspektrometer – Sauerstoff-Ionen',
      pdfImages: ['2022_3_p1.png','2022_3_p2.png'],
      context: 'Sauerstoff-Ionen (\\(^{16}\\text{O}^+\\)) mit \\(v = 1{,}9 \\cdot 10^5\\,\\text{m/s}\\) in homogenem Magnetfeld. Messwerte: \\(B = 0{,}20\\,\\text{T} \\to d = 32{,}0\\,\\text{cm}\\); \\(B = 0{,}24\\,\\text{T} \\to d = 25{,}8\\,\\text{cm}\\); \\(B = 0{,}35\\,\\text{T} \\to d = 18{,}2\\,\\text{cm}\\); \\(B = 0{,}50\\,\\text{T} \\to d = 12{,}5\\,\\text{cm}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Weise nach, dass \\(B \\propto 1/d\\) gilt.',
          hint: 'Bilde das Produkt \\(B \\cdot d\\).',
          solution: '\\(B \\cdot d\\): 6,4 / 6,2 / 6,4 / 6,25 – annähernd konstant ≈ 6,3 → \\(B \\propto 1/d \\checkmark\\)',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Berechne die Masse eines \\(^{16}\\text{O}^+\\)-Ions (\\(e = 1{,}6 \\cdot 10^{-19}\\,\\text{C}\\)). Vergleiche mit Literaturwert.',
          hint: '\\(m = qBd/(2v)\\)',
          solution: '\\[m = \\frac{e \\cdot (Bd)}{2v} = \\frac{1{,}6 \\cdot 10^{-19} \\cdot 6{,}3 \\cdot 10^{-2}}{2 \\cdot 1{,}9 \\cdot 10^5} \\approx 2{,}65 \\cdot 10^{-26}\\,\\text{kg}\\] Literaturwert: \\(2{,}66 \\cdot 10^{-26}\\,\\text{kg} \\checkmark\\)',
          deeperExplanation: 'Das Massenspektrometer trennt Isotope: Gleiche Ladung, verschiedene Massen → verschiedene Kreisradien.'
        }
      ]
    },
    {
      id: 'feld_2021_3',
      year: 2021,
      title: 'Elektronenablenkung im Plattenkondensator',
      pdfImages: ['2021_3_p1.png','2021_3_p2.png','2021_3_p3.png'],
      context: 'Elektronen werden durch eine Spannung \\(U_B = 3{,}0\\,\\text{kV}\\) beschleunigt und treten in einen Plattenkondensator (Länge \\(L = 8{,}0\\,\\text{cm}\\), Plattenabstand \\(d = 2{,}0\\,\\text{cm}\\)) ein. An den Platten liegt \\(U_P = 400\\,\\text{V}\\). Elektronenmasse \\(m_e = 9{,}11 \\cdot 10^{-31}\\,\\text{kg}\\), \\(e = 1{,}6 \\cdot 10^{-19}\\,\\text{C}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Einschussgeschwindigkeit der Elektronen nach dem Durchlaufen der Beschleunigungsspannung.',
          hint: '\\(eU_B = \\frac{1}{2}m_e v^2\\)',
          solution: '\\[v = \\sqrt{\\frac{2eU_B}{m_e}} = \\sqrt{\\frac{2 \\cdot 1{,}6 \\cdot 10^{-19} \\cdot 3000}{9{,}11 \\cdot 10^{-31}}} \\approx 3{,}25 \\cdot 10^7\\,\\text{m/s}\\]',
          deeperExplanation: 'Das sind ca. 10% der Lichtgeschwindigkeit – relativistische Effekte spielen noch kaum eine Rolle.'
        },
        {
          label: 'b)',
          points: 4,
          text: 'Berechne die Ablenkung \\(y\\) des Elektrons am Ende des Kondensators.',
          hint: '\\(y = \\frac{1}{2}at^2\\) mit \\(a = eE/m_e\\) und \\(t = L/v\\).',
          solution: '\\[E_P = U_P/d = 400/0{,}020 = 20{.}000\\,\\text{V/m}\\] \\[a = eE_P/m_e = 1{,}6 \\cdot 10^{-19} \\cdot 20{.}000 / 9{,}11 \\cdot 10^{-31} \\approx 3{,}51 \\cdot 10^{15}\\,\\text{m/s}^2\\] \\[t = L/v = 0{,}080/3{,}25 \\cdot 10^7 \\approx 2{,}46 \\cdot 10^{-9}\\,\\text{s}\\] \\[y = \\tfrac{1}{2} \\cdot 3{,}51 \\cdot 10^{15} \\cdot (2{,}46 \\cdot 10^{-9})^2 \\approx 1{,}06 \\cdot 10^{-2}\\,\\text{m} \\approx 1{,}1\\,\\text{cm}\\]',
          deeperExplanation: 'Die Bewegung ist eine Parabel: konstante Geschwindigkeit in x-Richtung, gleichmäßig beschleunigte Bewegung in y-Richtung – analog zum schiefen Wurf.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Prüfe, ob das Elektron den Kondensator verlässt, ohne die Platten zu treffen.',
          hint: 'Vergleiche die Ablenkung y mit dem halben Plattenabstand d/2.',
          solution: '\\(y \\approx 1{,}1\\,\\text{cm} < d/2 = 1{,}0\\,\\text{cm}\\) – das Elektron trifft knapp die untere Platte! Bei diesem Randfall müsste die Ablenkspannung leicht reduziert werden.',
          deeperExplanation: 'In der Praxis nutzt man dieses Prinzip in Kathodenstrahlröhren (Bildröhren) zur Ablenkung des Elektronenstrahls.'
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // QUANTENPHYSIK
  // ══════════════════════════════════════════════════════
  quantenphysik: [
    {
      id: 'quant_2025_rest',
      year: 2025,
      title: 'Restlichtverstärker – Photoeffekt an der Fotozelle',
      context: 'Ein Restlichtverstärker (Nachtsichtgerät) nutzt den Photoeffekt. Fotokathode mit Austrittsarbeit \\(W_A = 2{,}25\\,\\text{eV}\\). Filter A: \\(\\lambda = 633\\,\\text{nm}\\) wird absorbiert; Filter B: \\(\\lambda = 633\\,\\text{nm}\\) wird transmittiert.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Energie eines Photons mit \\(\\lambda = 633\\,\\text{nm}\\) in eV.',
          hint: '\\(E = hc/\\lambda\\)',
          solution: '\\[E = \\frac{6{,}63 \\cdot 10^{-34} \\cdot 3{,}0 \\cdot 10^8}{633 \\cdot 10^{-9}} \\approx 3{,}14 \\cdot 10^{-19}\\,\\text{J} \\approx 1{,}96\\,\\text{eV}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Kann mit \\(\\lambda = 633\\,\\text{nm}\\) ein Photoeffekt ausgelöst werden?',
          hint: 'Vergleiche \\(E_{\\text{Ph}}\\) mit \\(W_A\\).',
          solution: '\\(E_{\\text{Ph}} \\approx 1{,}96\\,\\text{eV} < W_A = 2{,}25\\,\\text{eV}\\). Nein – die Photonenenergie reicht nicht aus. Auch hohe Intensität hilft nicht (jedes Photon wirkt einzeln).',
          deeperExplanation: 'Dies widerspricht der klassischen Wellentheorie, die bei hoher Intensität immer einen Photoeffekt vorhersagen würde.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Welcher Filter ist für den Restlichtverstärker besser geeignet?',
          hint: '\\(\\lambda_{\\max} = hc/W_A\\)',
          solution: '\\(\\lambda_{\\max} = hc/W_A \\approx 552\\,\\text{nm}\\). Nur Licht mit \\(\\lambda < 552\\,\\text{nm}\\) löst Photoeffekt aus. Filter A (sperrt 633-nm-Licht) ist besser, wenn er kurzwelliges Licht durchlässt.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'quant_2018_3',
      year: 2018,
      title: 'Stehende Wellen und Photoeffekt',
      pdfImages: ['2018_3_p1.png','2018_3_p2.png'],
      context: 'Ein Photon der Energie \\(E = 5{,}0\\,\\text{eV}\\) trifft auf eine Metalloberfläche mit Austrittsarbeit \\(W_A = 3{,}2\\,\\text{eV}\\).',
      subtasks: [
        {
          label: 'f)',
          points: 3,
          text: 'Berechne die maximale kinetische Energie der emittierten Elektronen und die nötige Gegenspannung.',
          hint: '\\(E_{\\text{kin}} = E_{\\text{Ph}} - W_A\\), \\(eU_G = E_{\\text{kin}}\\)',
          solution: '\\[E_{\\text{kin}} = 5{,}0 - 3{,}2 = 1{,}8\\,\\text{eV} = 2{,}88 \\cdot 10^{-19}\\,\\text{J}\\] \\[U_G = E_{\\text{kin}}/e = 1{,}8\\,\\text{V}\\]',
          deeperExplanation: 'Die Gegenspannung entspricht zahlenmäßig der kinetischen Energie in eV. Das ist die Definition des Elektronenvolts.'
        }
      ]
    }
  ],

  // ══════════════════════════════════════════════════════
  // WELLEN ALLGEMEIN
  // ══════════════════════════════════════════════════════
  wellen: [
    {
      id: 'well_2025_3',
      year: 2025,
      title: 'Abstandsradar – Laufzeitverfahren',
      pdfImages: ['2025_3_p1.png','2025_3_p2.png','2025_3_p3.png'],
      context: 'Ein Abstandsradarsystem im Auto sendet Radarimpulse (Ausbreitungsgeschwindigkeit \\(c = 3{,}0 \\cdot 10^8\\,\\text{m/s}\\)). Das System misst die Laufzeit bis zum Echo. Gemessene Laufzeit: \\(\\Delta t = 1{,}5 \\cdot 10^{-7}\\,\\text{s}\\). Ein zweites Fahrzeug fährt mit \\(v = 30\\,\\text{m/s}\\) auf das sendende Fahrzeug zu.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne den Abstand des Hindernisses.',
          hint: 'Das Signal legt die Strecke zum Hindernis zweimal zurück: \\(d = c \\cdot \\Delta t / 2\\).',
          solution: '\\[d = \\frac{c \\cdot \\Delta t}{2} = \\frac{3{,}0 \\cdot 10^8 \\cdot 1{,}5 \\cdot 10^{-7}}{2} = 22{,}5\\,\\text{m}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 4,
          text: 'Das entgegenkommende Fahrzeug (\\(v = 30\\,\\text{m/s}\\)) reflektiert das Radar. Beschreibe qualitativ, wie sich die Laufzeit mit der Zeit ändert.',
          hint: 'Abstand nimmt ab → Laufzeit nimmt ab.',
          solution: 'Da das Fahrzeug nähert, wird der Abstand \\(d(t) = d_0 - v \\cdot t\\) kleiner. Damit nimmt die Laufzeit \\(\\Delta t = 2d/c\\) linear ab. Das System kann aus der Rate \\(d(\\Delta t)/dt\\) die Relativgeschwindigkeit berechnen.',
          deeperExplanation: 'Moderne Radarsysteme nutzen zusätzlich den Doppler-Effekt: Die zurückkehrende Welle hat eine leicht verschobene Frequenz, aus der direkt die Relativgeschwindigkeit bestimmt werden kann.'
        },
        {
          label: 'c)',
          points: 3,
          text: 'Das Radar sendet Impulse mit Frequenz \\(f = 76{,}5\\,\\text{GHz}\\). Berechne die Wellenlänge.',
          hint: '\\(\\lambda = c/f\\)',
          solution: '\\[\\lambda = \\frac{3{,}0 \\cdot 10^8}{76{,}5 \\cdot 10^9} \\approx 3{,}92 \\cdot 10^{-3}\\,\\text{m} \\approx 3{,}9\\,\\text{mm}\\] Das liegt im Mikrowellenbereich.',
          deeperExplanation: 'Millimeterwellen (30–300 GHz) eignen sich gut für Kfz-Radar: Sie durchdringen Regen und Nebel gut und ermöglichen hohe Winkelauflösung.'
        }
      ]
    },
    {
      id: 'well_2023_1',
      year: 2023,
      title: 'Welle auf Wellenträger – Momentanbild und s-t-Diagramm',
      pdfImages: ['2023_1_p1.png','2023_1_p2.png'],
      context: 'Eine Transversalwelle auf einem Wellenträger: \\(\\lambda = 20\\,\\text{cm}\\), \\(\\hat{y} = 3{,}0\\,\\text{cm}\\), \\(c = 0{,}50\\,\\text{m/s}\\) (in +x-Richtung). Punkt bei \\(x_0 = 5{,}0\\,\\text{cm}\\) hat im Momentanbild die Auslenkung 0.',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne Frequenz und Periodendauer.',
          hint: '\\(c = \\lambda \\cdot f\\)',
          solution: '\\[f = c/\\lambda = 0{,}50/0{,}20 = 2{,}5\\,\\text{Hz}\\] \\[T = 1/f = 0{,}40\\,\\text{s}\\]',
          deeperExplanation: null
        },
        {
          label: 'b)',
          points: 3,
          text: 'Bestimme, ob sich der Punkt bei \\(x_0\\) als nächstes nach oben oder unten bewegt.',
          hint: 'Die Welle wandert in +x-Richtung. Was kommt auf den Punkt zu?',
          solution: 'Links von \\(x_0\\) ist ein Wellenberg (positive Auslenkung). Da die Welle nach rechts läuft, kommt dieser Berg auf \\(x_0\\) zu → Punkt bewegt sich nach oben.',
          deeperExplanation: '„Welle wandert nach rechts → Punkt macht eine Viertelschwingung später das, was der Punkt links gerade tut."'
        },
        {
          label: 'c)',
          points: 4,
          text: 'Stelle das \\(y\\)-\\(t\\)-Diagramm des Punktes für \\(0 \\leq t \\leq 0{,}80\\,\\text{s}\\) dar.',
          hint: 'Start: \\(y = 0\\), Bewegung nach oben → Sinusfunktion mit \\(T = 0{,}40\\,\\text{s}\\).',
          solution: '\\(y(t) = 3{,}0\\,\\text{cm} \\cdot \\sin(2\\pi t / 0{,}40\\,\\text{s})\\). Zwei vollständige Perioden im Bereich 0 bis 0,80 s.',
          deeperExplanation: null
        }
      ]
    },
    {
      id: 'well_2019_2',
      year: 2019,
      title: 'Stehende Wellen und Eigenschwingungen',
      pdfImages: ['2019_1_p1.png','2019_1_p2.png'],
      context: 'Ein Seil der Länge \\(L = 1{,}50\\,\\text{m}\\) ist an beiden Enden befestigt. Ausbreitungsgeschwindigkeit \\(c = 6{,}0\\,\\text{m/s}\\).',
      subtasks: [
        {
          label: 'a)',
          points: 3,
          text: 'Berechne die Frequenzen der ersten drei Eigenschwingungen.',
          hint: '\\(f_n = n \\cdot c / (2L)\\)',
          solution: '\\[f_1 = \\frac{6{,}0}{2 \\cdot 1{,}5} = 2{,}0\\,\\text{Hz}\\] \\[f_2 = 4{,}0\\,\\text{Hz}\\] \\[f_3 = 6{,}0\\,\\text{Hz}\\]',
          deeperExplanation: 'Die Eigenfrequenzen bilden die harmonische Reihe: \\(f_n = n \\cdot f_1\\). Dies ist die Grundlage der Musiktheorie.'
        },
        {
          label: 'b)',
          points: 3,
          text: 'Zeichne die Schwingungsmuster für \\(n = 1\\) und \\(n = 2\\). Markiere Knoten (K) und Bäuche (B).',
          hint: 'Grundton: 1 Bauch. 1. Oberton: 2 Bäuche.',
          solution: 'Grundton (n=1): Knoten bei \\(x = 0\\) und \\(1{,}5\\,\\text{m}\\). Bauch bei \\(x = 0{,}75\\,\\text{m}\\). \\\\ 1. Oberton (n=2): Knoten bei \\(x = 0;\\,0{,}75;\\,1{,}5\\,\\text{m}\\). Bäuche bei \\(0{,}375\\,\\text{m}\\) und \\(1{,}125\\,\\text{m}\\).',
          deeperExplanation: null
        }
      ]
    }
  ]

};
