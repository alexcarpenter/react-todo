import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ArrowDownCircle } from 'react-feather';
import { Button } from './';

storiesOf('Button/Primary', module)
  .add('Enabled', () => <Button>Hello world</Button>)
  .add('Outlined', () => <Button outlined>Hello world</Button>)
  .add('Disabled', () => <Button disabled>Hello world</Button>)
  .add('With icon', () => (
    <Button>
      <ArrowDownCircle /> <span>Hello world</span>
    </Button>
  ));

storiesOf('Button/Secondary', module)
  .add('Enabled', () => <Button variant="secondary">Hello world</Button>)
  .add('Outlined', () => (
    <Button variant="secondary" outlined>
      Hello world
    </Button>
  ))
  .add('Disabled', () => (
    <Button variant="secondary" disabled>
      Hello world
    </Button>
  ))
  .add('With icon', () => (
    <Button variant="secondary">
      <ArrowDownCircle /> <span>Hello world</span>
    </Button>
  ))
  .add('Full width', () => (
    <Button variant="secondary" fill>
      <ArrowDownCircle /> <span>Hello world</span>
    </Button>
  ));

storiesOf('Button/Neutral', module)
  .add('Enabled', () => <Button variant="neutral">Hello world</Button>)
  .add('Outlined', () => (
    <Button variant="neutral" outlined>
      Hello world
    </Button>
  ))
  .add('Disabled', () => (
    <Button variant="neutral" disabled>
      Hello world
    </Button>
  ))
  .add('With icon', () => (
    <Button variant="neutral">
      <ArrowDownCircle /> <span>Hello world</span>
    </Button>
  ));
