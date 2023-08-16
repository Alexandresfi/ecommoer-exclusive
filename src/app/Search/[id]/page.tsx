interface ResultPagePros {
  params: {
    id: string;
  };
}

export default function SearchResult({ params: { id } }: ResultPagePros) {
  return <h1 className="text-black">Futura Search Result Page</h1>;
}
