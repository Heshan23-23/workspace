# Personal Website (Undergraduate) — Scaffold

This is a minimal static personal website scaffold. It includes animations, a hero area with a photo placeholder, education & certificate placeholder, and project cards.

Files added:
- index.html
- styles.css
- script.js
- assets/photo.svg (placeholder — replace with your photo)
- assets/certificate.svg (placeholder certificate)
- assets/project-1.svg, project-2.svg (project preview placeholders)

To preview locally:

1. Open `index.html` in your browser (double-click or drag to browser).

Optional: run a simple HTTP server (recommended for consistent behaviour):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Replace the placeholders:
- Put your real profile photo at `assets/photo.svg` (or replace the `<img>` with a raster image like `photo.jpg`).
- Replace `assets/certificate.svg` with a scanned certificate PDF or image; update the link in `index.html`.
- Update project cards in `index.html` or build a small JSON-driven list and render dynamically.

Want deployment? I can add a GitHub Pages or Netlify config next.

Automaton Butterfly project
- Place your project images at `assets/1st_1.jpg` and `assets/1st_2.jpg`. The site uses `1st_2.jpg` as the front-page thumbnail and both images for the project detail carousel.
- The project detail page is at `project-automaton.html` — open it after adding the images to preview the carousel and description.
 - The project detail page is at `project-automaton.html` — open it after adding the images to preview the carousel and description.

Automatic Dish Washing System project
- Place your project images at `assets/2_1.jpg`, `assets/2_2.jpg`, `assets/2_3.jpg`, and `assets/2_4.jpg`. The site uses `2_4.jpg` as the front-page thumbnail and all four images for the project detail carousel.
- The project detail page is at `project-dishwashing.html` — open it after adding the images to preview the carousel and description.

Reverse Engineering of a Foot Air Pump project
- Place your project images at `assets/Picture1.png` through `assets/Picture8.png`. The site uses `Picture1.png` as the front-page thumbnail and all images for the project detail carousel.
- The project detail page is at `project-reverse.html` — open it after adding the images to preview the carousel and description.

LockerLink project
- Place your project images at `assets/4_1.png` through `assets/4_7.png`. The site uses `4_1.png` as the front-page thumbnail and all images for the project detail carousel.
- The project detail page is at `project-lockerlink.html` — open it after adding the images to preview the carousel and description.
