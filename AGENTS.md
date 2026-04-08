# AGENTS.md – Arbeitsregeln für KI-Agenten

> **Lies diese Datei vollständig durch, bevor du irgendetwas änderst.**

> Diese Regeln gelten sowohl für lokale Coding-Agenten mit Git/Terminal als auch für browser- oder API-basierte Agenten.

## Git-Workflow (PFLICHT)

- **NIEMALS direkt auf `main` pushen oder committen**
- Erstelle immer einen eigenen Branch:
  ```
  git checkout -b fix/<kurzer-name>      # z.B. fix/felder-quiz-antwort
  git checkout -b feat/<kurzer-name>     # z.B. feat/neue-aufgaben-wellenoptik
  git checkout -b content/<kurzer-name>  # z.B. content/detailed-explanations-wellenoptik
  ```
- Wenn du **lokal mit Git** arbeitest:
  - Hole zuerst den aktuellen Stand von `main` (siehe "Bevor du anfängst")
  - Erstelle danach deinen Branch
- Wenn du **browser- oder API-basiert** arbeitest (z.B. GitHub Web-Editor, Comet, Copilot im Browser):
  - Stelle sicher, dass du auf der aktuellen Version von `main` arbeitest
  - Erstelle trotzdem einen separaten Branch – ändere **nicht direkt `main`**
- Öffne nach deinen Änderungen immer einen **Pull Request** auf `main`
- Verlinke den PR mit dem zugehörigen Issue (z.B. `Closes #12`)
- Warte, bis der PR von einem Menschen gemergt wird – merge **NICHT** selbst

## Warum das wichtig ist

Mehrere Agenten oder Bearbeitungen können gleichzeitig an diesem Repo arbeiten.
Direkte Commits auf `main` führen leicht zu überschriebenen oder unübersichtlichen Änderungen.
Darum gilt immer: **separater Branch + Pull Request**, egal ob lokal per Git oder browser-/API-basiert gearbeitet wird.

## Bevor du anfängst

1. Hole den **aktuellen Stand von `main`**:
   - Lokal mit Git: `git pull origin main`
   - Browser/API-basiert: Stelle sicher, dass du die aktuelle Version von `main` geöffnet bzw. geladen hast
2. Erstelle einen neuen Branch (siehe oben)
3. Ändere nur die Dateien, die für deine Aufgabe nötig sind
4. Keine unnötigen Formatierungs- oder Whitespace-Änderungen in anderen Bereichen
5. Prüfe ob ein anderer offener PR dieselbe Datei bearbeitet – wenn ja, Bescheid geben
6. Erstelle am Ende einen Pull Request auf `main`, nicht direkt einen Merge

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
