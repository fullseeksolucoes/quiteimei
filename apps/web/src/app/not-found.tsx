import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-center">
      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Página não encontrada
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          O endereço acessado não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
