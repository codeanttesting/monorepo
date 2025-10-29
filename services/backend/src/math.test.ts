import { add, subtract, divide, multiply, power, modulo } from './math';

describe('Math utilities', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(5, 4)).toBe(20);
    });
  });

  describe('power', () => {
    it('should calculate power of a number', () => {
      expect(power(2, 3)).toBe(8);
    });

    it('should handle power of 0', () => {
      expect(power(5, 0)).toBe(1);
    });
  });

  describe('modulo', () => {
    it('should calculate modulo of two numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    it('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo with zero');
    });
  });

  // Note: factorial function is NOT tested - intentionally for coverage demo
});
