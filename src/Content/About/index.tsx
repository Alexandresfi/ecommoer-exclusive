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
          src="https://lh3.googleusercontent.com/pw/AIL4fc_XOxC0D40p-kXnkPP2LePal8QN7kUOtBLQiq_b_zmHr-Fl03Ns8y5EfmZlcBdR1CUqSbN0_EMDIoBY9IqUv8GV_1-vHTxTC3hBFNOjXj8ACU83QPirO2hpSjpdQS1gJIi-48BudkMogE3PjprDFIanFmVI1UGk3vdVsWRXvirT-BndpojXQFQJ69LXmZki5PKvSTvgLl0ubIEE_oIDc9nPzVAaFt9GvcEuWsynXMMjDhGeo87CsyM_-WCVg5MLCiTfjM-Y0HnEYb-dmEFnmugqy-XsW-T9_pOtm4QpVEh7cLUxJKjxuH3Ajgg6gsDIVZwlYhrKB-7-n-yBs7vlTyZVYs2gUfuoVQFKwNIksbDs6YvBDOg99t-ryWEZX5ZlKNKBTMwDyfeVGd-8C-1ZyegI3wUc0XQkmZKbZgijbAfugAKWOXvGAV6-1Lg-G1lfdxo8AMLV7ccGHkT9YryGH8_cbPp6hCOhrW84BnOVeOG62SBv7cWd421jfPbDoCcMfLK_jFnjLu8-geNrA83jBlkkqRoTb4UHoG0Y2j5FCYDeV02SJkviP7uaNBTWmJAL6hlRacEKTUiIXhuL8aquz7TyvS8Inh0oNNcYCe6jAtkAyFYz1ZtT_EDYK-kmj4pO_iBbFKB5GlMH9oamlreb7c9B2Rr6HmKBX7MAYn9bXU8kfxST9f99TacCm5I9jmhsjHQFPoszoUzxNZ3bADAs4x73pTv78GvZkgvyu2hVAN4Yre0_HaOeNJtIxXXQCvW4Kt06LatlAkv2a07Lb-BsGu7yGry1SUl95kxAjPLmmYmMgy8xs1NYLLpOKNAhSayUvuGYW4WwRsRMlgOYSoLsRiKXFaLjRzxZxE9GzQlSzPtROjcQbuyY-Eol9riZzwqFNZvubGwenHSXdnMMiaU-VZScjWyUYQ0FEZ_98454d2ayv5PNAtKJbrv-01E=w705-h609-s-no?authuser=0"
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
