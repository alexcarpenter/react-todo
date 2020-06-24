import * as React from 'react';
import cn from 'classnames';

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  disabled = false,
  children,
  ...props
}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <label className="inline-flex items-center">
      <input {...props} onChange={() => setChecked(!checked)} type="checkbox" className="leading-tight" checked={checked} />
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
