"use client";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-black flex justify-center items-center">

      <div className="bg-zinc-900 p-8 rounded-3xl w-[450px]">

        <h1 className="text-white text-3xl font-bold">
          Recuperar Senha
        </h1>

        <p className="text-zinc-400 mt-3">
          Informe seu CPF ou Email
        </p>

        <input
          type="text"
          placeholder="CPF ou Email"
          className="w-full mt-6 p-3 rounded-xl bg-zinc-800 text-white"
        />

        <button
          className="w-full mt-6 bg-purple-600 p-3 rounded-xl text-white"
        >
          Enviar Código
        </button>

      </div>

    </main>
  );
}