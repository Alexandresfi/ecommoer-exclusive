import Image from 'next/image';

import EmptyStar from '../../assets/emptyStar.svg';
import PartStar from '../../assets/PartStar.svg';
import CompletStar from '../../assets/CompletStar.svg';

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  const numberStar = 20;

  function calcRating(rating: number) {
    const divisionResult = rating / numberStar;

    const getIntPart = Math.trunc(divisionResult);
    const getDecimalPart = rating - getIntPart;

    return {
      intPart: getIntPart,
      decimalPart: getDecimalPart
    };
  }

  function createStartArray() {
    const { intPart, decimalPart } = calcRating(rating);

    const starArray = [
      ...Array(intPart).fill(CompletStar),
      ...(decimalPart > 0 ? [PartStar] : []),
      ...Array(Math.max(0, 5 - intPart - (decimalPart > 0 ? 1 : 0))).fill(
        EmptyStar
      )
    ];

    return starArray;
  }

  return (
    <div className="flex gap-1">
      {createStartArray()?.map((item, index) => (
        <span key={index}>
          <Image src={item} width={15} height={15} alt="avaliacoes" />
        </span>
      ))}
      <span className="text-[#7d8184eb] text-xs">({rating})</span>
    </div>
  );
}
