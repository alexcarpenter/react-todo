import * as React from 'react';
import cn from 'classnames';

type SpacingProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
};

type BoxProps = {
  as?: any;
};

const Box: React.FC<SpacingProps & BoxProps> = ({
  as: Component = 'div',
  children,
  ...props
}) => {
  const { mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py } = props;
  return (
    <Component
      className={cn({
        [`mt-${mt}`]: mt,
        [`mr-${mr}`]: mr,
        [`mb-${mb}`]: mb,
        [`ml-${ml}`]: ml,
        [`mx-${mx}`]: mx,
        [`my-${my}`]: my,
        [`pt-${pt}`]: pt,
        [`pr-${pr}`]: pr,
        [`pb-${pb}`]: pb,
        [`pl-${pl}`]: pl,
        [`px-${px}`]: px,
        [`py-${py}`]: py,
      })}
    >
      {children}
    </Component>
  );
};

export default Box;
