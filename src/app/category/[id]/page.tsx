interface PDPPros {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params: { id } }: PDPPros) {
  return <h1 className="text-black">Futura Category Page {id}</h1>;
}
