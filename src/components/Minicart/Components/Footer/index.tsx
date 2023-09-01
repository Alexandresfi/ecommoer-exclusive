interface PriceProps {
  totalPrice: number;
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
      {/* {!minicartEmpaty && (

      )} */}
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
