import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import { Header } from '@/components/Shelfies/Components/Header';
import { HandleImg } from './handleImg';

export function Moisaico() {
  return (
    <div className="mt-[35px] mb-[35px]">
      <Header title="Novidades" subTitle="Veja o que tem de novo" />
      <div className="flex flex-col items-center lg:grid max-w-container gap-[30px] m-auto mosaico px-5 lg:px-0">
        <Link href="/search/ps5" prefetch={false} className=" ps5">
          <Image
            src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/367419759_122099954066016045_3790124209147070857_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Kp7I3Z_1qYEAX8BQJI0&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfCLko7ym1ukpISNqPYkGW8PxK2eBII7__JyGcBdNnOoEg&oe=64E09972"
            width={570}
            height={600}
            alt="PS5"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366388830_122099954120016045_4525884468665766813_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=XHIOgMvCD8UAX_9Ol_K&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfDaNMluVkPdRYouBd1LdOtNfRuyd78HMX0sX06f1gKnxA&oe=64E0B159"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366020718_122099954030016045_6291465260317602623_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=JWkxpLLUMOoAX_UKSKr&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfDm41P0DKvNl-9CyaWwU2QyNwZDvngulmWvnJJlLcb_Sw&oe=64E0762B"
          mobileSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366712592_122100241064016045_7625653874886988153_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zQ_FjBWPHbkAX_SWWy6&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfCl3irdraOt-YKr_CwfjSC_kzjCYsz26sUMvcuhq4C4ZQ&oe=64E0CD4E"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366721509_122099954036016045_2154770625591380574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=H0gw-MkSEWsAX-oYDkL&_nc_oc=AQmFrRR5JDhuB_NR1yGBq8QOImI3y-pTvlE4M5hIRWp1_H9SeII9-HVYrzY1rOD1nF8&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfBEIC3WLqWKEGuIudUlVAa9SAy83cU-Hc_QgI2UPbDOJw&oe=64E0AA60"
          mobileSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/368033859_122100241058016045_1723528434707066482_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=iMb2orr3BBMAX_V96D9&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfAM-b6mHu1-7o3KH3WeddNT9_EdjN-eW8xZmw1HiIvdEQ&oe=64E14AE9"
        />
      </div>
    </div>
  );
}
