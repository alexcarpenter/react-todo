import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { Button } from './';

storiesOf('Button', module).add(
  'Standard usage',
  withPropsCombinations(Button, {
    disabled: [false, true],
    onClick: [action('clicked')],
    children: ['hello world'],
  }),
);
