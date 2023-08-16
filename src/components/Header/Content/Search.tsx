import { MagnifyingGlass } from '@phosphor-icons/react';

export function SearchInput() {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex justify-between items-center py-[7px] px-3 bg-white-secondary lg:max-w-[246px] w-full h-8 rounded">
        <input
          type="text"
          name="search"
          className="bg-white-secondary"
          placeholder="O que você procura?"
        />
        <button>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    </div>
  );
}
