import * as React from 'react';
import cn from 'classnames';

const Radio: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({
  disabled = false,
  children,
  ...props
}) => {
    return (
      <label className="inline-flex items-center">
        <input {...props} type="radio" className="leading-tight" />
        <span
          className={cn('ml-2 text-gray-700 text-sm', {
            'opacity-50': disabled,
          })}
        >
          {children}
        </span>
      </label>
    );
  };

export default Radio;
