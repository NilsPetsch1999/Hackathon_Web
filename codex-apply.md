Added a centered semantic `h1` using a minimal fixed-position style so existing paragraph layout remains intact, and introduced a small HTML parser unit test to verify the heading’s text and class. Changes are confined to `index.html` for the feature and `tests/test_heading.py` for coverage.

Files touched:
- `index.html`
- `tests/test_heading.py`

Tests:
- `python -m unittest tests/test_heading.py`

Run check:
- `python - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
parser = HTMLParser()
parser.feed(Path('index.html').read_text(encoding='utf-8'))
print('index.html parsed')
PY`

Next steps (optional):
1) Open `index.html` in a browser to visually confirm centering.