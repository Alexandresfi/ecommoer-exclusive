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
        <Link href="/search/ps5" prefetch={false} className=" ps5 md:h-[600px]">
          <Image
            src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/367419759_122099954066016045_3790124209147070857_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=kro9oQ6WKYMAX8VvfOi&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfDQ96fYn1CYUfUO6GtdbapoB-LBPd7oW28IEbpGdhWKMw&oe=650431F2"
            width={570}
            height={600}
            alt="PS5"
            className="lg:object-fill lg:h-[600px]"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366388830_122099954120016045_4525884468665766813_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=TGxHnykgy9QAX97O5CS&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfDwMoosPbFzvo6C4jgEQM8gZAjqxgpOdVQ-u1n0wcoR6Q&oe=650449D9"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366020718_122099954030016045_6291465260317602623_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=COqlFyAtL2oAX80BwOM&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfBPGWO1NzRjW9SCXaxV_tYbqMF41XYmN9ZdU9b1U4mPOA&oe=65040EAB"
          mobileSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366712592_122100241064016045_7625653874886988153_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=64QDS2JtnloAX9LHKmp&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfB5hqhTpfgkv0iRkh7QHy2qx8HZWXL53Z7yyAVm-a8xwg&oe=650465CE"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/366721509_122099954036016045_2154770625591380574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=_9CGl5la1jEAX8DK3TD&_nc_oc=AQmZPqXMtCzhjJxOZNpYeaTNU_MhpAeJIbevtImfQheJJHW3rZWS3r7pqT3n7HcJOG0&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfAy8Vly33D5IoPH2yyZ6TNK-63q8MmIk5i6MhteVamtoQ&oe=650442E0"
          mobileSrc="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/368033859_122100241058016045_1723528434707066482_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=3jrUnDhCx9cAX9wZQAo&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfAShoFQjvcPgpbFAH4w9ir7ieZIUoZfCaF6VVwB9q1cyQ&oe=6504E369"
        />
      </div>
    </div>
  );
}
