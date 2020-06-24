import * as React from 'react';
import cn from 'classnames';

interface Props extends React.HTMLProps<HTMLLabelElement> {
  hidden?: boolean;
  isRequired?: boolean;
}

const Label: React.FC<Props> = ({ children, hidden = false, isRequired = false, ...props }) => {
  return (
    <label
      {...props}
      className={cn('text-gray-700 text-sm', { 'sr-only': hidden })}
    >
      {children}
      {isRequired && (
        <span>
          <span className="sr-only">Is required</span>
          <span className="text-red-700 ml-1">*</span>
        </span>
      )}
    </label>
  );
};

export default Label;
