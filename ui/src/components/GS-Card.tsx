import React from 'react';

interface GSCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export function GSCard({ title, children, className, footer }: GSCardProps) {
  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg flex flex-col ${className}`}>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <div>{children}</div>
      </div>
      {footer && <div className="border-t border-gray-700 p-4 mt-auto">{footer}</div>}
    </div>
  );
}
