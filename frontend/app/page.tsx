import BalanceCard from "@/components/dashboard/BalanceCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="text-center pt-24">

        <h1 className="text-7xl font-black">
          Seu futuro financeiro
          <span className="text-purple-500"> agora.</span>
        </h1>

        <p className="text-zinc-400 text-xl mt-6">
          Gerencie seu dinheiro de forma moderna, segura e inteligente.
        </p>

      </section>

      <section className="max-w-6xl mx-auto mt-20 px-6">
        <BalanceCard />
      </section>

    </main>
  );
}