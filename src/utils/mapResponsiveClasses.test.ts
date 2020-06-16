import { mapResponsiveClasses } from './mapResponsiveClasses';

test('Responsive display classes', () => {
  expect(
    mapResponsiveClasses(['block', 'flex'], (b, v, i) =>
      i === 0 ? `${v}` : `${b}:${v}`,
    ),
  ).toBe('block sm:flex');
});

test('Responsive margin classes', () => {
  expect(
    mapResponsiveClasses([1, 2, 4], (b, v, i) =>
      i === 0 ? `m-${v}` : `${b}:m-${v}`,
    ),
  ).toBe('m-1 sm:m-2 md:m-4');
});

test('Null values return empty string', () => {
  expect(
    mapResponsiveClasses([1, null, 4], (b, v, i) =>
      i === 0 ? `m-${v}` : `${b}:m-${v}`,
    ),
  ).toBe('m-1 md:m-4');
});

test('Array length greater than breakpoints array length', () => {
  expect(
    mapResponsiveClasses([1, 2, 4, 5, 6, 10], (b, v, i) =>
      i === 0 ? `m-${v}` : `${b}:m-${v}`,
    ),
  ).toBe('m-1 sm:m-2 md:m-4 lg:m-5 xl:m-6');
});
