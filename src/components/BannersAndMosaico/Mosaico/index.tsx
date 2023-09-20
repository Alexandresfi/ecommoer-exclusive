import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import { Header } from '@/components/Shelfies/Components/Header';
import { HandleImg } from './handleImg';

export function Moisaico() {
  return (
    <div className="mt-[35px] mb-[35px]">
      <Header title="Novidades" subTitle="Veja o que tem de novo" />

      <div className="flex flex-col items-center lg:grid max-w-container gap-[30px] m-auto mosaico px-5 lg:px-0">
        <Link href="/search/ps5" prefetch={false} className=" ps5 md:h-[600px]">
          <Image
            src="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/moisaico-01-desktop-game.jpg"
            width={570}
            height={600}
            alt="PS5"
            className="lg:object-fill lg:h-[600px]"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/moisaico-02-desktop-woaman.jpg"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/moisaco-03-desktop-speakers.jpg"
          mobileSrc="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/mosaico-03-mobile-speakers.jpg"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/mosaico-04-desktop-perfumes.jpg"
          mobileSrc="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/mosaico-04-mobile-perfumes.jpg"
        />
      </div>
    </div>
  );
}
