'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DesktopHeader } from './Desktop';
import { MobileHeader } from './Mobile';

export function HandleHeader() {
  const size = useMediaQuery();

  const md = 714;
  const change = size.screenWidth > md;
  return <>{change ? <DesktopHeader /> : <MobileHeader />}</>;
}
