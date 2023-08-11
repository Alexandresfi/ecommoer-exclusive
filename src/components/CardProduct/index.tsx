import Image from 'next/image';
import Link from 'next/link';
import { WhishList } from './wishList';
import { formatPrices } from '@/utils/formatPrice';

interface ProducProps {
  productData: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    originalPrice: number;
  };
}
export function ProductItem({
  productData: { id, thumbnail, title, price, originalPrice }
}: ProducProps) {
  const calcDiscount = () => {
    const disount = originalPrice - price;

    const percentual = (disount / originalPrice) * 100;

    return percentual;
  };
  return (
    <article className="relative">
      <div className="absolute top-3 left-3 w-[246px] flex justify-between items-center">
        <span className="bg-orange-secondary text-white-primary flex justify-center items-center px-3 py-1 rounded">
          -{calcDiscount()}%
        </span>
        <WhishList />
      </div>

      <Link
        href={`/product/${id}`}
        className="w-[270px] h-[350px] flex flex-col gap-4"
        prefetch={false}
      >
        <div className="w-full h-[350px] bg-white-primary m-auto">
          <Image
            src={thumbnail}
            width={172}
            height={180}
            alt={title}
            className="m-[49px]"
          />
        </div>

        <div>
          <h3 className="mb-2">{title}</h3>
          <span className="flex items-center gap-3">
            <span className="text-orange-secondary font-medium leading-normal">
              {formatPrices(price)}
            </span>
            <span className="line-through text-[#7d8184eb]">
              {formatPrices(originalPrice)}
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
