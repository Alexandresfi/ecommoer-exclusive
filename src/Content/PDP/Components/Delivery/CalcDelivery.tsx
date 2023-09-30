'use client';
import { calcDays } from '@/utils/calcDays';
import { formatPrices } from '@/utils/formatPrice';
import { Truck } from '@phosphor-icons/react';
import { useState } from 'react';

interface ResponseDelivery {
  options: {
    id: string;
    name: string;
    base_cost: string;
    estimated_delivery_time: {
      date: string;
    };
  }[];
  message?: string;
}

interface IdProduct {
  id: string;
}

export function CalcDelivery({ id }: IdProduct) {
  const [deliveryValues, setDeliveryValues] = useState<ResponseDelivery>();
  const [loading, setLoading] = useState(false);

  function handleChange(value: string) {
    const lenght = value.length;
    const isAllnumber = /^\d*$/;
    if (lenght === 8 && isAllnumber.test(value)) {
      calcDelivery(value);
    }
  }

  async function calcDelivery(cep: string) {
    setLoading(true);

    try {
      const responseDelivery = await fetch(
        `https://api.mercadolibre.com/items/${id}/shipping_options?zip_code=${cep}`,
        {
          cache: 'no-store'
        }
      );
      const deliveryArray = await responseDelivery.json();
      const deliveryData: ResponseDelivery = await deliveryArray;

      if (!deliveryData) {
        alert(
          'A API que fornece os dados está enfrentando alguns problemas, por favor tente mais tarde!'
        );
      } else {
        setLoading(false);
        setDeliveryValues(deliveryData);
      }
    } catch (error) {
      console.log('error:', error);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Truck size={30} />
        <div className="flex flex-col items-end gap-4">
          <label
            htmlFor="cep"
            className="flex flex-col gap-1 text-base font-medium"
          >
            Cálculo de Frete{' '}
            <input
              id="cep"
              type="text"
              name="cep"
              maxLength={8}
              pattern="^[0-9]{8}$"
              placeholder="Digite seu CEP p/ consultar disponibilidade"
              alt="Digite apenas numeros"
              className="border-b border-black text-black text-xs w-[259px] h-5 focus-within:border-none focus-within:px-2"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              disabled={loading}
            />
          </label>
        </div>
      </div>
      {!deliveryValues?.message ? (
        <ul className="text-sm font-semibold pl-[46px]">
          {deliveryValues?.options?.map((item, index) => (
            <li key={index}>
              <span>{deliveryValues.message ? null : item.name}</span>
              <span>
                {deliveryValues.message
                  ? null
                  : ` | R$ ${formatPrices(Number(item.base_cost))} `}
              </span>
              <span className="font-normal text-green-500 block my-1">
                {!deliveryValues.message
                  ? ` Receba em até: ${calcDays(
                      item.estimated_delivery_time.date
                    )}`
                  : null}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {deliveryValues.message && (
            <p className="text-red-500 text-sm pl-[46px]">
              {' '}
              CEP inexistente. Por favor, verifica o CEP informado!
            </p>
          )}
        </>
      )}
    </div>
  );
}
