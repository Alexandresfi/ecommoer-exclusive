'use client';
import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { CaretDoubleDown, CaretDoubleUp } from '@phosphor-icons/react';

interface Props {
  pictures: {
    url: string;
  }[];
  handleChangeImg: (url: string) => void;
}

export function ImgCarousel({ pictures, handleChangeImg }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rubberband: false,
    vertical: true,
    slides: {
      perView: 4,
      spacing: 16
    }
  });

  return (
    <div>
      <button
        disabled={pictures.length < 3}
        onClick={() => instanceRef.current?.prev()}
        className="text-black m-auto flex justify-center items-center bg-white-secondary hover:bg-white-primary mb-1 w-full"
      >
        <CaretDoubleUp size={25} />
      </button>

      <div>
        <div ref={sliderRef} className="keen-slider overflow-y-hidden">
          <ul className="h-[547px]">
            {pictures.map((picture, index) => (
              <li
                key={index}
                className="keen-slider__slide bg-white-primary flex justify-center items-center cursor-pointer"
                onClick={() => handleChangeImg(picture.url)}
              >
                <Image
                  src={picture.url}
                  width={121}
                  height={114}
                  alt={`product image ${index + 1}`}
                  className="w-[121px] h-[110px] object-scale-down"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        disabled={pictures.length < 3}
        onClick={() => instanceRef.current?.next()}
        className="text-black m-auto flex justify-center items-center bg-white-secondary hover:bg-white-primary mt-1 w-full"
      >
        <CaretDoubleDown size={25} />
      </button>
    </div>
  );
}
