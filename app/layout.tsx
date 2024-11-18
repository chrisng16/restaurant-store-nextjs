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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-roboto antialiased`}>
        <SessionProvider session={session}>
          <Header />
        </SessionProvider>
        {modal}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
