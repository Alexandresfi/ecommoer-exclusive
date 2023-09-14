'use client';
import { BreadBrumb } from '@/components/BreadCrumb';
import { ProductItem } from '@/components/CardProduct';
import { UseWishlist } from '@/hooks/WishlistContext';

export function ContainerWishlist() {
  const { products } = UseWishlist();
  return (
    <main className="max-w-container m-auto">
      <BreadBrumb name="Whislist" />
      <header className="flex justify-between items-center mb-10 px-5">
        <h1 className="text-xl font-bold">
          Wishlist <span>{`(${products.length})`}</span>
        </h1>
        <button className="font-medium border border-white-primary rounded max-w-[223px] w-full h-14 flex items-center justify-center hover:bg-orange-secondary hover:text-white-default hover:border-transparent transition-all">
          Mover tudo para carrinho
        </button>
      </header>

      <ul className="flex items-center flex-wrap gap-4 px-5 lg:px-0">
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem productData={product} isContentPage="max-w-[160px]" />
          </li>
        ))}
      </ul>
    </main>
  );
}
