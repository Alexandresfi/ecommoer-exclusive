'use client';
import { UseWishlist } from '@/hooks/WishlistContext';

import { BreadBrumb } from '@/components/BreadCrumb';
import { ProductItem } from '@/components/CardProduct';

export function ContainerWishlist() {
  const { products } = UseWishlist();

  function removedAllProducts() {
    localStorage.removeItem('@ecommerExclisive:WishlistData-v0.1');
    window.location.reload();
  }

  return (
    <main className="max-w-container m-auto">
      <BreadBrumb name="Whislist" />
      <header className="flex justify-between items-center mb-10 px-5 xl:px-0">
        <h1 className="text-xl font-bold">
          Wishlist <span>{`(${products.length})`}</span>
        </h1>
        <button
          className="font-medium border border-white-primary rounded max-w-[230px] w-full h-14 flex items-center justify-center hover:bg-orange-secondary hover:text-white-default hover:border-transparent transition-all"
          onClick={removedAllProducts}
        >
          Remover todos os produtos
        </button>
      </header>
      {products.length < 1 ? (
        <h1 className="text-center text-2xl font-bold px-5">
          Sua wishlist está vázia, volte para a home e selecione alguns
          produtos!
        </h1>
      ) : (
        <ul className="flex items-center flex-wrap gap-4 px-5 lg:px-0">
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem
                productData={product}
                isContentPage="max-w-[160px]"
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
