import { ProductItem } from '@/components/Carrosel/content/Item';

export default function Home() {
  const productData = {
    id: 'teste',
    thumbnail:
      'https://www.bhphotovideo.com/images/images2500x2500/acer_um_qx2aa_008_kg242y_23_8_ips_freesync_1621883.jpg',
    title: 'Monitor Game Acer',
    price: 400,
    oldPrice: 500
  };
  return (
    <>
      <h1>Hello Word</h1>
      <ProductItem productData={productData} />
    </>
  );
}
