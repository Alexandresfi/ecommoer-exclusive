import Image from 'next/image';
import Link from 'next/link';

interface ProductName {
  productName: string;
}

export default function NotFound({ productName }: ProductName) {
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
        Não conseguimos encontrar o produto{' '}
        <span className="font-semibold">{`"${productName}"`}</span> que você
        está procurando, verifique se:
      </p>

      <ul className="text-center text-lg leading-relaxed">
        <li>Você digitou o nome do produto corretamente.</li>
        <li>
          Caso tenha digitado o nome corretamente, então por enquanto não temos
          este produto.
        </li>
        <li>
          Procure outros produtos na nossa loja, tenho certeza que você irá
          encontrar algo muito interessante.
        </li>
      </ul>
    </div>
  );
}
