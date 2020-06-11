import * as React from 'react';
import cn from 'classnames';

type InputProps = {
  type?: 'text' | 'number',
  size?: 'default' | 'sm',
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const sizes = {
  default: 'px-5 py-3',
  sm: 'text-sm px-2 py-1',
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'default',
  ...props
}) => {
  return (
    <input {...props} type={type} className={cn('border rounded', [sizes[size]])} />
  )
}

export default Input;