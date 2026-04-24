import { currentUser } from "@clerk/nextjs/server";

const dashboardCards = [
  {
    title: "Calendário Fiscal",
    description: "Próximas obrigações e vencimentos importantes.",
  },
  {
    title: "Faturamento",
    description: "Controle do limite anual e projeção de receita.",
  },
  {
    title: "Saúde Fiscal",
    description: "Resumo das pendências e riscos fiscais da empresa.",
  },
];

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <main>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">
          Visão geral fiscal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Bem-vindo, {user?.firstName ?? "empreendedor"}!
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Acompanhe obrigações, faturamento e saúde fiscal da sua empresa em um
          só lugar.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {dashboardCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-950">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {card.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
