import * as React from 'react';

const Label: React.FC<{
  isRequired?: boolean
} & React.HTMLProps<HTMLLabelElement>> = ({
  children,
  isRequired = false,
  ...props
}) => {
    return (
      <label
        {...props}
        className="text-gray-700 text-sm"
      >
        {children}
        {isRequired && (<span className="text-red-700 ml-1">*</span>)}
      </label>
    )
  }

export default Label;