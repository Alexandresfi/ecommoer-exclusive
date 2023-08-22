'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CarouselMobilePDP } from './Mobile';
import { ContainerImages } from './Desktop';

interface Props {
  pictures: {
    url: string;
  }[];
}

export function ContainerCarousel({ pictures }: Props) {
  const size = useMediaQuery();

  const md = 714;
  const change = size.screenWidth > md;
  return (
    <>
      {change ? (
        <ContainerImages pictures={pictures} />
      ) : (
        <CarouselMobilePDP pictures={pictures} />
      )}
    </>
  );
}
