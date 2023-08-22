import { ContainerPDP } from '@/Content/PDP';

interface PDPPros {
  params: {
    id: string;
  };
}

interface ProductData {
  body: {
    title: string;
    price: number;
    original_price: number;
    warranty: string;
    attributes: {
      name: string;
      value_name: string;
    };
    pictures: {
      url: string;
    }[];
  };
}

interface DescriptionProps {
  plain_text: string;
}

export default async function PDP({ params: { id } }: PDPPros) {
  const idProduct = id.split('-')[0];
  const repotationProduct = id.split('-')[1];

  return (
    <ContainerPDP id={idProduct} reputation={Number(repotationProduct) * 100} />
  );
}
