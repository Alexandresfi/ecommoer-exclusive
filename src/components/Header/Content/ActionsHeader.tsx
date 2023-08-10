'use client';
import { usePathname } from 'next/navigation';
import { MagnifyingGlass, Heart, ShoppingCart } from '@phosphor-icons/react';
import Link from 'next/link';

export function HeaderActions() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6 w-2/5">
      <div className="flex justify-between items-center py-[7px] px-3 bg-white-secondary max-w-[246px] w-full h-8 rounded">
        <input
          type="text"
          name="search"
          className="bg-white-secondary"
          placeholder="O que você procura?"
        />
        <button className="bg-transparent border-transparent">
          <MagnifyingGlass size={25} />
        </button>
      </div>

      <div className="flex items-center">
        <Link
          href="/wishlist"
          className="bg-transparent border-transparent mr-4 w-8 h-8 flex items-center"
        >
          {pathname === '/wishlist' ? (
            <Heart size={25} weight="fill" color="#db4444" />
          ) : (
            <Heart size={25} />
          )}
        </Link>

        <button className="bg-transparent border-transparent w-8 h-8">
          <ShoppingCart size={25} />
        </button>
      </div>
    </div>
  );
}
