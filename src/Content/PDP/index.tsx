import { Inter } from 'next/font/google';

import { InfoProduct } from './Components/Desktop/Colum';
import { Reputation } from '@/components/ProdutReputation';
import { Quantity } from './Components/Quantity';
import { BuyButtonPDP } from './Components/BuyButton';
import { WhishListPDP } from './Components/WishList';
import { Delivery } from './Components/CEP';

import { formatPrices } from '@/utils/formatPrice';

import './styles.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700']
});

interface Props {
  id: string;
  reputation: number;
}

interface ProductData {
  body: {
    title: string;
    price: number;
    original_price: number;
    warranty: string;
    attributes: {
      name: string;
      value_name: string;
    };
    pictures: {
      url: string;
    }[];
    status: string;
    domain_id: string;
  };
}

interface DescriptionProps {
  plain_text: string;
}

export async function ContainerPDP({ id, reputation }: Props) {
  const [responseProduct, responseDescription] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items?ids=${id}`, {
      cache: 'no-store'
    }),
    fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      cache: 'no-store'
    })
  ]);

  const productData: ProductData[] = await responseProduct.json();

  const { body: product } = productData[0];

  const { plain_text: description }: DescriptionProps =
    await responseDescription.json();

  return (
    <div className="max-w-container m-auto mb-20 text-black flex">
      <InfoProduct pictures={product.pictures} />
      <div className="pl-14 flex flex-col gap-4">
        <h1
          className="text-2xl font-semibold tracking-[0.72px]"
          style={inter.style}
        >
          {product.title}
        </h1>

        <div className="flex items-center gap-4">
          <Reputation reputation={reputation} />
          <span className=" text-green-500 text-sm opacity-60 before:content-['|'] before:mr-4 before:text-white-secondary before:opacity-100 before:font-bold">
            {product.status === 'active' || product.status === 'paused'
              ? 'Em estoque'
              : 'Sem estoque'}{' '}
          </span>
        </div>

        <p className="TextLimit text-sm border-b border-white-primary ">
          {description}
        </p>

        <p className="text-xl text leading-none tracking-[0.72px]">
          <span className="font-bold">{formatPrices(product.price)}</span>
          {product.price > 200 && (
            <span className="text-lg">
              {' '}
              ou em até 10 x de{' '}
              <span className="font-bold">
                {formatPrices(product.price / 10)}
              </span>{' '}
              sem juros
            </span>
          )}
        </p>

        <div className="flex items-center justify-between">
          <Quantity />
          <BuyButtonPDP />
          <WhishListPDP />
        </div>
        <Delivery />
      </div>
    </div>
  );
}
