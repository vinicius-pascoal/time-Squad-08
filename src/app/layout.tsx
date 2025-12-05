import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squad 08 - Nossa Equipe",
  description: "Conheça os profissionais talentosos que formam o Squad 08. Time de desenvolvimento web moderno e inovador.",
  keywords: ["squad 08", "equipe", "desenvolvedores", "time", "portfolio"],
  authors: [{ name: "Squad 08" }],
  creator: "Squad 08",
  openGraph: {
    title: "Squad 08 - Nossa Equipe",
    description: "Conheça os profissionais talentosos que formam o Squad 08",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
