# Issue: [SPEC] change index.php Paragraph Text
URL: https://github.com/NilsPetsch1999/Hackathon_Web/issues/2

## Body
## Goal
Replace the content of the existing `<p>` tag in `index.html` with the text "Hello world".

## Context
The file `index.html` already exists and contains a `<p>` tag with some text.
This change is meant to verify that Codex can correctly modify existing HTML.

## Requirements
- Locate the existing `<p>` tag in `index.html`
- Remove the current text inside the `<p>` tag
- Replace it with exactly: Hello world!
- Do not add additional `<p>` tags
- Do not modify any other HTML elements

## Non-goals
- Do not change formatting or indentation outside the `<p>` tag
- Do not modify CSS or JavaScript
- Do not touch any other files

## Acceptance criteria
- `index.html` contains the same structure as before
- The `<p>` tag’s content is exactly `Hello world`
- No other files are changed

