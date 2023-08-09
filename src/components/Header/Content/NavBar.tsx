'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NaveBar() {
  const pathname = usePathname();
  const activeClassName = (valor: string) => {
    if (pathname === valor) {
      return 'border-b border-black pt-px';
    }
  };
  return (
    <nav className=" w-[30%]">
      <ul className="text-base text-black flex items-center justify-between">
        <li>
          <Link href="/" className={`${activeClassName('/')}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${activeClassName('/contact')}`}>
            Contato
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${activeClassName('/about')}`}>
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/signUp" className={`${activeClassName('/signUp')}`}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
