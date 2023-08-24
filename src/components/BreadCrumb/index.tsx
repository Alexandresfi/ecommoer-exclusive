import Link from 'next/link';

interface Props {
  category: string;
  production: string;
}

export function BreadBrumb({ category, production }: Props) {
  return (
    <nav className="my-10 px-5 lg:px-0">
      <ul className="text-black text-sm lg:text-base flex flex-wrap items-center gap-2">
        <li className=" underline">
          <Link href="/">Home</Link>
        </li>
        <span>/</span>
        <li className="underline">
          <Link href={`/${category}`}>Cateogria</Link>
        </li>
        <span>/</span>
        <li className="font-bold">{production}</li>
      </ul>
    </nav>
  );
}
