import * as React from 'react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { FormControl } from './components/FormControl';

function App() {
  return (
    <>
      <Container>
        <div className="flex items-end space-x-4 mb-4">
          <FormControl>
            <Label htmlFor="addTodo">Add todo</Label>
            <Input id="addTodo" name="addTodo" placeholder="Buy groceries" />
          </FormControl>
          <Button>Add todo</Button>
        </div>
        <div className="flex items-end space-x-4 mb-4">
          <FormControl inline>
            <Label htmlFor="addTodo" isRequired>Add todo</Label>
            <Input id="addTodo" name="addTodo" placeholder="Buy groceries" isInvalid />
          </FormControl>
          <Button>Add todo</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button>Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="neutral">Neutral button</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button size="sm">Primary button</Button>
          <Button size="sm" variant="secondary">Secondary button</Button>
          <Button size="sm" variant="neutral">Neutral button</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button disabled>Primary button</Button>
          <Button disabled variant="secondary">Secondary button</Button>
          <Button disabled variant="neutral">Neutral button</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
