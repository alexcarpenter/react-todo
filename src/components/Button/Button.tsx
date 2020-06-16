import * as React from 'react';
import cn from 'classnames';

import { base, sizes, variants } from './styles';

type ButtonOwnProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  outlined?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<
  ButtonOwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = 'md',
  variant = 'primary',
  outlined = false,
  type = 'button',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={cn(base, sizes[size], {
        [variants[variant].enabled]: !disabled && !outlined,
        [variants[variant].disabled]: disabled && !outlined,
        [variants[variant].outlined]: !disabled && outlined,
        [variants[variant].outlinedDisabled]: disabled && outlined,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
