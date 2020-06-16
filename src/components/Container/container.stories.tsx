import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from './';

export default { title: 'Container' };

storiesOf('Container', module).add('Default', () => (
  <Container>Hello world</Container>
));
