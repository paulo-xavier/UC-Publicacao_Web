const { multiply } = require('./math');

test('Multiply two positive numbers', () => {
    expect(multiply(2,3)).toBe(6);
});

test('Multiply by zero', () => {
    expect(multiply(5,0)).toBe(0);
});