'use client';

import Link from 'next/link';
import Image from 'next/image';

import { List, User } from '@phosphor-icons/react';

import { SearchInput } from '../Search';
import LogoIcon from '../../../../assets/Logo.svg';

export function MobileHeader() {
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
          <User size={25} alt="sigIn" />
        </button>
      </header>
      <SearchInput />
    </div>
  );
}
