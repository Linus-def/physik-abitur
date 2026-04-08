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

Mehrere Agenten arbeiten gleichzeitig an diesem Repo. Direkte Commits auf `main`
führen zu überschriebenen Änderungen ohne Warnung. PRs verhindern das.

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
│   ├── topics_data.js   ← Theorie, Quickcheck-Fragen, Erklärungen
│   └── tasks_data.js    ← Abitur-Aufgaben
├── js/                  ← App-Logik
├── css/                 ← Styles
├── index.html           ← Einstiegspunkt
└── AGENTS.md            ← Diese Datei
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
