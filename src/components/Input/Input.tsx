import * as React from 'react';
import cn from 'classnames';

import { base, sizes } from './styles';

type InputProps = {
  size?: keyof typeof sizes;
  name: string;
  isInvalid?: boolean;
};

const Input: React.FC<InputProps & React.HTMLAttributes<HTMLInputElement>> = ({
  size = 'md',
  isInvalid,
  ...props
}) => {
  return (
    <input
      {...props}
      className={cn(base, sizes[size], {
        'border-red-700': isInvalid,
      })}
    />
  );
};

export default Input;
