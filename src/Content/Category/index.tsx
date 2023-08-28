import NotFound from '@/app/search/not-found';
import { BreadBrumb } from '@/components/BreadCrumb';
import { ProductItem } from '@/components/CardProduct';
import { ProductDataProps } from '@/components/Shelfies';
import { formatProductName } from '@/utils/formatProductName';

interface CategoryProps {
  productLink: string;
}

export async function ContainerCategory({ productLink }: CategoryProps) {
  const categoryProducts = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?${productLink.replace(
      /%3D/gi,
      '='
    )}&limit=50`,
    {
      cache: 'no-store'
    }
  );

  const response = await categoryProducts.json();
  const productData: ProductDataProps[] = response.results;

  if (productData.length < 1) {
    return <NotFound productName={productLink} />;
  }

  return (
    <div>
      <BreadBrumb production="Categoria" />
      <h1 className="text-black mb-10 text-center text-xl">Categoria</h1>
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
