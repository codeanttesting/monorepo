import { unique, chunk, sum } from './array-utils';

describe('Array utilities', () => {
  describe('unique', () => {
    it('should remove duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
  });

  describe('sum', () => {
    it('should calculate sum of numbers', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });
  });

  // Note: flatten and average are NOT tested - intentionally for coverage demo
});
