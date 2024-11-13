import CardWrapper from "@/components/auth/CardWrapper";
import { SignUpForm } from "@/components/auth/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <CardWrapper
      title="Create Your Account"
      desc="Welcome! Please fill in some quick details to get started"
      redirectText="Already have an account? Sign in"
      redirectHref="/auth/sign-in"
    >
      <SignUpForm />
    </CardWrapper>
  );
};

export default SignUpPage;
