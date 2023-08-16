import { Shelf } from '@/components/Shelfies';
import { CategoryShelf } from '@/components/Shelfies/Content/Categories';

export default function Home() {
  return (
    <>
      <h1>Hello Word</h1>
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
    </>
  );
}
