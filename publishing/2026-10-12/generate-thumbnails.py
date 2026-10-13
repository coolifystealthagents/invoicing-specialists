from pathlib import Path
import json, textwrap
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
DATA = json.loads((Path(__file__).parent / "release-data.json").read_text())
OUT = ROOT / "public/thumbnails/october-12"
OUT.mkdir(parents=True, exist_ok=True)

def font(size, bold=False):
    paths = ["/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
    for path in paths:
        if Path(path).exists(): return ImageFont.truetype(path, size)
    return ImageFont.load_default()

for idx, item in enumerate(DATA["blogs"] + DATA["research"]):
    research = idx >= len(DATA["blogs"])
    bg = (247,242,234); dark = (25,21,19); copper = (187,99,47); sand = (214,160,113)
    im = Image.new("RGB", (1200,630), bg); d = ImageDraw.Draw(im)
    d.rectangle((0,0,1200,18), fill=copper)
    d.rounded_rectangle((760,90,1110,540), radius=34, fill=dark)
    # Distinct invoice sheets and approval marks per title/index.
    offset = (idx * 13) % 45
    d.rounded_rectangle((810+offset,145,1045+offset,465), radius=15, fill=(255,252,245))
    for y in range(205,390,46): d.rounded_rectangle((850+offset,y,1005+offset,y+11), radius=5, fill=sand)
    d.ellipse((860+offset,405,940+offset,485), outline=copper, width=10)
    d.line((882+offset,445,900+offset,462,930+offset,423), fill=copper, width=9)
    d.text((82,76), "RESEARCH BRIEF" if research else "OPERATIONS GUIDE", font=font(23,True), fill=copper)
    wrapped = textwrap.wrap(item["title"], width=27)
    y = 145
    for line in wrapped:
        d.text((82,y), line, font=font(48,True), fill=dark); y += 58
    d.text((82,520), "INVOICING SPECIALISTS", font=font(22,True), fill=copper)
    d.text((82,555), "Evidence-led billing operations", font=font(20), fill=dark)
    im.save(OUT / f'{item["slug"]}.webp', "WEBP", quality=90, method=6)
