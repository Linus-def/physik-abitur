# CLAUDE.md – Anweisungen für Claude

> Lies diese Datei zuerst. Sie gilt für jede Session.

---

## Was ist dieses Projekt?

Eine **interaktive Lernplattform für das Physik-Abitur 2026 in Baden-Württemberg**.
Schüler können damit Theorie lernen, Aufgaben üben und Quickchecks machen.

- **Live-URL:** https://linus-def.github.io/physik-abitur/
- **Prüfungsdatum:** 23. April 2026
- **Zielgruppe:** Gymnasiasten in BW, Physik-Abitur
- **Entwickler:** Linus

---

## Tech Stack – WICHTIG

- **Reines Vanilla HTML/CSS/JavaScript** – KEIN Framework, KEIN npm, KEIN Build-Step
- Deployed via **GitHub Pages** (direkt aus dem Root-Verzeichnis)
- Kein Backend, kein Server – State über `localStorage`
- **CSP-konform:** Keine Inline-Scripts (alles in externen .js-Dateien)
- MathJax für Formel-Rendering

---

## Architektur

```
physik-abitur/
├── index.html           # Einziger HTML-Einstiegspunkt
├── css/style.css        # Gesamtes Design System (CSS Custom Properties, Dark Mode)
├── js/
│   ├── app.js           # Router & Navigation
│   ├── topics.js        # Theorie-Renderer
│   ├── quiz.js          # Quickcheck-Modul
│   ├── tasks.js         # Aufgaben-Renderer
│   ├── progress.js      # Fortschrittssystem
│   ├── theme.js         # Dark/Light Mode
│   ├── lightbox.js      # Bild-Zoom
│   └── mathjax-config.js
├── data/
│   ├── topics_data.js   # Theorieinhalte, Formeln, Quickcheck-Fragen
│   └── tasks_data.js    # Abituraufgaben 2018-2025
├── img/                 # PDF-Scans der Abiturprüfungen
└── .claude/launch.json  # Dev-Server: python -m http.server 8765
```

---

## Die 7 Prüfungsthemen

| Priorität | Thema |
|---|---|
| Hoch | Mechanische Schwingungen |
| Hoch | Elektrodynamik & Elektromagnetismus |
| Hoch | Wellenoptik |
| Mittel | Elektromagnetischer Schwingkreis (LC) |
| Mittel | Elektrische & Magnetische Felder |
| Mittel | Quantenphysik & Photoeffekt |
| Mittel | Wellen (allgemein) |

---

## Technische Regeln

### DO
- Vanilla JS, native DOM-APIs
- CSS Custom Properties für alle Farben/Abstände (in `style.css` unter `:root`)
- `localStorage` für persistente Daten
- Alle Texte auf **Deutsch**
- Mobile-first
- MathJax-Syntax: `\(F = ma\)` Inline, `\[..\]` Block

### DON'T
- KEIN npm, KEIN package.json
- KEINE Inline-Scripts in HTML (CSP!)
- KEINE neuen HTML-Dateien
- Dateistruktur im Root NICHT verändern
- `.nojekyll` NICHT löschen

---

## Wie Claude arbeiten soll

### Auf Linus hören
- Linus entscheidet, was umgesetzt wird. Keine eigenen Features vorschlagen, die nicht gefragt wurden.
- Wenn Linus eine Richtung vorgibt, diese umsetzen – auch wenn du es anders machen würdest.
- Fragen stellen, bevor du große Änderungen machst.

### Erklärungen in die Tiefe
- Niemals nur eine Formel hinschreiben und fertig. Immer erklären: **Was bedeutet die Formel? Warum gilt sie? Was passiert physikalisch?**
- Beispiel SCHLECHT: "Die Formel für die Schwingungsdauer ist T = 2π√(L/g)"
- Beispiel GUT: "Die Schwingungsdauer T = 2π√(L/g) sagt aus, dass ein längeres Pendel langsamer schwingt – weil die rücktreibende Kraft relativ zur trägen Masse kleiner wird. Die Masse spielt keine Rolle, weil Trägheit und Schwerkraft sich exakt herauskürzen."
- Zusammenhänge zwischen Themen herstellen, nicht isoliert erklären.
- Anschauliche Analogien nutzen, wenn möglich.

### Design & UI
- Bei Design-Fragen: Erst verstehen, was Linus sich vorstellt – dann umsetzen.
- Das Design soll **klar, modern und ablenkungsfrei** sein. Lernenden soll es helfen, nicht ablenken.
- CSS Custom Properties nutzen, nie hardcodierte Farben.
- Dark Mode immer mitdenken.

### Code-Änderungen
- Nur ändern, was gefragt ist. Kein "während ich schon dabei bin..."-Refactoring.
- Vor größeren Änderungen kurz erklären, was du vorhast.
- Kommentare im Code auf Deutsch.

---

## Lokaler Dev-Server

```bash
python -m http.server 8765
# http://localhost:8765
```

---

## Offene Issues & aktueller Stand

Immer zuerst die GitHub Issues checken:
https://github.com/Linus-def/physik-abitur/issues

> Den aktuellen Projektstand nicht in dieser Datei pflegen –
> der ändert sich zu schnell. Issues und Commits sind die Quelle der Wahrheit.
