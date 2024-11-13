import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "nSquare.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        <SessionProvider session={session}>
          <Header />
        </SessionProvider>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
