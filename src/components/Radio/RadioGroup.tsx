import * as React from 'react';
import cn from 'classnames';

const RadioGroup: React.FC<{ inline?: boolean }> = ({
  inline = false,
  children,
}) => {
  return (
    <fieldset
      className={cn('flex', {
        'space-x-4': inline,
        'flex-col space-y-2': !inline,
      })}
    >
      {children}
    </fieldset>
  );
};

export default RadioGroup;
