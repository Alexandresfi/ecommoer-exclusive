import { ProductItem } from '@/components/CardProduct';
import { ProductDataProps } from '@/components/Shelfies';

interface ResultProps {
  productName: string;
}
export async function ContainerResultSearch({ productName }: ResultProps) {
  const resultSearchProducts = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${productName}&limit=30`,
    {
      cache: 'no-store'
    }
  );

  const response = await resultSearchProducts.json();
  const productData: ProductDataProps[] = response.results;

  return (
    <div>
      <h1 className="text-black my-10 text-center text-xl">
        Resultado de busca para: <strong>{productName}</strong>
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
