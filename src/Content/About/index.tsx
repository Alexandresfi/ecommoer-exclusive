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
          src="https://lh3.googleusercontent.com/pw/AIL4fc_Xwrkia0ZZeqCxrNoIcChKaN4TJL9FN4SnW4Jjb4fW7nV4yYGeQNGSr1RE5YOdKYrbP1hcL2EBI4JQSmF81wcQxcpKSDL-q05V4Jz4zxyJhhPlwCpDrTKF60rr2i7wcRR-W3BvCWu33aPr9wS06DNYD1YvE2ySAQIJk1G_Ej_tKfcck4lzvu_Q_cyTcT7YjxRyT040pchYVe1Ucb6WDJrOdRQEdTXcy_-536KXrXCGet4mbagm3F-ykxcFQ-4MbCvo-7teXvSZENHCeYeyzWfbJPXfE0n_GNhxb0NE4s_WIPRM1Hr7DnTeg2MZcEXW244jQREE_GQtGeLumVHZDKedHovXpBn4Bgp5rcNHzCYlLY2Lem3QnsKwilF2TpkieYQtPZNsT6jKU6Hj3QQCgpnEZYCfnP_-7VuNVfltaZbjByZr-P_CYTa_-RAYvEddwRgQuiFmfek2KtriaOOLOUfRll7gT3YMHo1H2r0VTCIfDFnHHoxZShHbOqXDO55rLxlX1L8jzFJyt__BbS8KZOAb2uSbw8HeMu3aynt77ycbLI_A5ELXYeqaAEsk73iaIqLpm9oDpANwV__mvYwO8b3024W5EILHEFT8A3sXfJXa9dFoXPc52I8pfAy1rfNYA2sEWYLtT4HBAs8jkVTIQ7U0b4G4l7-jqSOQuQ3Gtz5b54hoqzFsj33dV9zat-pO3e9j3ZCQlZKOrFCXySM5UxhHpR7YiWV2NLNsb5_N8kGr3CWPVWEiMm7GdFlRNWBl7xtpr2VHQP0PnZ_ghL7I-7wwGFPotx4cH1ohKuP_DWSBK0AVx3w1KS7XG0DZfeY7n1Srn8ujigg-MAI1zjBHrcqpCFtG_lGahyTfC_NS6bq5PZRithqyHobVKXBn635vu_rZo-9PfrvPfOr10sdNU0oqwhOMU5W6DhktumazwjdTdhAnJuAUpgYD0SU=w705-h609-s-no?authuser=0"
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
