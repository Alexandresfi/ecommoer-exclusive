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
    <nav className="max-w-[30%] w-full">
      <ul className="flex items-center justify-between text-base text-black ">
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
