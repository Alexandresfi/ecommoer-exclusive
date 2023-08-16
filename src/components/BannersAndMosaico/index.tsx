import { Banner } from './Banner';
import { Moisaico } from './Mosaico';

interface Props {
  type: 'banner' | 'mosaico';
}

export function BannerAndMosaico({ type }: Props) {
  return <>{type === 'banner' ? <Banner /> : <Moisaico />}</>;
}
