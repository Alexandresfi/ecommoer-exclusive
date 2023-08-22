import { Inter } from 'next/font/google';

import { InfoProduct } from './Components/Desktop/Colum';
import { Reputation } from '@/components/ProdutReputation';
import { Quantity } from './Components/Quantity';
import { BuyButtonPDP } from './Components/BuyButton';
import { WhishListPDP } from './Components/WishList';
import { Delivery } from './Components/CEP';

import { formatPrices } from '@/utils/formatPrice';

import './styles.css';
import { Shelf } from '@/components/Shelfies';

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
    condition: string;
    attributes: {
      name: string;
      value_name: string;
    }[];
    pictures: {
      url: string;
    }[];
    status: string;
    domain_id: string;
    category_id: string;
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
    <div className="max-w-container m-auto text-black">
      <div className=" flex">
        <InfoProduct pictures={product.pictures} />

        <div className="ml-[3%] flex flex-col gap-4">
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

          <p className="text-xl leading-none tracking-[0.72px]">
            <span className="font-bold">{formatPrices(product.price)}</span>
            {product.price > 200 && (
              <span className=" text-sm">
                {' '}
                ou em até 10 x de{' '}
                <span className="font-bold text-lg">
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

      <div className="mb-4">
        <article className="my-4">
          <h1 className="text-2xl font-semibold tracking-[0.72px] mb-4">
            Descrição do Produto
          </h1>
          <p className="text-lg font-medium">{description}</p>
        </article>

        <article>
          <h1 className="text-2xl font-semibold tracking-[0.72px] mb-4">
            Ficha técnica
          </h1>

          <ul className="odd:bg-white-primary">
            <li className="flex gap-4 px-3 py-4">
              <p>{product.warranty.split(':')[0]} :</p>
              <p>{product.warranty.split(':')[1]}</p>
            </li>
          </ul>

          {product.attributes.map((attribute, index) => (
            <ul key={index} className="odd:bg-white-primary">
              <li className="flex gap-4 px-3 py-4">
                <p>{attribute.name} :</p>
                <p>{attribute.value_name}</p>
              </li>
            </ul>
          ))}
        </article>
      </div>

      <Shelf
        search={product.category_id}
        subtitle="Já viu ?"
        title="Se olhou, tem que levar hein!"
      />
    </div>
  );
}
