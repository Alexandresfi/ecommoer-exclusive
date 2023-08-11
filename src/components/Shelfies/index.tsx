import { Carousel } from '../Carrosel';
import { Header } from './Components/Header';

interface SearchProps {
  search: string;
  offer?: boolean;
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

export async function Shelf({ search }: SearchProps) {
  const fetchProduct = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${search}&limit=15`
  );

  const response = await fetchProduct.json();
  const productData: ProductDataProps[] = response.results;

  return (
    <div>
      <Header title="Smartfones e acessórios" subTitle="Hoje" counter />
      <Carousel productData={productData} offer />
    </div>
  );
}
