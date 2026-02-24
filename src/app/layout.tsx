import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SEU-DOMINIO.com"),
  title: {
    default: "Simulador de Juros Compostos Online com Aporte Mensal",
    template: "%s | Simulador de Juros Compostos"
  },
  description:
    "Calcule juros compostos com aporte mensal, visualize o crescimento do seu investimento ao longo do tempo e entenda o impacto da inflação.",
  openGraph: {
    title: "Simulador de Juros Compostos Online",
    description:
      "Simule investimentos com capital inicial, aportes mensais e ajuste pela inflação.",
    type: "website",
    locale: "pt_BR",
    url: "https://SEU-DOMINIO.com",
    siteName: "Simulador de Juros Compostos"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulador de Juros Compostos",
    description:
      "Ferramenta online gratuita para simular juros compostos com aporte mensal."
  },
  keywords: [
    "simulador juros compostos",
    "calculadora juros compostos",
    "juros compostos com aporte mensal",
    "simulador investimento",
    "fórmula juros compostos"
  ],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
