'use client';

import { ButtonHTMLAttributes } from 'react';

import { UseMinicart } from '@/hooks/MinicartContext';

import { ShoppingCart } from '@phosphor-icons/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  product: ProductDataBuyButton;
}
export interface ProductDataBuyButton {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number;
  quantity: number;
}

export function BuyButton({ product, ...res }: Props) {
  const { addProduct, updateQuantity, products } = UseMinicart();

  function addProductMinicart(product: ProductDataBuyButton) {
    const index = products?.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const quantity = {
        id: product.id,
        quantity: (product.quantity += 1)
      };

      updateQuantity(quantity);
    } else {
      product.quantity = 1;
      addProduct(product);
    }
  }

  return (
    <button type="button" {...res} onClick={() => addProductMinicart(product)}>
      <ShoppingCart color="#fff" size={24} />
      <span>Add Carrinho</span>
    </button>
  );
}
