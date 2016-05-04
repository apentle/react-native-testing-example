jest.unmock('../square');

describe('square', () => {
  it('3 square to equal 9', () => {
    const square = require('../square');
    expect(square(3)).toEqual(9);
  });
});
