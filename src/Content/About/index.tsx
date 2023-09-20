import { BreadBrumb } from '@/components/BreadCrumb';
import Image from 'next/image';
import { InfoAbout } from './InfoAbout';
import { InfosShop } from '@/components/InfoComponent';

export function ContainerAbout() {
  return (
    <main>
      <div className="max-w-container m-auto px-5 xl:px-2">
        <BreadBrumb name="Sobre" />
      </div>
      <div className="flex justify-between items-center flex-wrap gap-y-10 max-w-offer ml-auto px-5 xl:px-2">
        <div className="max-w-[525px]">
          <h1 className="mb-10 text-3xl tracking-[3.24px] text-center font-bold lg:text-start lg:text-5xl">
            Nossa História
          </h1>
          <p className="mb-6 font-medium">
            Lançado em 2015, o Exclusive é o principal local de compras on-line
            do Sul da Ásia, com presença ativa em Bangladesh. Apoiada por uma
            ampla gama de soluções personalizadas de marketing, dados e
            serviços, a Exclusive possui 10.500 vendedores e 300 marcas e atende
            3 milhões de clientes em toda a região.
          </p>
          <p className="font-medium">
            A Exclusive tem mais de 1 milhão de produtos para oferecer,
            crescendo muito rapidamente. Exclusive oferece uma variedade
            diversificada em categorias que vão desde o consumidor.
          </p>
        </div>
        <Image
          src="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/img-about-us-1.png"
          width={705}
          height={609}
          alt="image main about us"
          className="max-w-[520px] xl:max-w-[705px] w-full h-[609px] object-cover"
        />
      </div>
      <div className="max-w-container mx-auto my-10 px-5 xl:px-2">
        <InfoAbout />
        <InfosShop />
      </div>
    </main>
  );
}
