import * as React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="o-container">{children}</div>
}

export default Container;