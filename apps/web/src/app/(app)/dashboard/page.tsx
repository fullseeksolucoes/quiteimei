import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600">
        Bem-vindo, {user?.firstName ?? "empreendedor"}!
      </p>
      <p className="text-sm text-gray-400 mt-1">ID: {userId}</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-1">Calendário Fiscal</h2>
          <p className="text-gray-500 text-sm">Próximas obrigações</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-1">Faturamento</h2>
          <p className="text-gray-500 text-sm">Controle do limite anual</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-1">Saúde Fiscal</h2>
          <p className="text-gray-500 text-sm">Score geral da empresa</p>
        </div>
      </div>
    </main>
  );
}
