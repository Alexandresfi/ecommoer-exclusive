import Image from 'next/image';
import Link from 'next/link';

import { WhishList } from './Components/WishList/wishList';

import { formatPrices } from '@/utils/formatPrice';
import { Rating } from '../Rating';
import './styles.css';
import { BuyButton } from '../BuyButton';

interface ProducProps {
  productData: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    originalPrice: number;
    reputation: number;
  };
  slider?: string;
  isContentPage?: string;
}

export function ProductItem({
  productData: { id, thumbnail, title, price, originalPrice, reputation },
  slider = '',
  isContentPage = 'max-w-[177px]'
}: ProducProps) {
  function calcDiscount() {
    if (originalPrice === null) {
      return;
    }

    const disount = originalPrice - price;

    const percentual = (disount / originalPrice) * 100;

    return Math.trunc(percentual);
  }

  const productBuyButton = {
    id,
    thumbnail,
    title,
    price,
    originalPrice,
    quantity: 0,
    reputation
  };

  const isShelfs = isContentPage !== 'max-w-[177px]';

  return (
    <article>
      <div className={`${slider} relative`}>
        <div
          className={`absolute top-1 lg:top-3 flex justify-between items-center px-1 lg:px-3  md:max-w-[200px] lg:max-w-[249px] xl:max-w-[270px] w-full ${isContentPage}`}
        >
          {price === originalPrice || originalPrice === null ? (
            <div />
          ) : (
            <span className="bg-orange-secondary text-white-primary text-xs flex justify-center items-center px-3 py-1 rounded">
              -{calcDiscount()}%
            </span>
          )}
          <WhishList product={productBuyButton} />
        </div>
        <BuyButton
          text="Add ao Carrinho"
          isPDP={false}
          productData={productBuyButton}
          className={`text-base font-medium text-white-default bg-black flex items-center justify-center h-[41px]  md:max-w-[200px] lg:max-w-[249px] xl:max-w-[270px] w-full rounded absolute top-[145px] lg:top-[205px] lg:opacity-0 transition-opacity duration-300 ${isContentPage}`}
        />
        <Link
          href={`/product/${id}-${reputation}`}
          className={`md:max-w-[200px] lg:max-w-[249px] xl:max-w-[270px] lg:h-[350px] flex flex-col gap-4 ${isContentPage} ${
            isShelfs ? `h-[300px] sm:h-[284px]` : `h-[284px]`
          }`}
          prefetch={false}
        >
          <div className="h-64 lg:h-[278px] bg-white-primary m-auto flex items-center justify-center  w-full">
            <Image
              src={thumbnail}
              width={172}
              height={180}
              alt={title}
              unoptimized
            />
          </div>

          <div>
            <h3 className="mb-2 limitText">{title}</h3>

            <span
              className={`flex  ${
                isShelfs
                  ? `h-12 justify-between flex-wrap items-start sm:h-auto sm:items-center sm:justify-start sm:gap-3`
                  : `gap-2 sm:gap-3 items-center`
              }`}
            >
              <span className="text-orange-secondary font-medium leading-normal">
                {formatPrices(price)}
              </span>
              {price === originalPrice ? null : (
                <span className="line-through text-[#7d8184eb]">
                  {originalPrice !== null && formatPrices(originalPrice)}
                </span>
              )}
            </span>
          </div>
          <div>
            <Rating rating={reputation * 100} />
          </div>
        </Link>
      </div>
    </article>
  );
}
