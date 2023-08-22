import { BannerAndMosaico } from '@/components/BannersAndMosaico';
import { Footer } from '@/components/Footer';
import { InfosShop } from '@/components/InfoComponent';
import { Shelf } from '@/components/Shelfies';
import { CategoryShelf } from '@/components/Shelfies/Content/Categories';

export default function Home() {
  return (
    <>
      <Shelf
        search="MLB1051"
        offer
        line="offer"
        title="Smartfones e acessórios"
        subtitle="Hoje"
      />
      <CategoryShelf />\
      <Shelf
        search="MLB1246"
        line="category"
        title="Belaza"
        subtitle="Cuidado Pessoal"
      />
      <BannerAndMosaico type="banner" />
      <Shelf
        search="MLB1648"
        line="category"
        title="Tecnologia"
        subtitle="Informática"
      />
      <BannerAndMosaico type="mosaico" />
      <InfosShop />
    </>
  );
}
