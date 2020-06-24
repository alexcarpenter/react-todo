import * as React from 'react';
import cn from 'classnames';

import { base, sizes } from './styles';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  size?: keyof typeof sizes;
  name: string;
  isInvalid?: boolean;
};

const Input: React.FC<Props> = ({ size = 'md', isInvalid, ...props }) => {
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
