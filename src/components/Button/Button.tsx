import * as React from 'react';
import cn from 'classnames';

import { base, sizes, variants } from './button.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Modify the size of the button
   * @default 'md'
   */
  size?: keyof typeof sizes;
  /**
   * Choose button intent
   * @default primary
   */
  variant?: keyof typeof variants;
  /**
   * Remove fill and outline button
   * @default false
   */
  outlined?: boolean;
  /**
   * Make button fill its available space
   * @default false
   */
  block?: boolean;
  /**
   * Return a React node
   */
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
