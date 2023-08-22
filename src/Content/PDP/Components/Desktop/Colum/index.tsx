import { ContainerImages } from './left';

interface Props {
  pictures: {
    url: string;
  }[];
}

export function InfoProduct({ pictures }: Props) {
  return (
    <div>
      <ContainerImages pictures={pictures} />
    </div>
  );
}
