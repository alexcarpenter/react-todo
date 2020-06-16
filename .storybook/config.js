import { configure } from '@storybook/react';

import { setDefaults } from 'react-storybook-addon-props-combinations';

setDefaults({
  // overwrite global defaults here
});

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
