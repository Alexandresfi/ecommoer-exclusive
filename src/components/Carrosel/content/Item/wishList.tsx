'use client';
import { Heart } from '@phosphor-icons/react';
import { useState } from 'react';

export function WhishList() {
  const [checked, setChecked] = useState(false);

  const handleClienkChecked = () => {
    setChecked((state) => !state);
  };
  return (
    <button
      className="w-[34px] h-[34px] bg-white-default rounded-full flex justify-center items-center z-20"
      onClick={handleClienkChecked}
    >
      {checked ? (
        <Heart size={24} weight="fill" color="#db4444" />
      ) : (
        <Heart size={24} />
      )}
    </button>
  );
}
