'use client';

import Link from 'next/link';
import { Heart } from '@phosphor-icons/react';

interface PathNameProps {
  pathname: string;
}

export function IconWishlist({ pathname }: PathNameProps) {
  return (
    <Link href="/wishlist" className="w-8 h-8 flex justify-center items-center">
      {pathname === '/wishlist' ? (
        <Heart size={25} weight="fill" color="#db4444" />
      ) : (
        <Heart size={25} alt="link wishlist" />
      )}
    </Link>
  );
}
