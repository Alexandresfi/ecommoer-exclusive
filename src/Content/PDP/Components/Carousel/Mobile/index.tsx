'use client';
import Image from 'next/image';
import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { Props } from '../Desktop';
import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';

export function CarouselMobilePDP({ pictures }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    }
  });
  return (
    <div className="relative">
      <button
        className="absolute top-0 bottom-0 left-0 z-10"
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
        disabled={currentSlide === 0}
      >
        <CaretDoubleLeft size={24} />
      </button>

      <div>
        <div ref={sliderRef} className="keen-slider">
          {pictures.map((picture, index) => (
            <div
              ref={sliderRef}
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <Image
                src={picture.url}
                width={200}
                height={200}
                alt={`image ${index}`}
              />
            </div>
          ))}
        </div>

        <div className="dots flex justify-center items-center gap-8 py-3">
          {Array.from({ length: pictures.length }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`border border-gray-400 rounded-full w-4 h-4 ${
                currentSlide === idx ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute top-0 bottom-0 right-0"
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
        disabled={
          currentSlide ===
          (instanceRef.current?.track.details.slides.length ?? 0) - 1
        }
      >
        <CaretDoubleRight size={24} />
      </button>
    </div>
  );
}
