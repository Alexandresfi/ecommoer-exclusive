'use client';

import { UseMinicart } from '@/hooks/MinicartContext';
import Image from 'next/image';
import { DialogHTMLAttributes } from 'react';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  oncloseModal: () => void;
}

export function Minicart(props: DialogProps) {
  const { ...otherProps } = props;

  const { products } = UseMinicart();

  const minicartEmpaty = products.length < 1;

  return (
    <dialog {...otherProps}>
      <div className="min-h-screen rounded ml-auto flex justify-end w-full">
        <div
          className="min-h-screen basis-1/5 bg-[#08080833]"
          onClick={props.oncloseModal}
        />
        <div className="bg-white-default rounded flex flex-col justify-between basis-4/5 px-5">
          <header className="flex justify-between items-center py-4">
            <p>Minha sacola de compras</p>
            <span onClick={props.oncloseModal}>X</span>
          </header>

          {minicartEmpaty && (
            <h2 className="text-lg font-semibold text-center">
              Sua Sacola de compras está vázia!
            </h2>
          )}

          {!minicartEmpaty && (
            <article>
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center"
                >
                  <div className="w-[135px] h-[92px]">
                    <Image
                      src={product.thumbnail}
                      width={200}
                      height={200}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <p className="max-w-[300px] text-sm font-semibold">
                      {product.title}
                    </p>
                    <p>{product.price}</p>
                  </div>
                  <div></div>
                </div>
              ))}
            </article>
          )}

          <footer>
            <button>Finalizar Compra</button>
            <button>Continuar comprando</button>
          </footer>
        </div>
      </div>
    </dialog>
  );
}
