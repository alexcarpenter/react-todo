const breakpoints = ['sm', 'md', 'lg', 'xl'];

export const mapResponsiveClasses = <T>(
  array: T[],
  callbackFn: (breakpoint: string, value: string, index: number) => any,
) => {
  return array
    .map((value: string, index: number) => {
      return callbackFn(breakpoints[index - 1], value, index);
    })
    .filter(Boolean)
    .join(' ');
};
