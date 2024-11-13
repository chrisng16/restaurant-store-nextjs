import CardWrapper from "@/components/auth/CardWrapper";
import { SignInForm } from "@/components/auth/SignInForm";
import React from "react";

const SignInPage = () => {
  return (
    <CardWrapper
      title={"Sign In to Restaurant App"}
      desc={"Welcome back! Please sign in to continue"}
      redirectText={"Don't have an account? Sign up"}
      redirectHref={"/auth/sign-up"}
    >
      <SignInForm />
    </CardWrapper>
  );
};

export default SignInPage;
