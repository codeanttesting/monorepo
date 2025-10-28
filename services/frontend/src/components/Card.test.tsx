import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  it('should render title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(<Card title="Title" content="Content" footer="Footer Text" />);
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
  });

  it('should not render footer when not provided', () => {
    const { container } = render(<Card title="Title" content="Content" />);
    const footer = container.querySelector('footer');
    expect(footer).not.toBeInTheDocument();
  });

  it('should have proper test id', () => {
    render(<Card title="Title" content="Content" />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
