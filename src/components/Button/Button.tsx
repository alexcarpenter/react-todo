import * as React from 'react';
import cn from 'classnames';

import { base, sizes, variants } from './button.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  outlined?: boolean;
  /**
   * Make button fill its available space
   * @default false
   */
  block?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  size = 'md',
  variant = 'primary',
  outlined = false,
  block = false,
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
        'w-full': block,
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
