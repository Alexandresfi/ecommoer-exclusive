'use client';
import { ArrowsCounterClockwise, Truck } from '@phosphor-icons/react';

//https://www.npmjs.com/package/correios-brasil Ver isso para colocar a consulta do valor do frete
export function Delivery() {
  return (
    <ul className="border rounded">
      <li className="text-black px-4 py-6 flex items-center gap-4 border-b">
        <Truck size={30} />
        <label
          htmlFor="cep"
          className="flex flex-col gap-1 text-base font-medium"
        >
          Frete Grátis{' '}
          <input
            type="number"
            name="cep"
            maxLength={8}
            id="cep"
            placeholder="Digite seu CEP p/ consultar disponibilidade"
            className="border-b border-black text-black text-xs w-[259px] h-5 focus-within:border-none"
          />
        </label>
      </li>

      <li className="text-black flex px-4 py-6 items-center gap-4">
        <ArrowsCounterClockwise size={30} />
        <div className="flex flex-col gap-1">
          <span className="font-medium text-base">Devolução</span>
          <span className="font-medium text-xs">
            Devoluções de entrega gratuita em até 30 dias.
          </span>
        </div>
      </li>
    </ul>
  );
}
