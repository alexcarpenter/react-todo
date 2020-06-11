import * as React from 'react';

const Container: React.FC<{
  children: React.ReactNode,
}> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>
}

export default Container;