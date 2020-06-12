import * as React from 'react';
import cn from 'classnames';

import { base, sizes, variants } from './styles';

type ButtonProps = {
  size?: keyof typeof sizes,
  variant?: keyof typeof variants,
  children: React.ReactNode,
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  size = 'md',
  variant = 'primary',
  type = 'button',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={
        cn(
          base,
          sizes[size],
          {
            [variants[variant].enabled]: !disabled,
            [variants[variant].disabled]: disabled
          }
        )
      }
      disabled
    >{children}</button>
  )
}

export default Button;