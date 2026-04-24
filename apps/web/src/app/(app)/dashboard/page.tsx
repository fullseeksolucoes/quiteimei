import { currentUser } from "@clerk/nextjs/server";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Card className="rounded-3xl">
        <CardHeader>
          <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
            Visão geral fiscal
          </Badge>
          <CardTitle className="mt-3 text-3xl tracking-tight">
            Bem-vindo, {user?.firstName ?? "empreendedor"}!
          </CardTitle>
          <CardDescription className="max-w-2xl leading-6">
            Acompanhe obrigações, faturamento e saúde fiscal da sua empresa em
            um só lugar.
          </CardDescription>
        </CardHeader>
      </Card>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {dashboardCards.map((card) => (
          <Card
            key={card.title}
            className="transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
