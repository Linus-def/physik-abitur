# ⚛ Physik Abitur 2026 – Baden-Württemberg

[![Deploy to GitHub Pages](https://github.com/Linus-def/physik-abitur/actions/workflows/deploy.yml/badge.svg)](https://github.com/Linus-def/physik-abitur/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Website-live-6366f1?logo=github)](https://linus-def.github.io/physik-abitur/)

Interaktive Lernplattform für das Physik-Abitur 2026 in Baden-Württemberg. Keine Installation, kein Account – einfach öffnen und lernen.

**→ [linus-def.github.io/physik-abitur](https://linus-def.github.io/physik-abitur/)**

---

## Features

| Feature | Beschreibung |
|---|---|
| 📖 **Theorie** | Alle 7 Prüfungsthemen mit Formeln, Erklärungen und Tiefer-Einblicken |
| ✏️ **Abituraufgaben** | Echte Prüfungsaufgaben 2018–2025 mit Hinweisen und Lösungen |
| ⚡ **Quickchecks** | 20 Multiple-Choice-Fragen pro Thema mit sofortigem Feedback |
| ∑ **Formelzettel** | Alle wichtigen Formeln auf einen Blick |
| ★ **Favoriten** | Aufgaben als Favorit markieren |
| 📅 **7-Tage-Lernplan** | Strukturierter Lernplan bis zur Prüfung |
| 🌙 **Dark Mode** | Augenfreundliches Design für langes Lernen |
| 📱 **PWA** | Als App auf dem Homescreen installierbar |

## Themen

1. ⭐⭐⭐ Mechanische Schwingungen
2. ⭐⭐⭐ Elektrodynamik & Elektromagnetismus
3. ⭐⭐⭐ Wellenoptik
4. ⭐⭐ Elektromagnetischer Schwingkreis (LC)
5. ⭐⭐ Elektrische & Magnetische Felder
6. ⭐⭐ Quantenphysik & Photoeffekt
7. ⭐⭐ Wellen (allgemein)

## Prüfungsdaten

| | |
|---|---|
| **Datum** | 23. April 2026 |
| **Dauer** | 300 Minuten |
| **Aufgaben** | 4 gestellt, 3 wählen |
| **Hilfsmittel** | IQB-Formelsammlung erlaubt |

## Tech Stack

Reines HTML/CSS/JavaScript – kein Framework, kein Build-Step, keine Abhängigkeiten.

```
physik-abitur/
├── index.html          # Einstiegspunkt
├── css/style.css       # Gesamtes Styling (Design System)
├── js/
│   ├── app.js          # Router & Navigation
│   ├── quiz.js         # Quickcheck-Modul
│   ├── topics.js       # Theorie-Renderer
│   ├── tasks.js        # Aufgaben-Renderer
│   └── progress.js     # Fortschrittssystem
├── data/
│   ├── topics_data.js  # Alle Theorieinhalte & Fragen
│   └── tasks_data.js   # Alle Abituraufgaben
└── img/                # PDF-Scans der Abiturprüfungen
```

## Fehler melden / Features vorschlagen

→ [GitHub Issues](https://github.com/Linus-def/physik-abitur/issues/new/choose)
