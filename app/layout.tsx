import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Мой сайт",
  description: "Учебный проект",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <nav className="border-b bg-gray-50">
          <div className="mx-auto max-w-3xl px-6 py-4 flex gap-6">
            <Link href="/" className="font-semibold hover:text-blue-600">Обо мне</Link>
            <Link href="/facts" className="font-semibold hover:text-blue-600">Факты</Link>
            <Link href="/plans" className="font-semibold hover:text-blue-600">Мои планы</Link>
          </div>
        </nav>
        {children}
        
      </body>
    </html>
  );
}
