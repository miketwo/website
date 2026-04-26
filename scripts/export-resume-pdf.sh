#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="${ROOT_DIR}/static_website"
OUTPUT_PATH="${SITE_DIR}/downloads/resume.pdf"

node "${ROOT_DIR}/scripts/inspect-resume.mjs" \
  --page=resume-print.html \
  --media=print \
  --screenshot=false \
  --pdf=true \
  --pdf-output="${OUTPUT_PATH}" \
  --screenshot-output="${ROOT_DIR}/.artifacts/resume/resume-print-print.png" \
  --metrics-output="${ROOT_DIR}/.artifacts/resume/resume-print-print.json"
