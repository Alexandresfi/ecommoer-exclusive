'use client';
import { FormEvent, useState } from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react';

interface SendMailProps {
  data: {
    response: string;
  };
}

interface sendedEmail {
  sended: boolean;
  error: boolean;
}

export function SendEmail() {
  const [sendedEmail, setSendedEmail] = useState<sendedEmail>({
    error: false,
    sended: false
  });

  async function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('your-email');

    const sendEmail = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_LOCAL}/api/sendEmail/newslatter`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        }),
        cache: 'no-store'
      }
    );

    const responseEmail: SendMailProps = await sendEmail.json();

    const {
      data: { response }
    } = responseEmail;

    if (response.includes('2.0.0 OK')) {
      setSendedEmail({
        ...sendedEmail,
        sended: true
      });
      formData.delete('your-email');
    } else {
      setSendedEmail({ ...sendedEmail, error: true });
    }
  }
  return (
    <form
      className="flex justify-between items-center"
      onSubmit={handleSendEmail}
    >
      {sendedEmail.sended ? (
        <span className="text-green-400 text-base max-w-[196px]">
          Inscrição realizada com sucesso. Verifique seu email!
        </span>
      ) : (
        <span className="max-w-[250px] w-full h-12 border-[1.5px] rounded border-white-default px-4">
          <input
            type="email"
            name="your-email"
            placeholder="Seu e-mail"
            className="bg-transparent w-[196px] h-11 outline-none text-white-primary placeholder:text-white-primary"
          />
          <button type="submit" className="text-white-default">
            <PaperPlaneRight size={25} />
          </button>
        </span>
      )}
    </form>
  );
}
