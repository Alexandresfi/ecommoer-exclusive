'use client';
import { useEffect, useState } from 'react';

import { Heart } from '@phosphor-icons/react';
import { UseWishlist } from '@/hooks/WishlistContext';

interface ProductData {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  reputation: number;
}
interface WishlistProps {
  product: ProductData;
}

export function WhishList({ product }: WishlistProps) {
  const [checked, setChecked] = useState(false);
  const { addProduct, deleteProduct, products } = UseWishlist();

  useEffect(() => {
    products?.length > 0 &&
      products.find((item) => item.id === product.id) &&
      setChecked(true);
  }, [product.id, products]);

  function handleClick() {
    if (products.length > 0) {
      products.find((item) =>
        item.id === product.id
          ? removeProductWishlist(item.id)
          : addProductWishlist()
      );
    } else {
      addProductWishlist();
    }
  }

  function removeProductWishlist(id: string) {
    deleteProduct(id);
    setChecked(false);
  }

  function addProductWishlist() {
    addProduct(product);
    setChecked(true);
  }

  return (
    <button
      className="w-[27px] h-[27px] bg-white-default rounded-full flex justify-center items-center hover:drop-shadow-sm"
      onClick={handleClick}
    >
      {checked ? (
        <Heart size={24} weight="fill" color="#db4444" alt="remove wishlist" />
      ) : (
        <Heart size={24} alt="add wishlist" />
      )}
    </button>
  );
}
