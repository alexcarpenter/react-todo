import * as React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { FormControl } from '../FormControl';
import { Label } from '../Label';
import { Input } from '../Input';

interface ITodoForm {
  onSubmit(value: string): void;
}

const TodoForm: React.FC<ITodoForm> = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSubmit(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" align="end" sx={4}>
        <FormControl>
          <Label htmlFor="newTodo" hidden>Add todo</Label>
          <Input id="newTodo" value={value} onChange={handleChange} />
        </FormControl>
        <Button type="submit" disabled={value.length === 0}>Add todo</Button>
      </Box>
    </form>
  )
}

export default TodoForm;