import { CategoryCarousel } from '@/components/Carrosel/Content/Category';
import { Header } from '../../Components/Header';

export function CategoryShelf() {
  return (
    <div className="mt-[35px]">
      <Header title="Navegue pelas Categorias" subTitle="Categorias" />
      <CategoryCarousel />
      <span className="border-b-[1px] my-[35px] h-px block max-w-container m-auto" />
    </div>
  );
}
