import { TopBar } from './Topbar';
import LogoIcon from '../../assets/Logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { NaveBar } from './Content/NavBar';
import { HeaderActions } from './Content/ActionsHeader';
export function Header() {
  return (
    <div>
      <TopBar />
      <header className="flex justify-between items-center pt-10 pb-4 px-7 lg:px-32 border-b border-white-primary">
        <Link href="/">
          <Image src={LogoIcon} width={118} height={24} alt="Exclusive" />
        </Link>
        <NaveBar />
        <HeaderActions />
      </header>
    </div>
  );
}
