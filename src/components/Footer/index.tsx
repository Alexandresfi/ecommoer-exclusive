import Link from 'next/link';
import Image from 'next/image';

import { CopyRight } from './Components/CopyRight';
import { HandleLayoutFooter } from './ToggleLayout';
import { SendEmail } from './Components/Email';

export function Footer() {
  return (
    <footer className="mt-20 pt-20 pb-6 text-white-primary bg-black">
      <div>
        <div className="flex justify-center items-baseline flex-col md:flex-row gap-10 flex-wrap max-w-[270px] md:px-5 md:justify-start xl:px-0 md:max-w-container lg:gap-0 lg:justify-between m-auto">
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
                  <SendEmail />
                </li>
              </ul>
            </nav>
          </div>
          <HandleLayoutFooter />

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
        <CopyRight />
      </div>
    </footer>
  );
}
