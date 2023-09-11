'use client';
import { FormEvent, useState } from 'react';
interface SendMailProps {
  data: {
    response: string;
  };
}

interface sendedEmail {
  sended: boolean;
  error: boolean;
}

export function Form() {
  const [sendedEmail, setSendedEmail] = useState<sendedEmail>({
    error: false,
    sended: false
  });

  async function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('your-name');
    const email = formData.get('your-email');
    const phone = formData.get('your-phone');
    const mensage = formData.get('your-mensage');

    const sendEmail = await fetch('http://localhost:3000/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        mensage
      }),
      cache: 'no-store'
    });

    const responseEmail: SendMailProps = await sendEmail.json();

    const {
      data: { response }
    } = responseEmail;

    if (response.includes('2.0.0 OK')) {
      setSendedEmail({
        ...sendedEmail,
        sended: true
      });

      formData.delete('your-name');
      formData.delete('your-phone');
      formData.delete('your-email');
      formData.delete('your-mensage');
    } else {
      setSendedEmail({ ...sendedEmail, error: true });
    }
  }

  return (
    <>
      {sendedEmail.sended ? (
        <h3 className=" text-center text-lg font-semibold text-green-500 m-auto">
          Mensagem enviada com sucesso!
        </h3>
      ) : (
        <form
          className="w-full xl:max-w-[790px] px-2 py-10 bg-white-default shadow-md rounded xl:px-5"
          onSubmit={handleSendEmail}
        >
          <div className="flex gap-4 items-center flex-wrap">
            <input
              name="your-name"
              type="text"
              placeholder="Seu Nome*"
              className="w-full h-[50px] xl:w-[239px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
              required
            />

            <input
              name="your-email"
              type="email"
              placeholder="Seu E-mail*"
              className="w-full h-[50px] xl:w-[239px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
              required
            />

            <input
              name="your-phone"
              type="text"
              placeholder="Seu Celular*"
              className="w-full h-[50px] xl:w-[239px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
              pattern="^[0-9]*$"
              required
              minLength={10}
              max={11}
            />
          </div>

          <textarea
            name="your-mensage"
            cols={30}
            rows={10}
            placeholder="Mensagem"
            className="w-full h-[207px] bg-white-secondary text-gray-500 py-3 px-4 rounded mt-8 mb-[25px]"
          />

          <button
            className="bg-orange-secondary text-white-primary px-8 py-4 block text-end ml-auto rounded hover:bg-orange-secondary-hover"
            type="submit"
          >
            Enviar mensagem
          </button>
          {sendedEmail.error && (
            <span className="text-red-600 font-semibold">
              Não foi possivel enviar seu email, por favor verifique seu daados!{' '}
            </span>
          )}
        </form>
      )}
    </>
  );
}
