'use client';
import { ProductItem } from '../CardProduct';
import { ProductDataProps } from '../Shelfies';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

interface ProductDataItemProps {
  productData: ProductDataProps[];
  offer?: boolean;
}

export function Carousel({ productData, offer }: ProductDataItemProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rubberband: false,
    slides: {
      perView: 1.7,
      spacing: 0
    },
    breakpoints: {
      '(min-width: 714px)': {
        slides: {
          perView: 3.2,
          spacing: 7
        }
      },
      '(min-width: 840px)': {
        slides: {
          perView: 4,
          spacing: 0
        }
      },
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
    <div className={`${!offer ? 'max-w-container m-auto' : ''} pl-5 xl:pl-0`}>
      <div className="max-w-container m-auto hidden lg:flex lg:items-center lg:justify-end lg:gap-1 lg:translate-y-[-61px]">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="lg:rounded-full lg:bg-white-primary flex justify-center items-center w-9 h-9 hover:drop-shadow-md "
        >
          {' '}
          <ArrowLeft size={20} alt="prev slider" />{' '}
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="lg:rounded-full lg:bg-white-primary flex justify-center items-center w-9 h-9 hover:drop-shadow-md "
        >
          <ArrowRight size={20} alt="next slider" />
        </button>
      </div>

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
            originalPrice: product?.original_price,
            reputation:
              product?.seller.seller_reputation.transactions.ratings.positive
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
