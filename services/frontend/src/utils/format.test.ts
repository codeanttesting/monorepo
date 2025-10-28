import { formatCurrency, formatPercentage } from './format';

describe('Format utilities', () => {
  describe('formatCurrency', () => {
    it('should format currency', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });
  });

  describe('formatPercentage', () => {
    it('should format percentage', () => {
      expect(formatPercentage(0.5)).toBe('50.00%');
    });

    it('should handle custom decimals', () => {
      expect(formatPercentage(0.333, 1)).toBe('33.3%');
    });
  });

  // Note: formatDate and slugify are NOT tested - intentionally for coverage demo
});
