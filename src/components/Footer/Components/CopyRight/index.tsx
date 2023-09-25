'use client';
import { Copyright } from '@phosphor-icons/react';

export function CopyRight() {
  return (
    <div className="border-t border-white-default opacity-40 pt-4 flex justify-center gap-2 w-full mt-[60px]">
      <Copyright size={25} />
      <p>Copyright Rimel 2022. All right reserved</p>
    </div>
  );
}
