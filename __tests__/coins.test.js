import changeCounter from '../src/coins.js';

describe('changeCounter', () => {
  it('should return change in pennies', () => {
    expect(changeCounter(0)).toEqual('Pennies: 0');
  });
});