import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ onClick, children, disabled = false, variant = 'primary' }: ButtonProps) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      data-testid="button"
    >
      {children}
    </button>
  );
}
