'use client';

import { DialogHTMLAttributes } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { UseMinicart } from '@/hooks/MinicartContext';
import { formatPrices } from '@/utils/formatPrice';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Quantity } from './Components/Quantity';
import './styles.css';
interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  oncloseModal: () => void;
}

export function Minicart({ oncloseModal, ...otherProps }: DialogProps) {
  const router = useRouter();
  const { products, deleteProduct } = UseMinicart();

  const minicartEmpaty = products?.length < 1;

  function totalPrice() {
    const totalPriceCalc = products?.reduce((accumulator, current) => {
      const quantity = current.quantity !== undefined ? current.quantity : 0;
      return accumulator + quantity * current.price;
    }, 0);

    return formatPrices(totalPriceCalc);
  }

  function redirectProducty(id: string, rating: number) {
    router.push(`/product/${id}-${rating}`);
    oncloseModal();
  }

  return (
    <dialog {...otherProps}>
      <div className="min-h-screen rounded ml-auto flex justify-end w-full">
        <div
          className="min-h-screen basis-1/5 md:basis-4/5 bg-[#08080833]"
          onClick={oncloseModal}
          data-testid="close-minicart-outside"
        />
        <div className="bg-white-default rounded flex flex-col justify-between basis-4/5 px-5 md:max-w-[400px]">
          <Header oncloseModal={oncloseModal} />

          {minicartEmpaty && (
            <h2 className="text-lg font-semibold text-center">
              Seu carrinho de compras está vázio!
            </h2>
          )}

          {!minicartEmpaty && (
            <article className="h-full space-y-4 cursor-pointer">
              {products?.map((product, index) => (
                <div key={product.id} className="flex gap-2">
                  <div className="w-[135px] h-[92px]">
                    <Image
                      src={product.thumbnail}
                      width={135}
                      height={92}
                      alt={product.title}
                      className="w-[135px] h-[100px] object-cover"
                      onClick={() =>
                        redirectProducty(product.id, product.reputation)
                      }
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold TextLimitMinicart"
                      onClick={() =>
                        redirectProducty(product.id, product.reputation)
                      }
                    >
                      {product.title}
                    </p>

                    <div className="space-x-4 my-2 text-sm">
                      <span className="font-semibold">
                        {' '}
                        {formatPrices(product.price)}{' '}
                      </span>
                      {product.originalPrice === product.price ? null : (
                        <span className="line-through text-[#7d8184eb]">
                          {product.originalPrice !== null &&
                            formatPrices(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <Quantity
                      idProduct={product.id}
                      quantity={product.quantity!}
                    />
                  </div>
                  <button
                    className="font-sembold h-5"
                    data-testid={`delete-product-button-${index}`}
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
            totalPrice={totalPrice()}
            oncloseModal={oncloseModal}
          />
        </div>
      </div>
    </dialog>
  );
}
