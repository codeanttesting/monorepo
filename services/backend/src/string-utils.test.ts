import { capitalize, reverse, isPalindrome } from './string-utils';

describe('String utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });
  });

  // Note: isPalindrome is tested but countWords and truncate are NOT - intentionally for coverage demo
  describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  });
});
