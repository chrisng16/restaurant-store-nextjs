import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await auth();

  const { firstName, lastName } = session?.user;

  const signOutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <div>
      DashboardPage
      <h1>
        Welcome back, {firstName} {lastName}
      </h1>
      <form action={signOutAction}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default DashboardPage;
