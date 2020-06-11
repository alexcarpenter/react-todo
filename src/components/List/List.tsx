import * as React from 'react';

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="divide-y divide-gray-300">
    {React.Children.map(children, child => <li className="py-3">{child}</li>)}
  </ul>
}

export default List;