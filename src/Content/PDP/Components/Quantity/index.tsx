'use client';

interface QuantityProps {
  quantity: number;
  setQuantity: (item: number) => void;
}

export function Quantity({ quantity, setQuantity }: QuantityProps) {
  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }

  const numericRegex = /^[0-9]*$/;

  return (
    <div className="w-[160px] h-[44px] border-2 border-white-primary rounded flex items-center justify-between">
      <button
        className="w-10 h-[44px] text-center text-xl font-medium hover:bg-orange-secondary transition-all hover:text-white-default hover:rounded"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-20 text-center text-xl font-medium border-x border-white-primary bg-transparent"
        type="text"
        pattern={'^[0-9]*$'}
        name="quantity"
        minLength={1}
        value={quantity}
        onChange={(e) =>
          setQuantity(
            numericRegex.test(e.target.value) ? Number(e.target.value) : 1
          )
        }
      />
      <button
        className="w-10 h-[44px] text-center text-xl font-medium hover:bg-orange-secondary transition-all hover:text-white-default hover:rounded"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
