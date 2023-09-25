import Link from 'next/link';
import './styles.css';

export function FooterMobile() {
  return (
    <>
      <details className="w-full">
        <summary className="flex justify-between items-center text-lg font-semibold uppercase">
          Suporte
        </summary>
        <nav>
          <ul className="space-y-3 mt-3">
            <li>
              <p className="w-full">Em todas as cidades do Brasil</p>
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
      </details>

      <details className="w-full">
        <summary className="flex justify-between items-center text-lg font-semibold uppercase">
          Conta
        </summary>
        <nav>
          <ul className="space-y-3 mt-3">
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
      </details>

      <details className="w-full">
        <summary className="flex justify-between items-center text-lg font-semibold uppercase">
          Acesso Rápido
        </summary>
        <nav>
          <ul className="space-y-3 mt-3">
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
      </details>
    </>
  );
}
