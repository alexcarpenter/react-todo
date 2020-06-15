import * as React from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FormControl } from './components/FormControl';
import { Radio, RadioGroup } from './components/Radio';

function App() {
  return (
    <>
      <Container>
        <Box mt={5} mb={5}>
          Box
        </Box>
        <div className="flex items-end space-x-4 mb-4">
          <RadioGroup>
            <Radio name="filter" value="all" disabled>
              All
            </Radio>
            <Radio name="filter" value="completed">
              Completed
            </Radio>
            <Radio name="filter" value="archived">
              Archived
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex items-end space-x-4 mb-4">
          <FormControl>
            <Label htmlFor="addTodo">Add todo</Label>
            <Input id="addTodo" name="addTodo" placeholder="Buy groceries" />
          </FormControl>
          <Button>Add todo</Button>
        </div>
        <div className="flex items-end space-x-4 mb-4">
          <FormControl inline>
            <Label htmlFor="addTodo" isRequired>
              Add todo
            </Label>
            <Input
              id="addTodo"
              name="addTodo"
              placeholder="Buy groceries"
              isInvalid
            />
          </FormControl>
          <Button>Add todo</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button outlined>Primary button</Button>
          <Button outlined variant="secondary" disabled>
            Secondary button
          </Button>
          <Button outlined variant="neutral">
            Neutral button
          </Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button size="sm">Primary button</Button>
          <Button size="sm" variant="secondary">
            Secondary button
          </Button>
          <Button size="sm" variant="neutral">
            Neutral button
          </Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button disabled>Primary button</Button>
          <Button disabled variant="secondary">
            Secondary button
          </Button>
          <Button disabled variant="neutral">
            Neutral button
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
