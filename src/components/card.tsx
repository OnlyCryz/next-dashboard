import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="flex flex-col shadow-md bg-white rounded-md p-4 h-auto gap-2">{children}</div>;
};
