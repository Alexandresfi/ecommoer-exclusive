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
}

export function ProductItem({
  productData: { id, thumbnail, title, price, originalPrice, reputation },
  slider = ''
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
    quantity: 0
  };

  return (
    <article>
      <div className={`${slider} relative`}>
        <div className="absolute top-1 lg:top-3 flex justify-between items-center px-1 lg:px-3 max-w-[177px] md:max-w-[200px] lg:max-w-[270px] w-full">
          {price === originalPrice || originalPrice === null ? (
            <div />
          ) : (
            <span className="bg-orange-secondary text-white-primary text-xs flex justify-center items-center px-3 py-1 rounded">
              -{calcDiscount()}%
            </span>
          )}
          <WhishList />
        </div>
        <BuyButton
          text="Add ao Carrinho"
          isPDP={false}
          productData={productBuyButton}
          className="text-base font-medium text-white-default bg-black flex items-center justify-center h-[41px] max-w-[177px] md:max-w-[200px] lg:max-w-[270px] w-full rounded absolute top-[145px] lg:top-[205px] lg:opacity-0 transition-opacity duration-300"
        />
        <Link
          href={`/product/${id}-${reputation}`}
          className="max-w-[177px] md:max-w-[200px] lg:max-w-[270px] h-[284px] lg:h-[350px] flex flex-col gap-4"
          prefetch={false}
        >
          <div className="h-64 lg:h-[278px] bg-white-primary m-auto flex items-center justify-center  w-full">
            <Image src={thumbnail} width={172} height={180} alt={title} />
          </div>

          <div>
            <h3 className="mb-2 limitText">{title}</h3>

            <span className="flex items-center gap-3">
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
