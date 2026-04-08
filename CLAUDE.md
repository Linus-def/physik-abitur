# CLAUDE.md – Anweisungen für Claude (AI Agent)

> Diese Datei ist speziell für Claude und andere KI-Assistenten.
> Lies sie zuerst, bevor du Code änderst oder Fragen stellst.

---

## Was ist dieses Projekt?

Eine **interaktive Lernplattform für das Physik-Abitur 2026 in Baden-Württemberg**.
Schüler können damit Theorie lernen, Aufgaben üben und sich auf die Prüfung vorbereiten.

- **Live-URL:** https://linus-def.github.io/physik-abitur/
- **Prüfungsdatum:** 23. April 2026
- **Zielgruppe:** Gymnasiasten in BW, die Physik-Abitur machen
- **Entwickler:** Linus (Abiturient, Bad Wimpfen, BW)

---

## Tech Stack – WICHTIG

- **Reines Vanilla HTML/CSS/JavaScript** – KEIN Framework, KEIN npm, KEIN Build-Step
- Deployed via **GitHub Pages** (direkt aus dem Root-Verzeichnis)
- **Keine Abhängigkeiten** – alles läuft ohne Installation im Browser
- State wird über `localStorage` persistiert (kein Backend, kein Server)
- **CSP-konform:** Keine Inline-Scripts erlaubt (alles in externen .js-Dateien)
- MathJax für Formel-Rendering

---

## Architektur – Dateistruktur

```
physik-abitur/
├── index.html           # Einziger HTML-Einstiegspunkt (SPA-ähnlich)
├── css/
│   └── style.css        # Gesamtes Design System (CSS Custom Properties, Dark Mode)
├── js/
│   ├── app.js           # Router, Navigation, View-Switching
│   ├── topics.js        # Theorie-Renderer (rendert topics_data.js)
│   ├── quiz.js          # Quickcheck-Modul (Multiple Choice, 20 Fragen/Thema)
│   ├── tasks.js         # Aufgaben-Renderer (echte Abituraufgaben)
│   ├── progress.js      # Fortschrittssystem (localStorage)
│   ├── theme.js         # Dark/Light Mode Toggle
│   ├── lightbox.js      # Bild-Zoom für Aufgaben-Scans
│   └── mathjax-config.js  # MathJax Konfiguration
├── data/
│   ├── topics_data.js   # Alle Theorieinhalte, Formeln, Quickcheck-Fragen
│   └── tasks_data.js    # Alle Abituraufgaben 2018-2025 mit Lösungen
├── img/                 # PDF-Scans der echten Abiturprüfungen
├── .github/             # CI/CD Workflows, Issue-Templates
├── .claude/
│   └── launch.json      # Lokaler Dev-Server: python -m http.server 8765
├── manifest.json        # PWA Manifest (als App installierbar)
├── robots.txt           # SEO
└── favicon.svg          # App-Icon
```

---

## Die 7 Prüfungsthemen (mit Priorität)

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

## Aktueller Projektstand (April 2026)

- Alle 7 Themen haben Theorie-Inhalte
- Quickchecks: 20 Fragen pro Thema
- Aufgaben: Echte Abiturprüfungen 2018-2025 integriert
- Favoriten-System funktioniert
- 7-Tage-Lernplan vorhanden
- PWA installierbar
- **Bekannter Bug:** Dark Mode funktioniert nicht korrekt (Issue #6)

**Offene Issues:** https://github.com/Linus-def/physik-abitur/issues

---

## Regeln – Was du beachten MUSST

### DO
- Vanilla JS – native DOM-APIs nutzen
- CSS Custom Properties für Farben/Abstände (definiert in `style.css` unter `:root`)
- `localStorage` für persistente Daten
- Alle Texte auf **Deutsch**
- Mobile-first entwickeln
- Formeln mit MathJax-Syntax: `\(F = ma\)` für Inline, `\[..\]` für Block

### DON'T
- KEIN npm install, KEIN package.json anlegen
- KEINE neuen externen Libraries ohne Rückfrage
- KEINE Inline-Scripts in HTML (CSP-Policy!)
- KEINE neuen HTML-Dateien anlegen (alles läuft über index.html)
- Dateistruktur im Root NICHT verändern (GitHub Pages deployed direkt daraus)
- `.nojekyll` NICHT löschen

---

## Lokalen Dev-Server starten

```bash
python -m http.server 8765
# Dann im Browser: http://localhost:8765
```

(Konfiguriert in `.claude/launch.json`)

---

## Wie man Inhalte hinzufügt

**Neue Quickcheck-Fragen:** `data/topics_data.js` – Schema der bestehenden Fragen kopieren

**Neue Abituraufgabe:** `data/tasks_data.js` – Schema der bestehenden Aufgaben kopieren

**Neues Feature:** Vanilla JS in passendes Modul in `js/` schreiben, dann in `index.html` als `<script src="js/...">` einbinden

---

## Kontext zum Entwickler

- Linus ist Abiturient (Gymnasium BW), Prüfung am **23. April 2026**
- Das Projekt ist sein eigenes Lernwerkzeug
- **Priorität liegt auf Inhalten & Bugfixes** – nicht auf neuen Features
- Zeitdruck: wenige Wochen bis zur Prüfung
- Kommunikation auf **Deutsch**
