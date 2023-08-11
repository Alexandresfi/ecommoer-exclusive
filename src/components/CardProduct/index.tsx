import Image from 'next/image';
import Link from 'next/link';

import { WhishList } from './wishList';

import { formatPrices } from '@/utils/formatPrice';
import './styles.css';

interface ProducProps {
  productData: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    originalPrice: number;
  };
  slider?: string;
}

export function ProductItem({
  productData: { id, thumbnail, title, price, originalPrice },
  slider
}: ProducProps) {
  const calcDiscount = () => {
    if (originalPrice === null) {
      return;
    }

    const disount = originalPrice - price;

    const percentual = (disount / originalPrice) * 100;

    return Math.trunc(percentual);
  };

  return (
    <article>
      <div className={`relative max-w-[270px] ${slider}`}>
        <div className="absolute top-3 flex justify-between items-center px-3 max-w-[270px] w-full">
          {price === originalPrice || originalPrice === null ? (
            <div />
          ) : (
            <span className="bg-orange-secondary text-white-primary text-xs flex justify-center items-center px-3 py-1 rounded">
              -{calcDiscount()}%
            </span>
          )}
          <WhishList />
        </div>
        <Link
          href={`/product/${id}`}
          className="max-w-[270px] h-[350px] flex flex-col gap-4"
          prefetch={false}
        >
          <div className="h-[350px] bg-white-primary m-auto">
            <Image
              src={thumbnail}
              width={172}
              height={180}
              alt={title}
              className="m-[49px]"
            />
          </div>

          <div>
            <h3 className="mb-2 limitText">{title}</h3>
            <span className="flex items-center gap-3">
              <span className="text-orange-secondary font-medium leading-normal">
                {formatPrices(price)}
              </span>
              {price === originalPrice ? null : (
                <span className="line-through text-[#7d8184eb]">
                  {formatPrices(originalPrice)}
                </span>
              )}
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
