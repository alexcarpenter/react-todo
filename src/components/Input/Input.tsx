import * as React from 'react';
import cn from 'classnames';

type InputProps = {
  type?: 'text' | 'number',
  size?: 'sm' | 'md',
  id: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

enum Sizes {
  sm = 'text-sm px-2 py-1',
  md = 'px-5 py-3',
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'md',
  id,
  ...props
}) => {
  return (
    <input {...props} id={id} type={type} className={cn('border rounded', [Sizes[size]])} />
  )
}

export default Input;