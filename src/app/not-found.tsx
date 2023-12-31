import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-[70vh] max-w-container m-auto">
      <h1>Oops! Ainda estamos em construção!</h1>
      <p>
        Estamos em construção, por favor volte para a <Link href="/">Home</Link>
      </p>
    </div>
  );
}
