import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './';

export default { title: 'Box' };

storiesOf('Box', module)
  .add('Default', () => <Box>Hello world</Box>)
  .add('With flexbox and horizontal space between', () => (
    <Box display="flex" sx={6}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Box>
  ))
  .add('With vertical space between', () => (
    <Box sy={6}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Box>
  ))
  .add('As an article', () => (
    <Box as="article" sy={4}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quaerat
        provident atque aliquam, facilis rem recusandae sed animi nesciunt
        consectetur reiciendis ut eum dolorum voluptatum maxime reprehenderit
        blanditiis dicta obcaecati!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quaerat
        provident atque aliquam, facilis rem recusandae sed animi nesciunt
        consectetur reiciendis ut eum dolorum voluptatum maxime reprehenderit
        blanditiis dicta obcaecati!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quaerat
        provident atque aliquam, facilis rem recusandae sed animi nesciunt
        consectetur reiciendis ut eum dolorum voluptatum maxime reprehenderit
        blanditiis dicta obcaecati!
      </p>
    </Box>
  ));
