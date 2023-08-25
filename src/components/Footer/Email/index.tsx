'use client';
import { PaperPlaneRight } from '@phosphor-icons/react';

export function SendEmail() {
  return (
    <>
      <input
        type="email"
        name="email-footer"
        placeholder="Seu e-mail"
        className="bg-transparent w-[196px] text-white-primary placeholder:text-white-primary"
      />
      <button className="text-white-default">
        <PaperPlaneRight size={25} />
      </button>
    </>
  );
}
