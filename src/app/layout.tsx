import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://simulador-juros-composto.vercel.app"),
  title: {
    default: "Simulador de Juros Compostos Online com Aporte Mensal",
    template: "%s | Simulador de Juros Compostos"
  },
  description: "Calcule juros compostos com aporte mensal e entenda o impacto da inflação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Verificação de conta do AdSense */}
        <meta name="google-adsense-account" content="ca-pub-7761165566694488" />
        {/* Script do AdSense com estratégia de carregamento otimizada */}
        <Script
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7761165566694488"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
