import * as React from 'react';

const Control: React.FC<{
  type?: 'checkbox' | 'radio',
  children: React.ReactNode,
  handleChange: React.ReactEventHandler,
  [x: string]: any
}> = ({
  type = 'radio',
  children,
  handleChange,
  ...rest
}) => {
    return (
      <label className={`c-control c-control--${type}`}>
        <input type={type} onChange={e => handleChange(e)} {...rest} />
        <span className="c-control--indicator"></span>
        {children}
      </label>
    )
  }

export default Control;