'use client';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  category: string;
}
export function SeeMoreButton({ children, category, ...res }: ButtonProps) {
  const router = useRouter();

  const handleClickLink = async () => {
    await router.push(`/${category}`);
  };

  return (
    <button
      {...res}
      onClick={handleClickLink}
      className="bg-orange-secondary text-white-default flex justify-center items-center rounded py-4 px-12 m-auto mt-[60px] hover:bg-orange-secondaty-hover transition-colors"
    >
      {children}
    </button>
  );
}
