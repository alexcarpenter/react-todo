import * as React from 'react';
import cn from 'classnames';

interface Props {
  inline?: boolean
}

const FormControl: React.FC<Props> = ({
  inline = false,
  children
}) => {
  return <div className={cn(
    'w-full flex',
    {
      'space-y-1 flex-col': !inline,
      'space-x-4 items-center': inline
    }
  )}>{children}</div>
}

export default FormControl;