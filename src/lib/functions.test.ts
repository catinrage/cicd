import { describe, test, expect } from 'vitest';
import { add } from './functions';

describe('functions', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
