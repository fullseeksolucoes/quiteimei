import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <SignIn
        appearance={{
          elements: {
            cardBox: "shadow-xl",
          },
        }}
      />
    </main>
  );
}
