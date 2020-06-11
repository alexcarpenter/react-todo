import * as React from 'react';

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="c-list">
    {React.Children.map(children, child => <li className="c-list__item">{child}</li>)}
  </ul>
}

export default List;