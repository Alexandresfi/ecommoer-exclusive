'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { FooterDesktop } from './Components/Desktop';
import { FooterMobile } from './Components/Mobile';

export function HandleLayoutFooter() {
  const size = useMediaQuery();

  const md = 714;
  const change = size.screenWidth > md;

  return <>{change ? <FooterDesktop /> : <FooterMobile />}</>;
}
