import React from 'react';

interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

export function Card({ title, content, footer }: CardProps) {
  return (
    <div className="card" data-testid="card">
      <h2>{title}</h2>
      <p>{content}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  );
}
