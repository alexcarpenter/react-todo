import * as React from 'react';
import cn from 'classnames';

import { Displays, SpacingScale } from '../types';

interface Props {
  /**
   * Define the element type
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Control the display box type of an element.
   * @default null
   */
  display?: Displays | Displays[];
  /**
   * Control the horizontal space between elements using the space-x-{amount} utilities.
   * @default null
   */
  sx?: Exclude<SpacingScale, "auto"> | Exclude<SpacingScale, "auto">[];
  /**
   * Control the vertical space between elements using the space-y-{amount} utilities.
   * @default null
   */
  sy?: Exclude<SpacingScale, "auto"> | Exclude<SpacingScale, "auto">[];
};

const Box: React.FC<Props> = ({
  as: Component = 'div',
  display,
  sx,
  sy,
  children,
}) => {
  return (
    <Component
      className={cn({
        [`${display}`]: display,
        [`space-x-${sx}`]: sx,
        [`space-y-${sy}`]: sy,
      })}
    >
      {children}
    </Component>
  );
};

export default Box;
