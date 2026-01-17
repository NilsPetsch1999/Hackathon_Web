Implemented a centered counter button with a small JS module to handle increment/reset on load, and added unit tests that cover the acceptance criteria using a minimal DOM mock. The UI is centered via flex styles and the button displays only the numeric value.

- Implemented counter UI + module: `index.html`, `counter.mjs`
- Unit tests: `tests/counter.test.mjs`
- Acceptance Criteria verified:
  - Centered button shows `0` on load (style checks + initial value)
  - Click increments from `0` to `1`
  - Reload resets to `0`
- Tests run: `node tests/counter.test.mjs`
- Runtime check: `node --check counter.mjs`

If you want, I can also add a tiny HTML run check (e.g., a headless render) next.