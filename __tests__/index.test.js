const { authenticateUser, addEntry, calculateBudget } = require('../src');

describe('authentication', () => {
  test('valid credentials', () => {
    expect(authenticateUser('user', 'password')).toBe(true);
  });
  test('invalid credentials', () => {
    expect(authenticateUser('u', 'p')).toBe(false);
  });
});

describe('data entry', () => {
  test('adds entry to list', () => {
    const entries = [];
    addEntry({ amount: 5 }, entries);
    expect(entries.length).toBe(1);
  });
});

describe('budget calculations', () => {
  test('sums amounts', () => {
    const entries = [{ amount: 2 }, { amount: 3 }];
    expect(calculateBudget(entries)).toBe(5);
  });
});
