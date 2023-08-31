'use client';

import Link from 'next/link';
import Image from 'next/image';

import { List, ShoppingCart } from '@phosphor-icons/react';

import { SearchInput } from '../Search';
import LogoIcon from '../../../../assets/Logo.svg';
import { Minicart } from '@/components/Minicart';
import { useState } from 'react';

export function MobileHeader() {
  const [openMinicart, setOpenMinicart] = useState(false);

  function handleOpenModal() {
    setOpenMinicart((state) => !state);
  }

  return (
    <div>
      <header className="flex justify-between items-center pt-10 pb-4 px-5 border-b border-white-primary w-full">
        <button className="flex justify-center items-center w-8 h-8">
          <List size={25} />
        </button>

        <Link href="/">
          <Image src={LogoIcon} width={118} height={24} alt="logo Exclusive" />
        </Link>

        <button className="flex justify-center items-center w-8 h-8">
          <ShoppingCart
            size={25}
            alt="open minicart"
            onClick={handleOpenModal}
          />
        </button>
      </header>
      <SearchInput />
      <Minicart
        open={openMinicart}
        className="min-h-full ml-auto z-30 absolute top-0 bg-transparent w-full"
        oncloseModal={handleOpenModal}
      />
    </div>
  );
}
