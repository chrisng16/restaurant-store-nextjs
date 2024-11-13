import React from "react";
import { signOut } from "next-auth/react";

const SignoutButton = ({ children }: { children: React.ReactNode }) => {
  const onClick = () => {
    signOut();
  };

  return <span onClick={onClick}>{children}</span>;
};

export default SignoutButton;
