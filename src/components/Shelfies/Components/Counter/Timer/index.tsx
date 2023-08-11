import { Inter } from 'next/font/google';
import './styles.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700']
});

interface TimeProps {
  title: string;
  value: string;
}

export function ComponentTime({ title, value }: TimeProps) {
  function formatWithLeadingZero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="flex flex-col gap-y-1" style={inter.style}>
      <span className="font-medium text-xs leading-normal">{title}</span>
      <span className="font-bold text-base lg:text-[32px] lg:leading-[30px] tracking-[1.28px] flex items-center ">
        {formatWithLeadingZero(Number(value))}
      </span>
    </div>
  );
}
