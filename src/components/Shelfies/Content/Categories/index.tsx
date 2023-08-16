import { CategoryCarousel } from '@/components/Carrosel/Content/Category';
import { Header } from '../../Components/Header';

export function CategoryShelf() {
  return (
    <div className="mb-6 mt-[90px]">
      <Header title="Navegue pelas Categorias" subTitle="Categorias" />
      <CategoryCarousel />
      <span className="border-b-[1px] pt-[70px] h-px block max-w-container m-auto" />
    </div>
  );
}
