'use client';

import { ArrowsCounterClockwise } from '@phosphor-icons/react';
import { CalcDelivery } from './CalcDelivery';

interface IdProps {
  id: string;
}

export function Delivery({ id }: IdProps) {
  return (
    <ul className="border rounded">
      <li className="text-black px-4 py-6 border-b">
        <CalcDelivery id={id} />
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
