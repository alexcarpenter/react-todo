import * as React from 'react';
import { v4 as uuid } from "uuid";

import { Box } from './components/Box';
import { Container } from './components/Container';
import { List } from './components/List';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { ITodo } from './types';

const initialTodos: ITodo[] = [
  { id: uuid(), value: 'Call mom', completed: false },
  { id: uuid(), value: 'Mow the lawn', completed: false },
  { id: uuid(), value: 'Clean the gutters', completed: true },
]

function App() {
  const [filter, setFilter] = React.useState('all');
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
        {/* <fieldset>
          <legend>Filter todos</legend>
          <label htmlFor="all"><input type="radio" name="filter" id="all" checked={filter === 'all'} onChange={() => { }} />All</label>
          <label htmlFor="active"><input type="radio" name="filter" id="active" checked={filter === 'active'} onChange={() => { }} />Active</label>
          <label htmlFor="completed"><input type="radio" name="filter" id="completed" checked={filter === 'completed'} onChange={() => { }} />Completed</label>
        </fieldset> */}
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
