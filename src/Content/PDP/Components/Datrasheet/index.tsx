interface DataProps {
  warranty: string;
  attributes: {
    name: string;
    value_name: string;
  }[];
}

export function DataSheet({ attributes, warranty }: DataProps) {
  return (
    <article>
      <h1 className="text-2xl font-semibold tracking-[0.72px] mb-4">
        Ficha técnica
      </h1>
      {warranty !== null && (
        <ul className="odd:bg-white-primary">
          <li className="flex gap-4 px-1 py-2 text-sm">
            <p>{warranty?.split(':')[0]} :</p>
            <p>{warranty?.split(':')[1]}</p>
          </li>
        </ul>
      )}

      {attributes.map((attribute, index) => (
        <ul key={index} className="odd:bg-white-primary">
          <li className="flex gap-4 px-1 py-2 text-sm">
            <p>{attribute.name} :</p>
            <p>{attribute.value_name}</p>
          </li>
        </ul>
      ))}
    </article>
  );
}
