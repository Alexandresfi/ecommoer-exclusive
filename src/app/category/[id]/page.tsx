import { ContainerCategory } from '@/Content/Category';

interface PDPPros {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params: { id } }: PDPPros) {
  return (
    <div className="max-w-container m-auto px-5 lg:px-0">
      <ContainerCategory productLink={id} />
    </div>
  );
}
