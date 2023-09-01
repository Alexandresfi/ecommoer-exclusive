interface PriceProps {
  totalPrice: string;
  minicartEmpaty: boolean;
  oncloseModal: () => void;
}
export function Footer({
  totalPrice,
  minicartEmpaty,
  oncloseModal
}: PriceProps) {
  return (
    <footer className="flex flex-col gap-4 text-base font-semibold py-4">
      {!minicartEmpaty && (
        <div className="flex justify-between items-center border-y border-y-white-primary py-1">
          <span className="font-semibold text-lg">Total: </span>
          <span>{totalPrice}</span>
        </div>
      )}
      <button className="w-full h-10 flex justify-center items-center rounded bg-orange-secondary text-white-default hover:bg-orange-secondary-hover transition-colors">
        Finalizar Compra
      </button>
      <button
        className="w-full h-10 flex justify-center items-center rounded border text-black hover:bg-black hover:text-white-default transition-colors"
        onClick={oncloseModal}
      >
        Continuar comprando
      </button>
    </footer>
  );
}
