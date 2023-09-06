'use client';
import { Envelope, Phone } from '@phosphor-icons/react';

export function InfoCard() {
  return (
    <div className="flex flex-col py-10 px-2 gap-8 shadow-md rounded xl:px-5">
      <div className="border-b-2 pb-8 flex flex-col gap-4 text-sm">
        <p className="flex gap-4 items-center">
          <span className="w-10 h-10 flex justify-center items-center rounded-full bg-orange-secondary">
            <Phone size={24} color="#fff" />
          </span>

          <p>Ligue para nós</p>
        </p>
        <p className="max-w-[260px]">
          Estamos disponíveis 24 horas por dia, 7 dias por semana.
        </p>

        <p>Celular: +5583999999999</p>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        <p className="flex gap-4 items-center">
          <span className="w-10 h-10 rounded-full flex justify-center items-center bg-orange-secondary">
            <Envelope size={24} color="#fff" />
          </span>

          <p>Ecreva para nós</p>
        </p>

        <p className="max-w-[260px]">
          Preencha nosso formulário e entraremos em contato em até 24 horas.
        </p>

        <p>Emails: customer@exclusive.com</p>

        <p>Emails: suporte@exclusive.com</p>
      </div>
    </div>
  );
}
