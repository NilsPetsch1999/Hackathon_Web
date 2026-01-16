# Issue: [SPEC] Create Heading index.html

## Original Description
## Goal
Add a new heading to the page that displays the text **"Welcome to the Hackathon"** centered in the middle of the page.

## Context
The project contains an existing HTML page (e.g. `index.html`).  
This change is meant to demonstrate that clearly specified UI requirements can be translated into deterministic code changes by the AI workflow.

## Requirements
- Add a new heading element with the text: "Welcome to the Hackathon"
- The heading must be:
- Horizontally centered
- Vertically centered on the page
- The heading should be clearly visible on page load
- Use semantic HTML (`<h1>`)

## Non-goals
- Do not remove or modify existing content unless necessary for centering
- Do not add animations or JavaScript
- Do not change unrelated styles or files

## Acceptance criteria
- The page displays **exactly one heading** with the text *Welcome to the Hackathon*
- The heading is centered both vertically and horizontally
- The page renders correctly in a browser
- Existing functionality remains unchanged

## Approval
- [ ] Ready for Codex (maintainer checks this, OR add label `codex:go`)



## Clarifications (from comments)
- github-actions[bot]: Summary: Add a single semantic `h1` to `index.html` with “Welcome to the Hackathon” and apply minimal styling so it is centered both vertically and horizontally on load while preserving existing content. No clarifications override the issue body.

Proposed file changes:
- `index.html`

Step-by-step plan:
1) Open `index.html` to understand current structure and any existing styles or layout constraints.
2) Insert a semantic `<h1>` with the exact text “Welcome to the Hackathon” in an appropriate location.
3) Apply minimal, scoped CSS (inline or existing style block) to center the heading horizontally and vertically without altering unrelated content.
4) Verify the page still renders correctly and contains exactly one heading with that text.

Risks / questions:
- None at this time.

