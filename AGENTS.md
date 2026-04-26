# AGENTS

## Resume Workflow

The resume work in this repo has two separate concerns:

- editing content and layout for the web pages
- generating a downloadable PDF that stays visually close to the web version

A new agent should treat those as related but distinct workflows.

## Key Files

- `static_website/js/resume-data.js`: resume content source
- `static_website/js/resume.js`: runtime renderer for resume pages
- `static_website/resume.html`: interactive resume page
- `static_website/resume-print.html`: print-oriented resume page
- `static_website/css/dynamic_resume.css`: resume layout and print styling
- `scripts/inspect-resume.mjs`: Chromium screenshot/PDF debug loop
- `scripts/export-resume-pdf.sh`: Chromium PDF export entrypoint

## Start Here

If the task is about resume layout, do not start with browser print dialogs.

Start with the Chromium debug loop:

```bash
cd /home/miketwo/git/website
npm run resume:inspect -- --page=resume-print.html --media=print --pdf=true
```

What this does:

- starts a local server rooted at `static_website`
- loads the real resume page in headless Chromium
- renders a full-page screenshot
- renders a PDF with Chromium's print engine when `--pdf=true`
- writes artifacts under `.artifacts/resume/`

The important outputs are:

- `.artifacts/resume/resume-print-print.png`
- `.artifacts/resume/resume-print-print.pdf`
- `.artifacts/resume/resume-print-print.json`

Use that loop for visual inspection while changing HTML/CSS/data. It exercises the same print CSS path as browser `Print / Save PDF`.

## PDF Export

The stable export path is:

1. serve `static_website`
2. load `resume-print.html` in headless Chromium
3. export PDF with Chromium's native print renderer

Run the full export with:

```bash
cd /home/miketwo/git/website
./scripts/export-resume-pdf.sh
```

This writes:

- `static_website/downloads/resume.pdf`

Important constraint:

- the premade PDF is driven by print CSS, not a separate hand-tuned PDF layout

## Tooling Lessons

The thing that matters is the browser print path, so debug against Chromium directly instead of maintaining a second PDF engine.

Practical lesson:

- keep one print source of truth: `resume-print.html` + `@page` / `@media print` CSS
- use Chromium for both debug PDFs and the premade exported PDF
- do not tune alternate PDF engines unless there is a new hard requirement

## Debug Cycle

For layout work:

1. edit `resume-data.js`, `resume.html`, `resume-print.html`, or `dynamic_resume.css`
2. run the screenshot inspector
3. inspect `.artifacts/resume/resume-print-print.png`
4. inspect `.artifacts/resume/resume-print-print.pdf` when pagination matters
5. repeat until the print page looks right
5. regenerate `downloads/resume.pdf` with `./scripts/export-resume-pdf.sh`

If you need a local server outside the inspector:

```bash
cd /home/miketwo/git/website/static_website
python3 -m http.server 4177 --bind 127.0.0.1
```

Useful routes:

- `/resume.html`
- `/resume-print.html`
- `/downloads/resume.pdf`
