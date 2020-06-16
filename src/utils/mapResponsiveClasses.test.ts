import { mapResponsiveClasses } from './mapResponsiveClasses';

test('Responsive display classes', () => {
  expect(
    mapResponsiveClasses(['block', 'flex'], (b, v, i) =>
      i === 0 ? v : `${b}:${v}`,
    ),
  ).toBe('block sm:flex');
});
