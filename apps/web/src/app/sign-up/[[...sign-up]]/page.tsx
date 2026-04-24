import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar conta",
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <SignUp
        appearance={{
          elements: {
            cardBox: "shadow-xl",
          },
        }}
      />
    </main>
  );
}
