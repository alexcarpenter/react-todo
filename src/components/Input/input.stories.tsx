import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './';

export default { title: 'Input' };

storiesOf('Input', module)
  .add('Default', () => <Input name="fName" />)
  .add('Small', () => <Input name="fName" size="sm" />)
  .add('Invalid', () => <Input name="fName" isInvalid={true} />);
