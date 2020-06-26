import * as React from 'react';
import cn from 'classnames';

import { base, sizes } from './input.styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: keyof typeof sizes;
  isInvalid?: boolean;
};

const Input: React.FC<Props> = ({
  id,
  inputSize = 'md',
  isInvalid,
  ...props
}: Props) => {
  return (
    <input
      {...props}
      id={id}
      name={id}
      className={cn(base, sizes[inputSize], {
        'border-red-700': isInvalid,
      })}
    />
  );
};

export default Input;
