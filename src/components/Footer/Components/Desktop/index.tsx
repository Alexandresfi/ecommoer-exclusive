import Link from 'next/link';

export function FooterDesktop() {
  return (
    <>
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
    </>
  );
}
