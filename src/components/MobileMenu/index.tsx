import { DialogHTMLAttributes } from 'react';

import Link from 'next/link';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  oncloseModal: () => void;
}

export function Menu({ oncloseModal, ...otherProps }: DialogProps) {
  return (
    <dialog {...otherProps}>
      <div className="min-h-screen rounded ml-auto flex justify-end w-full">
        <div className="bg-white-default rounded flex flex-col basis-4/5 px-5">
          <header className="flex justify-between items-center px-5 py-4">
            <span>Menu</span>
            <button onClick={oncloseModal}>X</button>
          </header>

          <nav>
            <ul
              className="text-sm font-medium px-5 space-y-4"
              onClick={oncloseModal}
            >
              <li className="border-b-2 pb-4">
                <Link href="/contact" prefetch={false}>
                  Contato
                </Link>
              </li>

              <li className="border-b-2 pb-4">
                <Link href="/about" prefetch={false}>
                  Sobre
                </Link>
              </li>

              <li className="border-b-2 pb-4">
                <Link href="/wishlist" prefetch={false}>
                  Lista de desejos
                </Link>
              </li>

              <li className="border-b-2 pb-4">
                <Link href="#" prefetch={false}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="min-h-screen basis-1/5 bg-[#08080833]"
          onClick={oncloseModal}
        />
      </div>
    </dialog>
  );
}
