const searchCharacter = require('./logic');

test('checks for search function pure or not', () => {
  const actual = searchCharacter([], 'im');
  const expected = [];

  expect(actual).toEqual(expected);
});

test('checks for search function pure or not', () => {
  const actual = searchCharacter([{name: 'hakim'}], 'im');
  const expected = [{name: 'hakim'}];

  expect(actual).toEqual(expected);
});

test('checks for search function pure or not', () => {
  const actual = searchCharacter([{name: 'hakim'}, {name: 'jfimk'}], 'im');
  const expected = [{name: 'hakim'}, {name: 'jfimk'}];

  expect(actual).toEqual(expected);
});