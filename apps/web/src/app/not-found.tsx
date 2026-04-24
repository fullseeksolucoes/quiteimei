import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-center">
      <Card className="max-w-md">
        <CardHeader>
          <p className="text-sm font-semibold text-emerald-700">404</p>
          <CardTitle className="text-3xl tracking-tight">
            Página não encontrada
          </CardTitle>
          <CardDescription>
            O endereço acessado não existe ou foi movido.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">Voltar para o início</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
