import { Carousel } from '../Carrosel';
import { Header } from './Components/Header';
import { SeeMoreButton } from './Components/SeeMoreButton';

interface SearchProps {
  search: string;
  offer?: boolean;
  line?: 'offer' | 'category' | null;
  title: string;
  subtitle: string;
}

export interface ProductDataProps {
  id: string;
  condition: string;
  thumbnail: string;
  title: string;
  price: number;
  original_price: number;
  seller: {
    seller_reputation: {
      transactions: {
        ratings: {
          positive: number;
        };
      };
    };
  };
}

export async function Shelf({
  search,
  offer = false,
  line = null,
  title,
  subtitle
}: SearchProps) {
  const fetchProduct = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${search}&limit=25`
  );

  const response = await fetchProduct.json();
  const productData: ProductDataProps[] = response.results;

  function toggleBorderBotton() {
    if (line === 'offer') {
      return 'border-b-[1px] mt-[35px] h-px block max-w-container m-auto';
    } else {
      return 'border-b-[1px] mt-[35px] h-px block max-w-container m-auto';
    }
  }

  return (
    <div>
      <Header title={title} subTitle={subtitle} counter={offer} />
      <Carousel productData={productData} offer={offer} />
      <SeeMoreButton category={search}>Ver todos os produtos</SeeMoreButton>
      {line === null ? null : <span className={toggleBorderBotton()} />}
    </div>
  );
}
