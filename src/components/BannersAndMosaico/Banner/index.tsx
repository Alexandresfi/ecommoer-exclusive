import Image from 'next/image';
import Link from 'next/link';

export function Banner() {
  return (
    <Link
      href="/search/caixas de som sem fio"
      prefetch={false}
      className="mt-[35px] mb-[35px] max-w-full flex justify-center items-center px-5 lg:px-0"
    >
      <Image
        src="https://lh3.googleusercontent.com/pw/AIL4fc9qSt915ZUPIYwkzDX6RRTOqYoysT3CqwbdqNbziRMRq9hbLYTKO9he59Rkb4eajYAn6CmSYvFtMIJNrRO7NPmSZpHmEs52qUEYg28DrnM7ogo2rcUxYoBWCYnII5fnHkDm-xp7osnaoBehAFu3QSmh1eD8pi_95THj8n1j4oqY6zaXXaljvL3kUZ-sMoN0tDkErdil2Mzg6h0CWL5jDDsI4AG1Rih7tP3WTo5M0vOpZ1pQaVHj2VNKwcksEM0FEGUCJlcWabmfmUSidJPc0-YGQS_LIGMd0NcuG0lEtcTOn-3gwIyn1ktBj-TXRMpT2y1FCgrXm5QLGBQgm2sPu849k2DtA_lfjIAnVM9pE81Z1AQmhLa4qCrgSiWl2sdZg2r0iykzXGB4xj-NIlZDTikERrG6qq7pXKZ0om_9zbioFJ92aN36R1C0oi93FCEHDDqu7bltvcGEWLA3BW0Gur2L-xhjNSSv0GgQNFt4ty-w7O1jWM6neU2jd3v-TbpiyYXfp7a1i6caxcn2NCSLSRNCjUV0AP05UDJHIeVPVAVhdhJf3nOi6Z9PGjQpmZkjSTUGU-74pkxiTCfmGxN3Dk4H__SfoKtcvfquGWDJc507RFOgpWwLn2YvdWNBmae4tBfGctPwSzewBEUmhJA62kiMQiI2uaIS-ymCMCYlbzurqWHXGMqO6i8FBGMqFiADUHNvbDUrvUrXSRUNrnSTpfyUmrmmOI_vNJ5x-68usvCuWZhE9HvCOUu2haPygs082MlCblEXLFSjjcvEzDqjy2rwDUGNDsBvV_5zZM9MjHy4hCq9qP3NeIHK4zOUUeny-MbwjrMKTQVz33nAcRyGPrPNV-DqkmV9feOx44OZ_9DQjL8ApyYrNKwVIiMhtf5NPpGTybejVy_fZYjwlzsv75HVbvoWZE74o4eo78BwMfYnBCOEUnh0awWN0W8=w1170-h500-s-no?authuser=0"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
