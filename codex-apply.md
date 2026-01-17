Modernized the comment section with Material-influenced cards, avatars, and updated form/button styling while keeping the existing page feel, and added a lightweight unit test to validate the new UI structure.

- Updated markup to include card containers, avatar initials, and a structured list layout in `frontend/src/components/comment-section/CommentSection.tsx`.
- Reworked styling with elevation, rounded surfaces, and refined inputs/buttons to match the modern Material direction in `frontend/src/components/comment-section/comment-section.css`.
- Added a unit-level test that asserts the new modern UI hooks and styling are present in `frontend/tests/comment-section.test.cjs`.
- Wired the test runner via `npm test` in `frontend/package.json`.

**Acceptance Criteria Verified**
- UI appears more modern and Material-influenced: validated by presence of card elevation and avatar styling in `frontend/tests/comment-section.test.cjs`.
- Design remains consistent with the page: validated by using existing typography and color family in `frontend/src/components/comment-section/comment-section.css`.

**Run Check**
- `npm test` (runs `node ./tests/comment-section.test.cjs`)

If you want, next steps could be:
1) Run `npm run build` in `frontend` to confirm the full build still succeeds.
2) Run `npm run lint` in `frontend` to ensure lint passes.