import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { Minicart } from '@/components/Minicart';
import { NaveBar } from '../NavBar';
import { HeaderActions } from '../ActionsHeader';
import LogoIcon from '../../../../assets/Logo.svg';

export function DesktopHeader() {
  const [openMinicart, setOpenMinicart] = useState(false);

  function handleOpenModal() {
    setOpenMinicart((state) => !state);
  }
  return (
    <div className=" bg-white-default">
      <header className="flex justify-between items-center pt-10 pb-4 md:px-5 lg:px-0 border-b border-white-primary max-w-container m-auto w-full">
        <Link href="/">
          <Image src={LogoIcon} width={118} height={24} alt="logo Exclusive" />
        </Link>
        <NaveBar />
        <HeaderActions handleOpenModal={handleOpenModal} />
      </header>
      <Minicart
        open={openMinicart}
        className="min-h-full ml-auto z-30 absolute top-0 bg-transparent w-full"
        oncloseModal={handleOpenModal}
      />
    </div>
  );
}
