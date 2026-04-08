"""
Extrahiert relevante PDF-Seiten als PNG-Bilder für die Webapp.
Speichert in webapp/img/
"""
import fitz  # pymupdf
import os
from pathlib import Path

BASE = Path("D:/Für Claude/Physik Abitur BW")
OUT  = BASE / "webapp" / "img"
OUT.mkdir(exist_ok=True)

# Welche PDFs → welche Seiten (0-basiert) → welcher Ausgabename
# Nur die "Aufgaben"-PDFs, nicht Lösungen
EXTRACTIONS = [
    # 2025
    ("2025/Aufgabe 1 - Sicherheit im Stromkreis - Aufgaben.pdf",   [0, 1, 2], "2025_1"),
    ("2025/Aufgabe 2 - Abschirmung gegen Meereswellen - Aufgaben.pdf",[0, 1, 2], "2025_2"),
    ("2025/Aufgabe 3 - Abstandsradarsysteme beim Auto - Aufgaben.pdf",[0, 1],    "2025_3"),
    # 2024
    ("2024/Aufgabe 1 - Schwingungen - Aufgaben.pdf",                [0, 1, 2], "2024_1"),
    ("2024/Aufgabe 2 - elmagn. Schwingkreis und Licht - Aufgaben.pdf",[0, 1, 2], "2024_2"),
    ("2024/Aufgabe 3 - Spannung und Induktion - Aufgaben.pdf",       [0, 1, 2], "2024_3"),
    # 2023
    ("2023/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2023_1"),
    ("2023/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2023_2"),
    ("2023/Aufgabe 3 - Felder - Aufgaben.pdf",                      [0, 1, 2], "2023_3"),
    ("2023/Aufgabe 4 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2023_4"),
    # 2022
    ("2022/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2022_1"),
    ("2022/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2022_2"),
    ("2022/Aufgabe 3 - Felder - Aufgaben.pdf",                      [0, 1],    "2022_3"),
    ("2022/Aufgabe 4 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2022_4"),
    # 2021
    ("2021/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2021_1"),
    ("2021/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2021_2"),
    ("2021/Aufgabe 3 - Felder - Aufgaben.pdf",                      [0, 1, 2], "2021_3"),
    ("2021/Aufgabe 4 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2021_4"),
    # 2020
    ("2020/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2020_1"),
    ("2020/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2020_2"),
    ("2020/Aufgabe 3 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2020_3"),
    # 2019
    ("2019/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2019_1"),
    ("2019/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2019_2"),
    ("2019/Aufgabe 3 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2019_3"),
    # 2018
    ("2018/Aufgabe 1 - Mechanische Schwingungen - Aufgaben.pdf",    [0, 1],    "2018_1"),
    ("2018/Aufgabe 2 - Licht - Aufgaben.pdf",                       [0, 1],    "2018_2"),
    ("2018/Aufgabe 3 - Elektromagnetismus - Aufgaben.pdf",          [0, 1],    "2018_3"),
]

DPI = 150  # Gute Qualität, aber nicht zu groß

extracted = []
failed    = []

for rel_pdf, pages, name in EXTRACTIONS:
    pdf_path = BASE / rel_pdf
    if not pdf_path.exists():
        print(f"  SKIP (nicht gefunden): {rel_pdf}")
        failed.append(name)
        continue
    try:
        doc = fitz.open(str(pdf_path))
        for page_num in pages:
            if page_num >= len(doc):
                continue
            page = doc[page_num]
            mat  = fitz.Matrix(DPI/72, DPI/72)
            pix  = page.get_pixmap(matrix=mat, alpha=False)
            out_name = f"{name}_p{page_num+1}.png"
            out_path = OUT / out_name
            pix.save(str(out_path))
            size_kb = out_path.stat().st_size // 1024
            print(f"  OK: {out_name} ({size_kb} KB)")
            extracted.append(out_name)
        doc.close()
    except Exception as e:
        print(f"  FEHLER {name}: {e}")
        failed.append(name)

print(f"\n✓ {len(extracted)} Bilder extrahiert → {OUT}")
if failed:
    print(f"✗ Fehler/Skipped: {failed}")
