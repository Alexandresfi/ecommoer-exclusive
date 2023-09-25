'use client';
import { UseMinicart } from '@/hooks/MinicartContext';
import { ShoppingCart } from '@phosphor-icons/react';

interface IconProps {
  handleOpenModal: () => void;
}

export function IconMinicart({ handleOpenModal }: IconProps) {
  const { products } = UseMinicart();
  return (
    <button
      className="flex justify-end relative w-8 h-8"
      onClick={handleOpenModal}
    >
      <ShoppingCart size={25} alt="open minicart" />

      {products.length > 0 && (
        <span className="w-5 h-5 rounded-full text-white-default bg-orange-secondary absolute top-[-8px] right-[-2px] text-sm font-semibold text-center">
          {products.reduce((accumulator, currentValue) => {
            const quantity =
              currentValue.quantity !== undefined ? currentValue.quantity : 0;
            return accumulator + quantity;
          }, 0)}
        </span>
      )}
    </button>
  );
}
