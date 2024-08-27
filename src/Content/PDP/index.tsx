import { Inter } from 'next/font/google';

// import { Rating } from '@/components/Rating';
import { Shelf } from '@/components/Shelfies';
import { formatPrices } from '@/utils/formatPrice';
import { BreadBrumb } from '@/components/BreadCrumb';

import { ContainerCarousel } from './Components/Carousel';
import { Delivery } from './Components/Delivery';
import { DataSheet } from './Components/Datarasheet';

import './styles.css';
import { ActionsButton } from './Components/ActionsButton';
import { Rating } from '@/components/Rating';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700']
});

interface Props {
  id: string;
  reputation: number;
}

interface ProductData {
  id: string;
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
}

interface DescriptionProps {
  plain_text: string;
}

export async function ContainerPDP({ id, reputation }: Props) {
  const [responseProduct, responseDescription] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items/${id}`, {
      cache: 'no-store'
    }),
    fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      cache: 'no-store'
    })
  ]);

  const productData: ProductData = await responseProduct.json();

  const product = productData;

  const { plain_text: description }: DescriptionProps =
    await responseDescription.json();

  const productProps = {
    id: product.id,
    thumbnail: product.pictures[0].url,
    title: product.title,
    price: product.price,
    originalPrice: product.original_price,
    quantity: 0,
    reputation
  };

  return (
    <div className="max-w-container m-auto text-black">
      <BreadBrumb isBack name={product.title} />

      <div className=" flex flex-col px-5 lg:px-0 md:flex-row">
        <ContainerCarousel pictures={product.pictures} />

        <div className="md:ml-[1%] lg:ml-[3%] flex flex-col gap-4">
          <h1
            className="text-2xl font-semibold tracking-[0.72px]"
            style={inter.style}
          >
            {product.title}
          </h1>

          <div className="flex items-center gap-4">
            {!Number.isNaN(reputation) && <Rating rating={reputation} />}

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

          <ActionsButton productData={productProps} />
          <Delivery id={id} />
        </div>
      </div>

      <div className="mb-4 px-5 lg:px-0">
        <article className="my-4">
          <h1 className="text-2xl font-semibold tracking-[0.72px] mb-4">
            Descrição do Produto
          </h1>
          <p className="text-lg font-medium">{description}</p>
        </article>

        <DataSheet
          attributes={product.attributes}
          warranty={product?.warranty}
        />
      </div>

      <Shelf
        search={product.category_id}
        subtitle="Já viu ?"
        title="Se olhou, tem que levar hein!"
      />
    </div>
  );
}
