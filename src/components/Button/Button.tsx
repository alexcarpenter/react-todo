import * as React from 'react';
import cn from 'classnames';

type ButtonProps = {
  size?: 'default' | 'sm' | 'lg',
  variant?: 'primary' | 'secondary',
  type?: 'button' | 'submit',
  disabled?: boolean,
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const sizes = {
  default: 'px-5 py-3',
  sm: 'text-sm px-2 py-1',
  lg: 'text-lg px-6 py-4'
}

const variants = {
  primary: 'bg-blue-700 hover:bg-blue-800 border-blue-700 hover:border-blue-800',
  secondary: 'bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800'
}

const Button: React.FC<ButtonProps> = ({
  size = 'default',
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
          'text-white bordered rounded',
          [
            sizes[size],
            variants[variant],
            { 'opacity-50 cursor-not-allowed': disabled }
          ]
        )
      }>{children}</button>
  )
}

export default Button;