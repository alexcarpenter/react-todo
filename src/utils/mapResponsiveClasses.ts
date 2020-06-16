const breakpoints = ['sm', 'md', 'lg', 'xl'];

export const mapResponsiveClasses = (
  array: Array<string | number | null>,
  callbackFn: {
    (breakpoint: string, value: string | number | null, index: number): string;
  },
) => {
  return array
    .map((value, index) => {
      // Return early if the user provides more values then breakpoints length.
      if (index > breakpoints.length) return;
      // Allow users to skip breakpoints by passing a null value.
      // This then gets filtered out below before returning the classes.
      if (value === null) return '';
      return callbackFn(breakpoints[index - 1], value, index);
    })
    .filter(Boolean)
    .join(' ');
};
