import NotFound from '@/app/search/not-found';
import { BreadBrumb } from '@/components/BreadCrumb';
import { ProductItem } from '@/components/CardProduct';
import { ProductDataProps } from '@/components/Shelfies';
import { formatProductName } from '@/utils/formatProductName';

interface ResultProps {
  productName: string;
}

export async function ContainerResultSearch({ productName }: ResultProps) {
  const resultSearchProducts = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${productName}&limit=50`,
    {
      cache: 'no-store'
    }
  );

  const response = await resultSearchProducts.json();
  const productData: ProductDataProps[] = response.results;

  if (productData.length < 1) {
    return <NotFound productName={productName} />;
  }

  return (
    <div>
      <BreadBrumb name={formatProductName(productName)} />
      <h1 className="text-black mb-10 text-center text-xl">
        Resultado de busca para:{' '}
        <strong>{`"${formatProductName(productName)}"`}</strong>
      </h1>
      <ul className="flex flex-wrap items-center gap-3 md:gap-4">
        {productData?.map((product) => {
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
            <li key={product.id}>
              <ProductItem productData={productDataItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
