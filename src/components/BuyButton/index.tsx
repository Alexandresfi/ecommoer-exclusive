'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { UseAddMinicart } from '@/hooks/UseAddMinicart';

interface ProductDataBuyButton {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  quantity: number;
  reputation: number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  productData: ProductDataBuyButton;
  quantity?: number;
}

export function BuyButton({ quantity, productData, ...res }: ButtonProps) {
  return (
    <button
      type="button"
      {...res}
      onClick={() => UseAddMinicart(productData, quantity)}
    >
      {res.children}
    </button>
  );
}
