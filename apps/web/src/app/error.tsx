"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-center">
      <Card className="max-w-md">
        <CardHeader>
          <p className="text-sm font-semibold text-red-700">
            {error.digest ? `Erro ${error.digest}` : "Erro inesperado"}
          </p>
          <CardTitle className="text-3xl tracking-tight">
            Algo saiu do planejado
          </CardTitle>
          <CardDescription>
            Tente novamente. Se o problema continuar, revise sua conexão ou
            entre em contato com o suporte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={reset}>
            Tentar novamente
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
