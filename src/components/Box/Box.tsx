import * as React from 'react';
import cn from 'classnames';

import { AlignItems, Displays, SpacingScale, JustifyContent } from '../../types';

interface Props {
  /**
   * Define the element type
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Control the display box type of an element.
   * @link https://tailwindcss.com/docs/display
   * @default null
   */
  display?: Displays | Displays[];
  /**
   * Align items
   * @link https://tailwindcss.com/docs/align-items/
   */
  align?: AlignItems | AlignItems[];
  /**
   * Justify content
   * @link https://tailwindcss.com/docs/justify-content/
   */
  justify?: JustifyContent | JustifyContent[];
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
  align,
  justify,
  sx,
  sy,
  children,
}) => {
  return (
    <Component
      className={cn({
        [`${display}`]: display,
        [`items-${align}`]: align,
        [`justify-${justify}`]: justify,
        [`space-x-${sx}`]: sx,
        [`space-y-${sy}`]: sy,
      })}
    >
      {children}
    </Component>
  );
};

export default Box;
