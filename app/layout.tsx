import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";

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
          <a href="/">About</a> · <a href="/projects">Projects</a> · <a href="/research">Research</a> · <a href="/blog">Blog</a> · <a href="/resume">Résumé</a>
        </nav>
        {/* <hr/> */}
        <main className="flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}