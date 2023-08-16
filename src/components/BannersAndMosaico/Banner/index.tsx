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
        src="https://scontent.fjpa14-1.fna.fbcdn.net/v/t39.30808-6/367417937_122099954072016045_6982913111284872819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=tELr1-Ja_a8AX9SSsD3&_nc_ht=scontent.fjpa14-1.fna&oh=00_AfBp1LZ2FpyVk21xmHlStl1bvk_bugScpVYnoNvX-0sbWw&oe=64E15C53"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
