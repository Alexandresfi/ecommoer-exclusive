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
          src="https://lh3.googleusercontent.com/pw/AIL4fc9OQl00cu_6QgLWamVtsCLCIDQ2wSWYnngSSVGS9__EfXs7r0LCudPAyuMs1l8yP12WnfEyC3yNeVvScnJq13nVFyw29TS1fPOHHSwJXP4O_iAZ2cUqcrnuiocx3ntjtBGpuX2XX82E5ZV7_qixpoBvKl865i9O9-Es4Nr7dX9AwP3zDrD-2gapB-yOBsnCg2GDTjiPBhltC3dl7MH8_xCtfGoM0gIJVw5vX1kVn-GO1FhGyPjBkKNnVYIOyA_0SFO7JQzBiLxEIjVBjLQFZDxTM0WBKEi8Kus3MP5BKlhTjuGFiY4oZPHpFwYitv9BRK6hzZy4xcS6obkBbXcpJbnH9ytqVwogRWa0APShD0ObRhKYZYAsAHDIaI-cv5jFpgIm-G1Wj-1PLp4W1CiYVj_T6e_6ibzXpcBZMipHjEot_15nWKAh2ymaxN8ACZy-D9wi3V1EQ02lQCtuyfDTzSrb7N4xvRSbcIsaDN4-LbDqWfi9U7g1yO1GR8-2nt96hh8wQLSv0a4Ahsuf5xBGYzUqCGC4g4Gj_tIYMgSEFhbrOP-UdtopiTU4LUlVVl0SJAbV9Q9FtbCQLmtfs_-SvatpW7LfQquJL7sg9lIeDsb3-85-nVhHdzyKsWi_Wd-8CaG6RuECd2SnRqKgXsFs0E6snDg_AkaILiHuIPsEk3eqa5Eb2PGVZm8Ltd19CgqhWVAv385_g7OP6Kg1DVrkpM_3g9rf5awWSCR3feVmHqNBVyXWEMEEsJJb7GWKjsfcy9LCwywQvt4EO5uLmKuqkyfRGQbS_80zGbricpEXtDKQOCcH6g43DKGkuSAEoaFBP2pwjBByZqLuo4s1FHwdySshpUpgsrY50BaIMJUSOWQT072hiKhhly3piIcBpE9xzx-WlJwdExvx6lWUMhxsmd-kepHALzbi4HsohlbXtlaxxXFrDEK4OpCcaRE=w705-h609-s-no?authuser=0"
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
