'use client';

import {
  Storefront,
  ShoppingBag,
  CurrencyCircleDollar,
  CurrencyDollar
} from '@phosphor-icons/react';

export function InfoAbout() {
  return (
    <ul className="flex justify-center items-center gap-[30px] flex-wrap lg:justify-start">
      <li className="pb-[20px] px-[35px] max-w-[266px] h-[230px] flex flex-col justify-center items-center gap-4 border rounded hover:bg-orange-secondary hover:text-white-default transition-colors">
        <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
            <Storefront color="white" size={24} />
          </div>
        </div>
        <span className="text-2xl text-center font-bold">10.5K</span>
        <span className="text-center h-12">
          Vendedores ativos em nosso site
        </span>
      </li>
      <li className="pb-[20px] px-[35px] max-w-[266px] h-[230px] flex flex-col justify-center items-center gap-4 border rounded hover:bg-orange-secondary hover:text-white-default transition-colors">
        <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
            <CurrencyCircleDollar color="white" size={24} />
          </div>
        </div>

        <span className="text-2xl text-center font-bold">33K</span>
        <span className="text-center h-12">Venda Mensal de Produtos</span>
      </li>
      <li className="pb-[20px] px-[35px] max-w-[266px] h-[230px] flex flex-col justify-center items-center gap-4 border rounded hover:bg-orange-secondary hover:text-white-default transition-colors">
        <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
            <ShoppingBag color="white" size={24} />
          </div>
        </div>

        <span className="text-2xl text-center font-bold">45.5K</span>
        <span className="text-center h-12">Cliente ativo em nosso site</span>
      </li>
      <li className="pb-[20px] px-[35px] max-w-[266px] h-[230px] flex flex-col justify-center items-center gap-4 border rounded hover:bg-orange-secondary hover:text-white-default transition-colors">
        <div className="bg-white-primary w-16 h-16 rounded-full flex justify-center items-center m-auto">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
            <CurrencyDollar color="white" size={24} />
          </div>
        </div>

        <span className="text-2xl text-center font-bold">25K</span>
        <span className="text-center h-12">
          Venda bruta anual em nosso site
        </span>
      </li>
    </ul>
  );
}
