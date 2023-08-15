interface PDPPros {
  params: {
    id: string;
  };
}

export default function PDP({ params: { id } }: PDPPros) {
  return <h1 className="text-black">Futura PDP</h1>;
}
