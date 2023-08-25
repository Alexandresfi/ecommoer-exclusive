import { ContainerResultSearch } from '@/Content/Search';

interface ResultPagePros {
  params: {
    id: string;
  };
}

export default function SearchResult({ params: { id } }: ResultPagePros) {
  return (
    <div className="max-w-container m-auto px-5 lg:px-0">
      <ContainerResultSearch productName={id} />
    </div>
  );
}
