import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={clsx(inter.className, 'scroll-smooth')}>{children}</body>
    </html>
  );
}
