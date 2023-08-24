'use client';
import { getCodeName } from '@/utils/codeName';
import { Truck } from '@phosphor-icons/react';
import { Suspense, useState } from 'react';

interface ResponseDelivery {
  Codigo: string;
  Valor: string;
  PrazoEntrega: string;
  Erro: string;
  MsgErro?: string;
}

export function CalcDelivery() {
  const [deliveryValues, setDeliveryValues] = useState<ResponseDelivery[]>([]);
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
      const data = {
        cep
      };

      const responseDelivery = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
      });

      const deliveryArray = await responseDelivery.json();
      const deliveryData: ResponseDelivery[] = deliveryArray.response;

      setLoading(false);
      setDeliveryValues(deliveryData);
      console.log(deliveryData);
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
      {deliveryValues?.length > 0 && !deliveryValues[0].MsgErro ? (
        <ul className="text-sm font-semibold pl-[46px]">
          {deliveryValues?.map((item, index) => (
            <>
              <li key={index}>
                <span>
                  {item.Erro === '0' ? `${getCodeName(item.Codigo)}` : null}
                </span>
                <span>{item.Erro === '0' ? ` | R$ ${item.Valor} ` : null}</span>
                <span className="font-normal text-green-500 block my-1">
                  {item.Erro === '0'
                    ? ` Receba em até: ${item.PrazoEntrega} dias`
                    : null}
                </span>
              </li>
            </>
          ))}
        </ul>
      ) : (
        <>
          {deliveryValues[0]?.MsgErro && (
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
