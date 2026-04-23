import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          MeiControl
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Nunca mais pague multa por esquecer uma obrigação fiscal.
        </p>
        <p className="text-gray-500 mb-8">
          O MeiControl te avisa tudo pelo WhatsApp antes do prazo.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/sign-up"
            className="rounded-lg bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Começar grátis
          </Link>
          <Link
            href="/sign-in"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50 transition-colors"
          >
            Entrar
          </Link>
        </div>
      </div>
    </main>
  );
}
