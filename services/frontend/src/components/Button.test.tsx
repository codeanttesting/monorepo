import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should render children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  it('should apply primary variant class', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByTestId('button')).toHaveClass('btn-primary');
  });

  it('should apply secondary variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByTestId('button')).toHaveClass('btn-secondary');
  });

  it('should default to primary variant', () => {
    render(<Button>Default</Button>);
    expect(screen.getByTestId('button')).toHaveClass('btn-primary');
  });
});
