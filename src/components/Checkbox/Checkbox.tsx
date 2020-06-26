import * as React from 'react';
import cn from 'classnames';

const Checkbox: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  disabled = false,
  checked,
  children,
  ...props
}) => {
  return (
    <label className="inline-flex items-center">
      <input {...props} type="checkbox" className="leading-tight" checked={checked} />
      <span
        className={cn('ml-2 text-gray-700 text-sm', {
          'opacity-50': disabled || checked,
          'line-through': checked,
        })}
      >
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
