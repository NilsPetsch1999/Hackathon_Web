const fs = require('fs');
const path = require('path');
const assert = require('assert');

const componentPath = path.join(
  __dirname,
  '..',
  'src',
  'components',
  'comment-section',
  'CommentSection.tsx'
);
const cssPath = path.join(
  __dirname,
  '..',
  'src',
  'components',
  'comment-section',
  'comment-section.css'
);

const componentSource = fs.readFileSync(componentPath, 'utf8');
const cssSource = fs.readFileSync(cssPath, 'utf8');

assert(
  componentSource.includes('comment-card'),
  'Expected modern comment cards to be present in the markup.'
);
assert(
  componentSource.includes('comment-avatar'),
  'Expected comment avatars to be present in the markup.'
);
assert(
  componentSource.includes('comment-item'),
  'Expected structured comment list items in the markup.'
);
assert(
  /\.comment-card\s*\{[\s\S]*box-shadow/.test(cssSource),
  'Expected comment cards to have Material-like elevation.'
);
assert(
  /\.comment-avatar\s*\{[\s\S]*border-radius:\s*50%/.test(cssSource),
  'Expected avatar styling to be circular.'
);

console.log('comment-section tests passed');
