import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './';

export default { title: 'List' };

storiesOf('List', module).add('Default', () => (
  <List>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
  </List>
));
