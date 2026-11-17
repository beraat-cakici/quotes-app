import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuotesProvider } from "@/context/QuotesContext";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <QuotesProvider>
            <Navbar />
            {children}
          </QuotesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
