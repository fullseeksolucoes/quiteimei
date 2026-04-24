import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

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
              <button
                type="button"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Entrar
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                type="button"
                className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Começar grátis
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Dashboard
            </Link>
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <p className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
          Gestão fiscal simples para MEI e ME
        </p>
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
              <button
                type="button"
                className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Criar conta grátis
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button
                type="button"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
              >
                Já tenho conta
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Abrir dashboard
            </Link>
          </Show>
        </div>
      </section>
    </main>
  );
}
