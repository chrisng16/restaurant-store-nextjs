"use client";
import CardWrapper from "@/components/auth/CardWrapper";
import { PasswordResetForm } from "@/components/auth/PasswordResetForm";
import { SetNewPasswordForm } from "@/components/auth/SetNewPasswordForm";
import { useSearchParams } from "next/navigation";
import React from "react";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (token) {
    return (
      <CardWrapper
        title="Reset Password"
        desc="Set your new password"
        redirectText={"Back to Sign In"}
        redirectHref={"/auth/sign-in"}
      >
        <SetNewPasswordForm />
      </CardWrapper>
    );
  }

  return (
    <CardWrapper
      title="Reset Password"
      desc="Forgot your password?"
      redirectText={"Back to Sign In"}
      redirectHref={"/auth/sign-in"}
    >
      <PasswordResetForm />
    </CardWrapper>
  );
};

export default ResetPasswordPage;
