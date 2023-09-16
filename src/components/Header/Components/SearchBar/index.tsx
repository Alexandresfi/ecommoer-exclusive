'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlass } from '@phosphor-icons/react';

export function SearchInput() {
  const [name, setName] = useState('');

  const router = useRouter();

  function handleClick() {
    const isName = name.length > 0;

    if (isName && name !== '') {
      router.push(`/search/${name}`);
      setName('');
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && name.length > 1) {
      router.push(`/search/${name}`);
      setName('');
    }
  }

  return (
    <div className="px-5 lg:px-0">
      <div className="flex justify-between items-center py-[7px] px-3 bg-white-secondary lg:max-w-[246px] w-full h-10 my-3 lg:py-0 lg:h-8 rounded">
        <input
          type="text"
          name="search"
          className="bg-white-secondary focus-within:px-1 outline-white-primary w-full"
          placeholder="O que você procura?"
          onChange={(e) => setName(e.target.value)}
          value={name}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    </div>
  );
}
