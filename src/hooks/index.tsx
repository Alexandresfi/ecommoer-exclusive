import { ReactNode } from 'react';
import { MinicartProvider } from './MinicartContext';

interface ChildrenProps {
  children: ReactNode;
}

export function AppProvider({ children }: ChildrenProps) {
  return <MinicartProvider>{children}</MinicartProvider>;
}
