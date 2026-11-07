import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { QuotesProvider } from "@/context/QuotesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Quotes",
  description: "Discover and save your favorite quotes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QuotesProvider>
          <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Random Quotes
              </Link>

              <div className="flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>

                <Link
                  href="/user/quotes/liked"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Liked Quotes
                </Link>
              </div>
            </div>
          </nav>

          {children}
        </QuotesProvider>
      </body>
    </html>
  );
}
