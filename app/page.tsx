import { auth } from "@/auth";
import Body from "@/components/body/Body";
import Header from "@/components/header/Header";
import { SessionProvider } from "next-auth/react";

export default async function Home() {

  return (
    <main>
      
      <Body />
    </main>
  );
}
