import Image from 'next/image';
import Link from 'next/link';

import { NaveBar } from '../NavBar';
import { HeaderActions } from '../ActionsHeader';

import LogoIcon from '../../../../assets/Logo.svg';

export function DesktopHeader() {
  return (
    <header className="flex justify-between items-center pt-10 pb-4 border-b border-white-primary max-w-container m-auto w-full">
      <Link href="/">
        <Image src={LogoIcon} width={118} height={24} alt="logo Exclusive" />
      </Link>
      <NaveBar />
      <HeaderActions />
    </header>
  );
}
