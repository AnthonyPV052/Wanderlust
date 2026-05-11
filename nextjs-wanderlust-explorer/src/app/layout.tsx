import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover unique travel experiences around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        <FavoritesProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
            © 2026 Wanderlust Explorer — built with Next.js &amp; Tailwind CSS
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
