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
        src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/367417937_122099954072016045_6982913111284872819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=DuyM8TtPomkAX9_fLlr&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfDN6594JWY2ZvrRCQ6VfoTZT_ED0CkTjGx6vi36j7TQiw&oe=6504F4D3"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
