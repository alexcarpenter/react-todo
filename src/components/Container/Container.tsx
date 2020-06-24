import * as React from 'react';

const Container: React.FC<{
  children: React.ReactNode,
}> = ({ children }) => {
  return <div className="container max-w-2xl mx-auto">{children}</div>
}

export default Container;
