'use client';
import { PaperPlaneRight } from '@phosphor-icons/react';

export function SendEmail() {
  return (
    <form className="flex justify-between items-center">
      <input
        type="email"
        name="email-footer"
        placeholder="Seu e-mail"
        className="bg-transparent w-[196px] h-11 outline-none text-white-primary placeholder:text-white-primary"
      />
      <button type="submit" className="text-white-default">
        <PaperPlaneRight size={25} />
      </button>
    </form>
  );
}
