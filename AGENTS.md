# AGENTS.md – Arbeitsregeln für KI-Agenten

> **Lies diese Datei vollständig durch, bevor du irgendetwas änderst.**

---

## Das wichtigste Prinzip

**Deine Arbeit ist erst fertig, wenn der Code auf `main` ist.**

Dieses Projekt gehört einem einzelnen Entwickler (Linus). Es gibt kein Team, das PRs reviewed. Code, der nur auf einem Branch liegt, erscheint nie auf der Live-Seite (https://linus-def.github.io/physik-abitur/). Daher gilt:

- Kleine Fixes und Inhaltsänderungen → **direkt auf `main`**
- Größere Features → Branch erstellen, fertigstellen, **sofort selbst mergen**, Branch löschen

---

## Git-Workflow

### Normalfall: Direkt auf main

```bash
git checkout main
git pull origin main
# Änderungen machen
git add <dateien>
git commit -m "fix: kurze Beschreibung"
git push origin main
```

### Ausnahme: Branch (nur bei größeren Features)

```bash
git checkout -b feat/<kurzer-name>
# Änderungen machen, commits
git checkout main
git pull origin main
git merge feat/<kurzer-name>
git push origin main
git branch -d feat/<kurzer-name>
git push origin --delete feat/<kurzer-name>
```

**Wichtig:** Branch IMMER sofort löschen nachdem er in main gemergt ist. Offene Branches ohne Merge sind wertlos.

---

## Bevor du anfängst

1. `git checkout main && git pull origin main` – immer aktuellen Stand holen
2. Nur die Dateien ändern, die für die Aufgabe nötig sind
3. Nach dem Push: prüfen ob `git log origin/main --oneline -1` den eigenen Commit zeigt

---

## Technische Regeln (Pflicht)

- **Kein npm, kein Build-Step** – reines Vanilla JS/HTML/CSS
- **Keine Inline-Scripts in HTML** – CSP-Policy blockiert sie
- **Keine neuen HTML-Dateien** – alles läuft über `index.html`
- **JavaScript-Syntax prüfen:** `node --check js/progress.js` etc. vor jedem Commit
- **Alle Texte auf Deutsch**
- CSS Custom Properties nutzen (`var(--farbe)`), nie hardcodierte Farben
- MathJax-Syntax: `\(inline\)` und `\[block\]`

---

## Projektstruktur

```
physik-abitur/
├── data/
│   ├── topics_data.js    ← Theorie-Inhalte, Quickcheck-Fragen, Erklärungen
│   └── tasks_data.js     ← Abituraufgaben (Bilder, Lösungen, Bewertung)
├── js/
│   ├── app.js            ← Router, Navigation, Event-Handler
│   ├── topics.js         ← Themen-Rendering, Karten
│   ├── tasks.js          ← Aufgaben-Ansicht, PDF-Handling
│   ├── quiz.js           ← Quiz-Logik, Auswertung
│   ├── theme.js          ← Dark/Light-Mode
│   ├── lightbox.js       ← Bild-Lightbox
│   ├── progress.js       ← Lernfortschritt (localStorage)
│   └── mathjax-config.js ← MathJax-Konfiguration
├── css/style.css         ← Gesamtes Design, CSS Custom Properties
├── img/                  ← PNG-Bilder der Abituraufgaben
├── index.html            ← Einziger HTML-Einstiegspunkt
└── scripts/
    └── extract_images.py ← PDFs → PNGs (nur lokal, nicht Teil der Webapp)
```

---

## Typische Fehlerquellen

| Problem | Ursache | Lösung |
|---|---|---|
| Seite lädt nicht | SyntaxError in JS | `node --check js/*.js` |
| Themen erscheinen nicht | `progress.js` lädt nicht | Doppelte `const`-Deklarationen checken |
| MathJax rendert nicht | Race condition beim Laden | `mathjaxTypeset()` aus `mathjax-config.js` nutzen |
| Styles fehlen | Hardcodierte Farbe statt `var(--x)` | CSS Custom Properties nutzen |
| Änderung nicht live | Code nur auf Branch, nicht auf main | Direkt auf main pushen |
