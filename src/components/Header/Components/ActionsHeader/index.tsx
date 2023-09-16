'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Heart, ShoppingCart, User } from '@phosphor-icons/react';

import { SearchInput } from '../SearchBar';
import { IconMinicart } from '../IconMinicart';
import { IconWishlist } from '../IconWishlist';

interface IconProps {
  handleOpenModal: () => void;
}

export function HeaderActions({ handleOpenModal }: IconProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
      <SearchInput />

      <div className="hidden md:flex items-center gap-1.5">
        <IconWishlist pathname={pathname} />

        <IconMinicart handleOpenModal={handleOpenModal} />

        <button className="flex justify-center items-center w-8 h-8">
          <User size={25} alt="sigIn" />
        </button>
      </div>
    </div>
  );
}
