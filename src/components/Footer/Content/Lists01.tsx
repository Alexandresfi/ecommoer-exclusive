import { PaperPlaneRight } from '@phosphor-icons/react';
import Link from 'next/link';

export function FirstThreeLists() {
  return (
    <div>
      <div>
        <h3>Exlusive</h3>
        <nav>
          <ul>
            <li>Inscreva-se</li>
            <li>Ganhe 10% de desconto no seu primeiro pedido</li>
            <li>
              <div className="flex items-center gap-8 max-w-[217px] w-full border-[1.5px] rounded border-white-default py-3 pr-4">
                <input
                  type="email"
                  name="email-footer"
                  placeholder="Seu e-mail"
                />
                <button className="text-white-default">
                  <PaperPlaneRight size={25} />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h3>Suporte</h3>
        <nav>
          <ul>
            <li>Em todas as cidades do Brasil</li>
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

      <div>
        <h3>Conta</h3>
        <nav>
          <ul>
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
    </div>
  );
}
