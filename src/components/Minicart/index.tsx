'use client';

import Image from 'next/image';
import { DialogHTMLAttributes } from 'react';

import { UseMinicart } from '@/hooks/MinicartContext';
import { formatPrices } from '@/utils/formatPrice';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import './styles.css';
interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  oncloseModal: () => void;
}

export function Minicart({ oncloseModal, ...otherProps }: DialogProps) {
  const { products, deleteProduct } = UseMinicart();

  const minicartEmpaty = products.length < 1;

  return (
    <dialog {...otherProps}>
      <div className="min-h-screen rounded ml-auto flex justify-end w-full">
        <div
          className="min-h-screen basis-1/5 bg-[#08080833]"
          onClick={oncloseModal}
        />
        <div className="bg-white-default rounded flex flex-col justify-between basis-4/5 px-5">
          <Header oncloseModal={oncloseModal} />

          {minicartEmpaty && (
            <h2 className="text-lg font-semibold text-center">
              Sua Sacola de compras está vázia!
            </h2>
          )}

          {!minicartEmpaty && (
            <article className="bg-blue-400 h-full space-y-4">
              {products?.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <div className="w-[135px] h-[92px]">
                    <Image
                      src={product.thumbnail}
                      width={200}
                      height={200}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold TextLimit">
                      {product.title}
                    </p>

                    <div className="space-x-4 my-2">
                      <span> {formatPrices(product.price)} </span>
                      {product.originalPrice === product.price ? null : (
                        <span className="line-through text-[#7d8184eb]">
                          {product.originalPrice !== null &&
                            formatPrices(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <p>Quantity</p>
                  </div>
                  <button
                    className="font-sembold h-5"
                    onClick={() => deleteProduct(product.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </article>
          )}

          <Footer
            minicartEmpaty={minicartEmpaty}
            totalPrice={100}
            oncloseModal={oncloseModal}
          />
        </div>
      </div>
    </dialog>
  );
}
