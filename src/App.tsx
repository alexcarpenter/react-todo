import * as React from 'react';
import { v4 as uuid } from "uuid";

import { Box } from './components/Box';
import { Container } from './components/Container';
import { List } from './components/List';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

interface ITodo {
  id: string,
  value: string,
  completed: boolean
}

const initialTodos: ITodo[] = [
  { id: uuid(), value: 'Call mom', completed: false },
  { id: uuid(), value: 'Mow the lawn', completed: false },
  { id: uuid(), value: 'Clean the gutters', completed: true },
]

function App() {
  // const [filter, setfilter] = React.useState('');
  const [todos, setTodos] = React.useState(initialTodos);

  function addTodo(value: string) {
    setTodos([
      ...todos,
      {
        id: uuid(),
        value,
        completed: false
      }
    ]);
  }

  function removeTodo(id: string) {
    const newTodos = [...todos];
    setTodos(
      newTodos.filter(todo => todo.id !== id)
    );
  }

  function toggleTodo(id: string) {
    const index = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos);
  }

  return (
    <Container>
      <Box sy={6}>
        <TodoForm onSubmit={value => addTodo(value)} />
        <List>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onRemove={id => removeTodo(id)}
              onToggle={id => toggleTodo(id)}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;
