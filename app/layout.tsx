import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const cantarell = Cantarell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantarell",
});

export const metadata: Metadata = {
  title: "Marius Strauss",
  description: "portfolio, resume and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cantarell.variable} h-full antialiased`}
    >
      <body className="h-full font-(--font-cantarell) bg-blue-50">
        <nav className="text-center w-full bg-blue-200 mb-6">
          <Link href="/">About</Link> · <Link href="/projects">Projects</Link> · <Link href="/research">Research</Link> · <Link href="/blog">Blog</Link> · <Link href="/resume">Résumé</Link>
        </nav>
        {/* <hr/> */}
        <main className="flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}