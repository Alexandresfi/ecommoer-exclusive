'use client';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
interface TesteProps {
  nextSlider: (() => void) | undefined;
  prevSlider: (() => void) | undefined;
}

export function ArrowCarousel({ nextSlider, prevSlider }: TesteProps) {
  return (
    <div className="max-w-container m-auto hidden lg:flex lg:items-center lg:justify-end lg:gap-1 lg:translate-y-[-61px]">
      <button
        onClick={() => prevSlider && prevSlider()}
        className="lg:rounded-full lg:bg-white-primary flex justify-center items-center w-9 h-9 hover:drop-shadow-md "
      >
        {' '}
        <ArrowLeft size={20} alt="prev slider" />{' '}
      </button>
      <button
        onClick={() => nextSlider && nextSlider()}
        className="lg:rounded-full lg:bg-white-primary flex justify-center items-center w-9 h-9 hover:drop-shadow-md "
      >
        <ArrowRight size={20} alt="next slider" />
      </button>
    </div>
  );
}
