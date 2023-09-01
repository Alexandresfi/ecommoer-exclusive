'use client';

import { UseMinicart } from '@/hooks/MinicartContext';
import { ProductProps } from '../ActionsButton';
import { ProductDataBuyButton } from '@/components/CardProduct/Components/BuyButton';

interface BuyButtonProps extends ProductProps {
  quantity: number;
}

export function BuyButtonPDP({ productData, quantity }: BuyButtonProps) {
  const { addProduct, updateQuantity, products } = UseMinicart();

  function addProductMinicart(product: ProductDataBuyButton) {
    const index = products?.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const productQuantity = {
        id: product.id,
        quantity: (product.quantity += 1)
      };

      updateQuantity(productQuantity);
    } else {
      product.quantity = quantity;
      addProduct(product);
      console.log(product.quantity);
    }
  }

  return (
    <button
      onClick={() => addProductMinicart(productData)}
      className="w-[165px] h-[44px] bg-orange-secondary text-white-default text-center font-medium text-base hover:bg-orange-secondary-hover rounded"
    >
      Compre Agora
    </button>
  );
}
