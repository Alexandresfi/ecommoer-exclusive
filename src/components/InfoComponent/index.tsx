'use client';
import { Truck, Headset, ShieldCheck } from '@phosphor-icons/react';

export function InfosShop() {
  return (
    <div className="max-w-container m-auto my-20">
      <div className="flex justify-center items-center gap-y-4 flex-wrap md:justify-between md:gap-y-0 max-w-[944px] w-full m-auto">
        <div className="max-w-[256px] w-full">
          <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
            <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
              <div className=" text-white-default">
                <Truck size={25} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-lg text-black text-center max-w-[256px] mb-2 lg:h-[54px]">
              ENTREGA GRATUITA E RÁPIDA
            </h2>
            <p className="text-black text-sm text-center max-w-[221px] m-auto md:max-w-[256px]">
              Entrega gratuita para todos os pedidos acima de R$ 140, 00
            </p>
          </div>
        </div>

        <div className="max-w-[256px] w-full">
          <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
            <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
              <div className=" text-white-default">
                <Headset size={25} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-lg text-black text-center max-w-[256px] mb-2 lg:h-[54px]">
              ATENDIMENTO AO CLIENTE 24 HORAS por dia
            </h2>
            <p className="text-black text-sm text-center max-w-[221px] m-auto md:max-w-[256px]">
              Suporte ao cliente amigável 24 horas por dia, 7 dias por semana
            </p>
          </div>
        </div>

        <div className="max-w-[256px] w-full">
          <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
            <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
              <div className=" text-white-default">
                <ShieldCheck size={25} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-lg text-black text-center max-w-[256px] mb-2 lg:h-[54px]">
              GARANTIA DE DEVOLUÇÃO DE DINHEIRO
            </h2>
            <p className="text-black text-sm text-center max-w-[221px] m-auto md:max-w-[256px]">
              Devolvemos o dinheiro em até 30 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
