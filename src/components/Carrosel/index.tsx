'use client';
import { ProductItem } from '../CardProduct';
import { ProductDataProps } from '../Shelfies';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowCarousel } from './Arrows';

interface ProductDataItemProps {
  productData: ProductDataProps[];
  offer?: boolean;
}

export function Carousel({ productData, offer = false }: ProductDataItemProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rubberband: false,
    slides: {
      perView: 2.3,
      spacing: 10
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3.4,
          spacing: 0
        }
      },
      '(min-width: 1200px)': {
        slides: {
          perView: 4.5,
          spacing: 30
        }
      }
    }
  });

  function isOffer() {
    if (offer) {
      return 'max-w-offer ml-auto';
    } else {
      return 'max-w-container m-auto';
    }
  }
  return (
    <div className={`${!offer && 'max-w-container m-auto'}`}>
      <ArrowCarousel
        nextSlider={instanceRef.current?.next}
        prevSlider={instanceRef.current?.prev}
      />

      <div
        ref={sliderRef}
        className={`keen-slider max-w-offer overflow-hidden w-full ${isOffer()}`}
      >
        {productData?.map((product, index) => {
          const productDataItem = {
            id: product?.id,
            thumbnail: product?.thumbnail,
            title: product?.title,
            price: product?.price,
            originalPrice: product?.original_price
          };

          return (
            <ProductItem
              productData={productDataItem}
              key={index}
              slider="keen-slider__slide"
            />
          );
        })}
      </div>
    </div>
  );
}
