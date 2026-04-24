import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const appUrl = new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: appUrl,
  applicationName: "MeiControl",
  title: {
    default: "MeiControl — Gestão Fiscal para MEI e ME",
    template: "%s | MeiControl",
  },
  description:
    "Nunca mais pague multa por esquecer uma obrigação fiscal. O MeiControl te avisa tudo pelo WhatsApp antes do prazo.",
  openGraph: {
    title: "MeiControl — Gestão Fiscal para MEI e ME",
    description:
      "Controle faturamento, obrigações fiscais e lembretes para MEI e ME.",
    locale: "pt_BR",
    siteName: "MeiControl",
    type: "website",
    url: appUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
