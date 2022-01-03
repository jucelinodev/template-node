import { sum } from '.';

describe('Text', () => {
  it('should return the sum of 2 plus 2', async () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
