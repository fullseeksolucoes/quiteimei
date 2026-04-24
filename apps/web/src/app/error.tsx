"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-center">
      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-red-700">
          {error.digest ? `Erro ${error.digest}` : "Erro inesperado"}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Algo saiu do planejado
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Tente novamente. Se o problema continuar, revise sua conexão ou entre
          em contato com o suporte.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
