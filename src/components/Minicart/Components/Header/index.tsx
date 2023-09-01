interface CloseModalProps {
  oncloseModal: () => void;
}
export function Header({ oncloseModal }: CloseModalProps) {
  return (
    <header className="flex justify-between items-center py-4">
      <p className="font-medium">Minha sacola de compras</p>
      <button className="font-semibold" onClick={oncloseModal}>
        X
      </button>
    </header>
  );
}
