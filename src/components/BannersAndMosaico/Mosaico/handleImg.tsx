'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ImgProps {
  href: string;
  desktopSrc: string;
  mobileSrc: string;
  nameGrid: 'phone' | 'perfume';
}

export function HandleImg({ href, nameGrid, desktopSrc, mobileSrc }: ImgProps) {
  const size = useMediaQuery();
  const lg = 1023;

  const changeImg = size.screenWidth > lg;
  const src = changeImg ? desktopSrc : mobileSrc;

  return (
    <Link
      href={href}
      prefetch={false}
      className={`${nameGrid} max-w-[570px] w-full lg:max-w-none lg:w-auto`}
    >
      <Image
        src={src}
        width={270}
        height={284}
        alt={nameGrid}
        className="w-full"
      />
    </Link>
  );
}
