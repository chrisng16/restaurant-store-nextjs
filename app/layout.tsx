import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "nSquare.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
