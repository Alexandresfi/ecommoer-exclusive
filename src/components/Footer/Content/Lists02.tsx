import Image from 'next/image';
import Link from 'next/link';

export function LastTwoList() {
  return (
    <div className="flex">
      <div>
        <div>
          <h3>Acesso rápido</h3>
          <nav>
            <ul>
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
      </div>

      <div>
        <div>
          <h3>Baixe nosso APP</h3>
          <nav>
            <ul>
              <li>Economize R$ 3,00 apenas com o novo usuário do aplicativo</li>
              <li className="flex justify-center items-center gap-2">
                <Image
                  src="https://th.bing.com/th/id/OIP.eNVv94Hl4M3Yr2UbwmNPAgAAAA?pid=ImgDet&rs=1"
                  alt="qr code"
                  width={80}
                  height={80}
                />
                <div>
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
      </div>
    </div>
  );
}
