'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Heart, ShoppingCart, User } from '@phosphor-icons/react';

import { SearchInput } from './Search';
import { IconMinicart } from '../IconMinicart';

interface IconProps {
  handleOpenModal: () => void;
}

export function HeaderActions({ handleOpenModal }: IconProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
      <SearchInput />

      <div className="hidden md:flex items-center gap-1.5">
        <Link
          href="/wishlist"
          className="w-8 h-8 flex justify-center items-center"
        >
          {pathname === '/wishlist' ? (
            <Heart size={25} weight="fill" color="#db4444" />
          ) : (
            <Heart size={25} alt="link wishlist" />
          )}
        </Link>

        <IconMinicart handleOpenModal={handleOpenModal} />

        <button className="flex justify-center items-center w-8 h-8">
          <User size={25} alt="sigIn" />
        </button>
      </div>
    </div>
  );
}
