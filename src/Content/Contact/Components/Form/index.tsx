export function Form() {
  return (
    <form className="max-w-[790px] px-2 py-10 bg-white-default shadow-md rounded xl:px-5">
      <div className="flex gap-4 items-center flex-wrap">
        <input
          type="text"
          placeholder="Seu Nome*"
          name="your name"
          className="w-full h-[50px] lg:w-[215px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
          required
        />

        <input
          type="email"
          name="your email"
          placeholder="Seu E-mail*"
          className="w-full h-[50px] lg:w-[215px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
          required
        />

        <input
          type="text"
          name="your phone"
          placeholder="Seu Celular*"
          className="w-full h-[50px] lg:w-[215px] bg-white-secondary text-gray-500 py-3 px-4 rounded"
          pattern="^[0-9]*$"
          required
          minLength={10}
          max={11}
        />
      </div>

      <textarea
        name="your mensage"
        cols={30}
        rows={10}
        placeholder="Seu Mensagem"
        className="max-w-[737px] w-full h-[207px] bg-white-secondary text-gray-500 py-3 px-4 rounded mt-8 mb-[25px]"
      />

      <button
        className="bg-orange-secondary text-white-primary px-8 py-4 block text-end ml-auto rounded hover:bg-orange-secondary-hover"
        type="submit"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
