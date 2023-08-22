import EmptyStar from '../../assets/emptyStar.svg';
import PartStar from '../../assets/PartStar.svg';
import CompletStar from '../../assets/CompletStar.svg';
import Image from 'next/image';

interface ReputationProps {
  reputation: number;
}

export function Reputation({ reputation }: ReputationProps) {
  const numberStar = 20;

  function calcReputation(reputation: number) {
    const divisionResult = reputation / numberStar;

    const getIntPart = Math.trunc(divisionResult);
    const getDecimalPart = reputation - getIntPart;

    return {
      intPart: getIntPart,
      decimalPart: getDecimalPart
    };
  }

  function createStartArray() {
    const { intPart, decimalPart } = calcReputation(reputation);

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
    </div>
  );
}
