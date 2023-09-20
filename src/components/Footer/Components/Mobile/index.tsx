import Link from 'next/link';

//ideia para resolver a quest;ao da setinha: criar um componente separado para summary e colocar um onClik para toda vez que for clicado aplicar uma className que gira 180° no after

export function FooterMobile() {
  return (
    <>
      <details className="w-full">
        <summary className="bg-blue-600 flex justify-between after:content-['aparada']">
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

      <details>
        <summary>Conta</summary>
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
      </details>

      <details>
        <summary>Acesso Rápido</summary>
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
      </details>
    </>
  );
}
