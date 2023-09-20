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
        src="https://raw.githubusercontent.com/alexandredevfront/images-ecommerce-exclusive/main/banner-01-desktop.jpg"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
