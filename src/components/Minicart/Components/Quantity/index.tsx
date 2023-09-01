'use client';
import { UseMinicart } from '@/hooks/MinicartContext';

interface QuantityProps {
  idProduct: string;
  quantity: number;
}

export function Quantity({ idProduct, quantity }: QuantityProps) {
  const { deleteProduct, updateQuantity } = UseMinicart();

  const numericRegex = /^[0-9]*$/;

  function handleDecrement() {
    if (quantity === 0) {
      deleteProduct(idProduct);
    } else {
      const newQuantity = {
        id: idProduct,
        quantity: quantity - 1
      };
      updateQuantity(newQuantity);
    }
  }

  function handleChange(value: number) {
    if (value > 0) {
      const newQuantity = {
        id: idProduct,
        quantity: value
      };
      updateQuantity(newQuantity);
    } else {
      deleteProduct(idProduct);
    }
  }

  function handleIncrement() {
    const newQuantity = {
      id: idProduct,
      quantity: quantity + 1
    };

    updateQuantity(newQuantity);
  }

  return (
    <div className="w-[120px] h-[30px] border-2 border-white-primary rounded flex items-center justify-between">
      <button
        className="w-10 h-[30px] text-center text-base font-medium hover:bg-orange-secondary transition-all hover:text-white-default hover:rounded"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-10 text-center text-base font-medium border-x border-white-primary bg-transparent"
        type="text"
        pattern={'^[0-9]*$'}
        name="quantity"
        minLength={1}
        value={quantity}
        onChange={(e) =>
          handleChange(
            numericRegex.test(e.target.value) ? Number(e.target.value) : 1
          )
        }
      />
      <button
        className="w-10 h-[30px] text-center text-base font-medium hover:bg-orange-secondary transition-all hover:text-white-default hover:rounded"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
