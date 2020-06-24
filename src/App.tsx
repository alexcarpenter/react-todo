import * as React from 'react';
import { v4 as uuid } from "uuid";
import { Button } from './components/Button';
import { Box } from './components/Box';
import { List } from './components/List';
import { Checkbox } from './components/Checkbox';
import { Container } from './components/Container';
import { Radio, RadioGroup } from './components/Radio';

interface ITodo {
  id: string;
  value: string;
  completed: boolean;
}

const initialTodos: ITodo[] = [
  { id: uuid(), value: 'Call mom', completed: false },
  { id: uuid(), value: 'Mow the lawn', completed: false },
  { id: uuid(), value: 'Clean the gutters', completed: true },
]

function App() {
  return (
    <Container>
      <Button type="submit" onClick={e => console.log(e)}>Hello world</Button>
    </Container>
  );
}

export default App;
