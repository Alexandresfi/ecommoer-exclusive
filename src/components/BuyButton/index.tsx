'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { UseMinicart } from '@/hooks/MinicartContext';
import { ShoppingCart } from '@phosphor-icons/react';

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
  text: string;
}

interface ButtonPropsIsPDP extends ButtonProps {
  isPDP: true;
  quantity: number;
}

interface ButtonPropsNotPDP extends ButtonProps {
  isPDP: false;
  quantity?: never;
}

type BuyButtonProps = ButtonPropsIsPDP | ButtonPropsNotPDP;

export function BuyButton(props: BuyButtonProps) {
  const { addProduct, updateQuantity, products } = UseMinicart();

  const { children, quantity, productData, isPDP, ...res } = props;

  function addProductMinicart(product: ProductDataBuyButton) {
    const index = products?.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const productQuantity = {
        id: product.id,
        quantity: (product.quantity += 1)
      };

      updateQuantity(productQuantity);
    } else {
      product.quantity = quantity ? quantity : 1;
      addProduct(product);
    }
  }

  return (
    <button
      type="button"
      {...res}
      onClick={() => addProductMinicart(productData)}
    >
      {!isPDP && <ShoppingCart color="#fff" size={24} />}
      <span>Add Carrinho</span>
    </button>
  );
}
