'use client';
import Link from 'next/link';

import {
  Backpack,
  Camera,
  DesktopTower,
  DeviceMobile,
  GameController,
  Handbag,
  Headset,
  Hoodie,
  SpeakerHifi,
  TShirt,
  Watch
} from '@phosphor-icons/react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { ArrowCarousel } from '../../Arrows';

export function CategoryCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rubberband: false,
    slides: {
      perView: 2.8,
      spacing: 5
    },
    breakpoints: {
      '(min-width: 714px)': {
        slides: {
          perView: 3.8,
          spacing: 7
        }
      },
      '(min-width: 840px)': {
        slides: {
          perView: 4.8,
          spacing: 0
        }
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 6,
          spacing: 30
        }
      }
    }
  });

  const categories = [
    {
      id: 'MLB1039',
      name: 'Câmeras',
      icon: <Camera size={32} />,
      search: 'category='
    },
    {
      id: 'MLB1051',
      name: 'SmartPhones',
      icon: <DeviceMobile size={32} />,
      search: 'category='
    },
    {
      id: 'MLB1144',
      name: 'Games',
      icon: <GameController size={32} />,
      search: 'category='
    },
    {
      id: 'Fone',
      name: 'Headset',
      icon: <Headset size={32} />,
      search: 'q='
    },
    {
      id: 'Computador',
      name: 'Computador',
      icon: <DesktopTower size={32} />,
      search: 'q='
    },
    {
      id: 'SmartWatch',
      name: 'SmartWatch',
      icon: <Watch size={32} />,
      search: 'q='
    },
    {
      id: 'Bolsa feminina',
      name: 'Bolsas',
      icon: <Handbag size={32} />,
      search: 'q='
    },
    {
      id: 'mochila',
      name: 'Mochila',
      icon: <Backpack size={32} />,
      search: 'q='
    },
    {
      id: 'Caixa de som',
      name: 'Som',
      icon: <SpeakerHifi size={32} />,
      search: 'q='
    },
    {
      id: 'moda feminina',
      name: 'Mulheres',
      icon: <Hoodie size={32} />,
      search: 'q='
    },
    {
      id: 'moda masculina',
      name: 'homens',
      icon: <TShirt size={32} />,
      search: 'q='
    }
  ];

  return (
    <div className="max-w-container m-auto pl-5 lg:pl-0">
      <ArrowCarousel
        nextSlider={instanceRef.current?.next}
        prevSlider={instanceRef.current?.prev}
      />

      <div
        ref={sliderRef}
        className="keen-slider max-w-offer overflow-hidden w-full"
      >
        {categories.map((category) => {
          return (
            <Link
              href={`/category/${category.search}${category.id}`}
              prefetch={false}
              className="keen-slider__slide"
              key={category.id}
            >
              <div className="flex flex-col justify-center items-center gap-4 border rounded border-[#0000004d] max-w-[170px] h-[145px] hover:bg-orange-secondary hover:border-transparent text-black text-base hover:text-white-default transition-colors">
                {category.icon}
                <span className="text-center">{category.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
