import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Edmundo Domínguez Agurcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${archivo.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
