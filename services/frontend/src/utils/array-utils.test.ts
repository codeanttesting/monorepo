import { unique, chunk, sum, flatten, average, max } from './array-utils';

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

    it('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });
  });

  describe('sum', () => {
    it('should calculate sum of numbers', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });
  });

  describe('flatten', () => {
    it('should flatten nested arrays', () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe('average', () => {
    it('should calculate average of numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return 0 for empty array', () => {
      expect(average([])).toBe(0);
    });
  });

  describe('max', () => {
    it('should find maximum number in array', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should throw error for empty array', () => {
      expect(() => max([])).toThrow('Cannot find max of empty array');
    });
  });

  // Note: min function is NOT tested - intentionally for coverage demo
});
