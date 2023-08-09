import Link from 'next/link';

export function TopBar() {
  return (
    <div className="bg-black text-white-primary text-sm font-normal flex items-center justify-center h-20 lg:h-12 flex-wrap lg:gap-2 px-7 py-2 lg:py-0">
      <p className="text-center">
        Promoção de verão para todos os trajes de banho e entrega expressa
        gratuita - 50% de desconto!
      </p>{' '}
      <Link
        href="/"
        prefetch={false}
        className="font-semibold leading-6 decoration-white-primary underline"
      >
        Compre Agora
      </Link>
    </div>
  );
}
