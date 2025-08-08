import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-200/30 border border-slate-200/60 transition-all duration-300 p-6 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default Card;