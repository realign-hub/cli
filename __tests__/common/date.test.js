const date = require('../../src/common/date').default;

test('date.format', () => {
  expect(date.format(new Date(1618588748440))).toBe('2021-04-16 23:59:08');
});
