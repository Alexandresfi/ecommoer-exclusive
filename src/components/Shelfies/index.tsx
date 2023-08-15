import { Carousel } from '../Carrosel';
import { Header } from './Components/Header';
import { SeeMoreButton } from './Components/SeeMoreButton';

interface SearchProps {
  search: string;
  offer?: boolean;
  line?: 'offer' | 'category' | null;
}

export interface ProductDataProps {
  id: string;
  condition: string;
  thumbnail: string;
  title: string;
  price: number;
  original_price: number;
  installments: {
    quantity: number;
    amount: number;
  };
}

export async function Shelf({
  search,
  offer = false,
  line = null
}: SearchProps) {
  const fetchProduct = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${search}&limit=15`
  );

  const response = await fetchProduct.json();
  const productData: ProductDataProps[] = response.results;

  function toggleBorderBotton() {
    if (line === 'offer') {
      return 'border-b-[1px] pt-[60px] h-px block max-w-container m-auto';
    } else {
      return 'border-b-[1px] pt-[70px] h-px block max-w-container m-auto';
    }
  }

  return (
    <div>
      <Header title="Smartfones e acessórios" subTitle="Hoje" counter />
      <Carousel productData={productData} offer={offer} />
      <SeeMoreButton category={search}>Ver todos os produtos</SeeMoreButton>
      {line === null ? null : <span className={toggleBorderBotton()} />}
    </div>
  );
}
