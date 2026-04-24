import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold text-slate-950">
          MeiControl
        </Link>
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button type="button" variant="ghost">
                Entrar
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button type="button">Começar grátis</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Button asChild variant="ghost">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
          Gestão fiscal simples para MEI e ME
        </Badge>
        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Nunca mais pague multa por esquecer uma obrigação fiscal.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Controle faturamento, acompanhe vencimentos e receba lembretes antes
          dos prazos que importam para sua empresa.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button type="button" size="lg">
                Criar conta grátis
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button type="button" size="lg" variant="outline">
                Já tenho conta
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Button asChild size="lg">
              <Link href="/dashboard">Abrir dashboard</Link>
            </Button>
          </Show>
        </div>
      </section>
    </main>
  );
}
