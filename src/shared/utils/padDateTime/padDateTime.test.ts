import padDateTime from '.';

describe('padDateTime', () => {
  test('should pad single digit numbers with 0', () => {
    const unpaddedInteger = 1;
    const expectedPaddedInteger = '01';

    const paddedInteger = padDateTime(unpaddedInteger);

    expect(paddedInteger).toBe(expectedPaddedInteger);
  });
});
