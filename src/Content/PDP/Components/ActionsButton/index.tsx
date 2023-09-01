'use client';
import { useState } from 'react';

import { Quantity } from '../Quantity';
import { BuyButtonPDP } from '../BuyButton';
import { WhishListPDP } from '../WishList';

export interface ProductProps {
  productData: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    originalPrice: number;
    quantity: number;
  };
}

export function ActionsButton({ productData }: ProductProps) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex items-center justify-between flex-wrap">
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <BuyButtonPDP productData={productData} quantity={quantity} />
      <WhishListPDP />
    </div>
  );
}
