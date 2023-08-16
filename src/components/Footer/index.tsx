'use client';

import { Copyright, PaperPlaneRight } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="pt-20 pb-6 text-white-primary bg-black">
      <div>
        <div className="flex justify-center items-baseline gap-10 flex-wrap px-5 md:justify-start lg:px-0 max-w-container lg:gap-0 lg:justify-between m-auto">
          <div>
            <Link href="/" prefetch={false} className="text-2xl font-bold mb-3">
              Exlusive
            </Link>
            <nav>
              <ul className="space-y-3">
                <li>Inscreva-se</li>
                <li>
                  <p className="max-w-[200px] w-full">
                    Ganhe 10% de desconto no seu primeiro pedido
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-1 max-w-[250px] w-full border-[1.5px] rounded border-white-default py-3 px-4">
                    <input
                      type="email"
                      name="email-footer"
                      placeholder="Seu e-mail"
                      className="bg-transparent w-[196px] text-white-primary placeholder:text-white-primary"
                    />
                    <button className="text-white-default">
                      <PaperPlaneRight size={25} />
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-[251px] md:w-auto">
            <h3 className="text-xl font-bold mb-3">Suporte</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <p className="max-w-[200px] w-full">
                    Em todas as cidades do Brasil
                  </p>
                </li>
                <li>
                  <a
                    href="mailto:alexandre.sfi@hotmil.com"
                    target="_blank"
                    className=" decoration-white-default no-underline text-base"
                  >
                    exclusive@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5583999999999&app_absent=0"
                    target="_blank"
                    className=" decoration-white-default no-underline text-base"
                  >
                    +55 83 9999-9999
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-[251px] md:w-auto">
            <h3 className="text-xl font-bold mb-3">Conta</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link href="/account" prefetch={false}>
                    Minha conta
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    Login / Cadrastrar-se
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    Carrinho
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    WhishList
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    Meus pedidos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-[251px] md:w-auto">
            <h3 className="text-xl font-bold mb-3">Acesso rápido</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link href="/account" prefetch={false}>
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    Termo de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/login" prefetch={false}>
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-[251px] md:w-auto">
            <h3 className="text-xl font-bold mb-3">Baixe nosso APP</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <p className="max-w-[250px] w-full">
                    Economize R$ 3,00 apenas com o novo usuário do aplicativo
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="https://th.bing.com/th/id/OIP.eNVv94Hl4M3Yr2UbwmNPAgAAAA?pid=ImgDet&rs=1"
                    alt="qr code"
                    width={80}
                    height={80}
                  />
                  <div className="space-y-4 flex flex-col">
                    <Link href="#">
                      <Image
                        src="https://th.bing.com/th/id/R.76f3ba71e38a64a86c1ab2dcb87499ca?rik=vvMWw5pOccX2Rw&pid=ImgRaw&r=0"
                        width={110}
                        height={40}
                        alt="abrir google play"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        src="https://logodownload.org/wp-content/uploads/2017/05/disponivel-na-app-store-botao-2.png"
                        width={110}
                        height={40}
                        alt="Abrir na app store"
                      />
                    </Link>
                  </div>
                </li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-white-default opacity-40 pt-4 flex justify-center gap-2 w-full mt-[60px]">
          <Copyright size={25} />
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
