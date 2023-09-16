import Image from 'next/image';

interface ProductLink {
  productLink: string;
}

export default function NotFound({ productLink }: ProductLink) {
  return (
    <div className="flex flex-col max-w-container m-auto">
      <div className="m-auto">
        <h1 className="text-2xl text-center my-10 font-bold">
          Eita, parece que algo inesperado aconteceu! 😥
        </h1>
        <Image
          src={'https://media4.giphy.com/media/VIQfHC9jAZbt6ojTdo/giphy.gif'}
          width={500}
          height={600}
          alt="confuso"
          className="m-auto"
        />
      </div>
      <p className="text-lg text-center my-5">
        Não conseguimos encontrar a categoria{' '}
        <span className="font-semibold">{`"${productLink}"`}</span> que você
        está procurando, verifique se:
      </p>

      <ul className="text-center text-lg leading-relaxed">
        <li>Se você digitou o nome da categoria corretamente.</li>
        <li>
          Caso tenha digitado o nome corretamente, então por enquanto não temos
          esta categoria.
        </li>
        <li>
          Procure outras categorias em nossa loja, tenho certeza que você irá
          encontrar algo muito interessante.
        </li>
      </ul>
    </div>
  );
}
