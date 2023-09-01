'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import { List } from '@phosphor-icons/react';

import { Minicart } from '@/components/Minicart';
import { SearchInput } from '../Search';
import { IconMinicart } from '../../IconMinicart';
import LogoIcon from '../../../../assets/Logo.svg';

export function MobileHeader() {
  const [openMinicart, setOpenMinicart] = useState(false);

  function handleOpenModal() {
    setOpenMinicart((state) => !state);
  }

  return (
    <div className=" bg-white-default">
      <header className="flex justify-between items-center pt-10 pb-4 px-5 border-b border-white-primary w-full">
        <button className="flex justify-center items-center w-8 h-8">
          <List size={25} />
        </button>

        <Link href="/">
          <Image src={LogoIcon} width={118} height={24} alt="logo Exclusive" />
        </Link>

        <IconMinicart handleOpenModal={handleOpenModal} />
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
