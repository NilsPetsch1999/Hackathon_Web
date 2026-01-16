import pathlib
import unittest
from html.parser import HTMLParser


class HeadingParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1_texts = []
        self.h1_classes = []
        self._in_h1 = False
        self._current_text = []

    def handle_starttag(self, tag, attrs):
        if tag == "h1":
            self._in_h1 = True
            attr_map = dict(attrs)
            self.h1_classes.append(attr_map.get("class", ""))

    def handle_endtag(self, tag):
        if tag == "h1" and self._in_h1:
            self.h1_texts.append("".join(self._current_text).strip())
            self._current_text = []
            self._in_h1 = False

    def handle_data(self, data):
        if self._in_h1:
            self._current_text.append(data)


class TestHeading(unittest.TestCase):
    def setUp(self):
        html_path = pathlib.Path(__file__).resolve().parents[1] / "index.html"
        self.html_content = html_path.read_text(encoding="utf-8")

    def test_heading_text_and_count(self):
        parser = HeadingParser()
        parser.feed(self.html_content)
        self.assertEqual(parser.h1_texts, ["Welcome to the Hackathon"])

    def test_heading_center_class(self):
        parser = HeadingParser()
        parser.feed(self.html_content)
        self.assertEqual(parser.h1_classes, ["center-heading"])


if __name__ == "__main__":
    unittest.main()
