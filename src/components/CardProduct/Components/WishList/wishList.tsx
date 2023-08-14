'use client';
import { useState } from 'react';

import { Heart } from '@phosphor-icons/react';

export function WhishList() {
  const [checked, setChecked] = useState(false);

  const handleClienkChecked = () => {
    setChecked((state) => !state);
  };

  return (
    <button
      className="w-[27px] h-[27px] bg-white-default rounded-full flex justify-center items-center hover:drop-shadow-sm"
      onClick={handleClienkChecked}
    >
      {checked ? (
        <Heart size={24} weight="fill" color="#db4444" alt="remove wishlist" />
      ) : (
        <Heart size={24} alt="add wishlist" />
      )}
    </button>
  );
}
