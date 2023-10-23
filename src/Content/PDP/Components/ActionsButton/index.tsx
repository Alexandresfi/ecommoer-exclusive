'use client';
import { useState } from 'react';

import { Quantity } from '../Quantity';

import { WhishListPDP } from '../WishList';
import { BuyButton } from '@/components/BuyButton';
import { ShoppingCart } from '@phosphor-icons/react';

export interface ProductProps {
  productData: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    originalPrice: number;
    quantity: number;
    reputation: number;
  };
}

export function ActionsButton({ productData }: ProductProps) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex items-center justify-between flex-wrap">
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <BuyButton
        productData={productData}
        quantity={quantity}
        className="w-[165px] h-[44px] bg-orange-secondary text-white-default text-center font-medium text-base hover:bg-orange-secondary-hover rounded"
      >
        <span>Compre Agora!</span>
      </BuyButton>
      <WhishListPDP />
    </div>
  );
}
