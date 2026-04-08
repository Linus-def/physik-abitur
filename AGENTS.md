# AGENTS.md – Arbeitsregeln für KI-Agenten

> **Lies diese Datei vollständig durch, bevor du irgendetwas änderst.**

## Git-Workflow (PFLICHT)

- **NIEMALS direkt auf `main` pushen oder committen**
- Erstelle immer einen eigenen Branch:
  ```
  git checkout -b fix/<kurzer-name>   # z.B. fix/felder-quiz-antwort
  git checkout -b feat/<kurzer-name>  # z.B. feat/neue-aufgaben-wellenoptik
  ```
- Öffne nach deinen Änderungen einen **Pull Request** auf `main`
- Verlinke den PR mit dem zugehörigen Issue (z.B. `Closes #12`)
- Warte, bis der PR von einem Menschen gemergt wird – merge NICHT selbst

## Warum das wichtig ist

Mehrere Agenten arbeiten gleichzeitig an diesem Repo. Direkte Commits auf `main` führen zu überschriebenen Änderungen ohne Warnung. PRs verhindern das.

## Bevor du anfängst

1. Aktuellen Stand holen: `git pull origin main`
2. Neuen Branch erstellen (siehe oben)
3. Nur die Dateien ändern, die für deine Aufgabe nötig sind
4. Keine unnötigen Formatierungs- oder Whitespace-Änderungen in anderen Bereichen
5. Prüfe ob ein anderer offener PR dieselbe Datei bearbeitet – wenn ja, Bescheid geben

## Projektstruktur

```
physik-abitur/
├── data/
│   ├── topics_data.js    ← Theorie-Inhalte, Quickcheck-Fragen, Erklärungen pro Thema
│   └── tasks_data.js     ← Abituraufgaben (Bilder-Referenzen, Lösungen, Bewertung)
├── js/
│   ├── app.js            ← Haupt-App-Logik, Event-Handler, MathJax-Rendering
│   ├── topics.js         ← Themen-Rendering, Karten-Logik
│   ├── tasks.js          ← Aufgaben-Ansicht, PDF-Handling
│   ├── quiz.js           ← Quiz-Logik, Auswertung
│   ├── theme.js          ← Dark/Light-Mode, Scroll-to-Top
│   ├── lightbox.js       ← Bild-Lightbox für Aufgaben-PNGs
│   ├── progress.js       ← Lernfortschritt-Tracking
│   └── mathjax-config.js ← MathJax-Konfiguration (lädt vor app.js)
├── css/                  ← Alle Styles, keine Logik
├── img/                  ← PNG-Bilder der Abituraufgaben (generiert via scripts/)
├── scripts/              ← Lokale Entwickler-Tools, NICHT Teil der Webapp
│   └── extract_images.py ← Rendert PDF-Seiten als PNGs für img/
├── index.html            ← Einstiegspunkt, CSP, Meta-Tags, MathJax-Einbindung
└── AGENTS.md             ← Diese Datei
```

## Branch-Namenskonvention

| Typ | Schema | Beispiel |
|---|---|---|
| Bugfix | `fix/<issue-nr>-<beschreibung>` | `fix/12-felder-quiz-antwort` |
| Feature | `feat/<beschreibung>` | `feat/neue-quantenphysik-aufgaben` |
| Inhalt | `content/<beschreibung>` | `content/detailed-explanations-wellenoptik` |

## PR-Beschreibung

Jeder PR soll enthalten:
- Was wurde geändert und warum
- Welches Issue wird damit geschlossen (`Closes #XX`)
- Kurze Beschreibung der Änderungen in `topics_data.js` oder anderen Dateien
