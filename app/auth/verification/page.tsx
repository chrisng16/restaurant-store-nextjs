"use client";
import { verification } from "@/actions/auth";
import CardWrapper from "@/components/auth/CardWrapper";
import FormStatusMessage from "@/components/auth/FormStatusMessage";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const AuthVerificationPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const submitResultDefaultValues = {
    isSuccess: null,
    message: "",
  };

  const [submitResults, setSubmitResults] = useState<
    Record<string, boolean | null | string>
  >(submitResultDefaultValues);

  const verifyToken = useCallback(() => {
    if (!token) {
      setSubmitResults({ isSuccess: false, message: "No Token" });
    } else {
      verification(token)
        .then((result) =>
          setSubmitResults({
            isSucccess: result.success,
            message: result.message,
          }),
        )
        .catch(() =>
          setSubmitResults({
            isSuccess: false,
            message: "Something went wrong",
          }),
        );
    }
  }, [token]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    <CardWrapper
      title="Welcome to Restaurant App"
      desc="Verifying your account"
      redirectText="Back to Sign In"
      redirectHref="/auth/sign-in"
    >
      {submitResults.isSucccess === null && (
        <div className="flex h-full w-full items-center justify-center">
          <BounceLoader color="#5F0D1050" speedMultiplier={1.2} />
        </div>
      )}
      {submitResults.isSuccess !== null && (
        <FormStatusMessage
          message={submitResults.message as string}
          type={submitResults.isSuccess ? "success" : "error"}
        />
      )}{" "}
    </CardWrapper>
  );
};

export default AuthVerificationPage;
