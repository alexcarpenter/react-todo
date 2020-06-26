import * as React from 'react';
import { XCircle } from 'react-feather';

import { Box } from '../Box';
import { Checkbox } from '../Checkbox';

interface ITodo {
  id: string;
  value: string;
  completed: boolean;
}

interface ITodoProps {
  todo: ITodo;
  onRemove(id: string): void;
  onToggle(id: string): void;
}

const Todo: React.FC<ITodoProps> = (props) => {
  const onRemove = () => props.onRemove(props.todo.id);
  const onToggle = () => props.onToggle(props.todo.id);
  return (
    <Box key={props.todo.id} display="flex" justify="between" align="center">
      <Checkbox
        checked={props.todo.completed}
        onChange={onToggle}
      >
        {props.todo.value}
      </Checkbox>
      <button className="opacity-0 hover:opacity-100 focus:opacity-100" onClick={onRemove}>
        <span className="sr-only">Remove</span>
        <XCircle size="1em" color="#4a5568" />
      </button>
    </Box>
  )
}

export default Todo