import { ShoppingCart } from '@phosphor-icons/react';
import { ButtonHTMLAttributes } from 'react';

export function BuyButton({ ...res }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...res}>
      <ShoppingCart color="#fff" size={24} />
      <span>Add Carrinho</span>
    </button>
  );
}
