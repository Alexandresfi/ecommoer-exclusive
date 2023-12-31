'use client';
import { useState } from 'react';

import { Heart } from '@phosphor-icons/react';

export function WhishListPDP() {
  const [checked, setChecked] = useState(false);

  function handleClienkChecked() {
    setChecked((state) => !state);
  }

  return (
    <button
      className="w-10 h-10 border border-white-primary rounded bg-white-default flex justify-center items-center hover:drop-shadow-sm"
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
