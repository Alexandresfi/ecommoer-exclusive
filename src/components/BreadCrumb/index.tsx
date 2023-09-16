'use client';
import { formatProductName } from '@/utils/formatProductName';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface Props {
  name: string;
  isBack?: boolean;
}

export function BreadBrumb({ name, isBack = false }: Props) {
  const router = useRouter();
  return (
    <nav className="my-10 px-5 xl:px-0">
      <ul className="text-black text-sm lg:text-base flex flex-wrap items-center gap-2">
        <li className=" underline">
          <Link href="/">Home</Link>
        </li>
        {isBack && (
          <>
            <span>/</span>
            <li
              className="underline cursor-pointer"
              onClick={() => router.back()}
            >
              Voltar
            </li>
          </>
        )}
        <span>/</span>
        <li className="font-bold">{formatProductName(name)}</li>
      </ul>
    </nav>
  );
}
