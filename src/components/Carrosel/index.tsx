import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { ProductItem } from '../CardProduct';

interface SearchProps {
  search: string;
}

interface ProductDataProps {
  id: string;
  condition: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  installments: {
    quantity: number;
    amount: number;
  };
}
export async function Carousel({ search }: SearchProps) {
  const fetchProduct = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${search}&limit=15`
  );

  const response = await fetchProduct.json();
  const productData: ProductDataProps[] = response.results;

  return (
    <div className="overflow-hidden ml-auto">
      <CarouselProvider
        naturalSlideWidth={270}
        naturalSlideHeight={350}
        step={4}
        dragStep={2}
        totalSlides={15}
        visibleSlides={4.5}
        infinite={true}
      >
        <Slider
          classNameTrayWrap="flex shrink-0"
          classNameTray="flex gap-9 lg:gap-14"
          className="flex"
        >
          {productData?.map((product, index) => {
            const productDataItem = {
              id: product?.id,
              thumbnail: product?.thumbnail,
              title: product?.title,
              price: product?.price,
              originalPrice: product?.originalPrice
            };
            return (
              <Slide index={index} key={product.id}>
                <ProductItem productData={productDataItem} />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}
