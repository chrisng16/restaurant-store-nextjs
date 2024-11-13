import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import { signIn } from "next-auth/react";

const AuthWithSocial = () => {
  const onClick = (provider: "apple" | "google") => {
    signIn(provider, {
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Button variant="outline" onClick={() => onClick("google")}>
        <Icons.Google className="" /> Log In with Google
      </Button>
      <Button variant="outline" onClick={() => onClick("apple")}>
        <Icons.Apple /> Log In with Apple
      </Button>
    </div>
  );
};

export default AuthWithSocial;
