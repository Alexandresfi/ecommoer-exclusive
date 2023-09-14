import { ReactNode } from 'react';
import { MinicartProvider } from './MinicartContext';
import { WishlistProvider } from './WishlistContext';

interface ChildrenProps {
  children: ReactNode;
}

export function AppProvider({ children }: ChildrenProps) {
  return (
    <MinicartProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </MinicartProvider>
  );
}
