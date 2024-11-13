"use client";
import { SetNewPasswordFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import FormStatusMessage from "./FormStatusMessage";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { setNewPassword } from "@/actions/auth";

export function SetNewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isPending, startTransition] = useTransition();
  const [isPasswordVisible, setIsPasswordVisible] = useState<
    Record<string, boolean>
  >({ password: false, confirmPassword: false });
  const [submitResults, setSubmitResults] = useState<
    Record<string, boolean | null | string>
  >({
    isSuccess: null,
    message: "",
  });

  const passwordErrors = [
    "Be at least 8 characters.",
    "Contain at least one uppercase letter.",
    "Contain at least one lowercase letter.",
    "Contain at least one number.",
  ];

  const form = useForm<z.infer<typeof SetNewPasswordFormSchema>>({
    resolver: zodResolver(SetNewPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "all",
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handlePasswordVisibility = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "password") {
      setIsPasswordVisible((prev) => ({ ...prev, password: !prev.password }));
    } else if (e.currentTarget.id === "confirmPassword") {
      setIsPasswordVisible((prev) => ({
        ...prev,
        confirmPassword: !prev.confirmPassword,
      }));
    }
  };

  const onSubmit = async (values: z.infer<typeof SetNewPasswordFormSchema>) => {
    startTransition(() => {
      if (token)
        setNewPassword(values, token).then((result) =>
          setSubmitResults({
            isSuccess: result.success,
            message: result.message,
          }),
        );
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel required>Password</FormLabel>

              <FormControl>
                <div className="flex">
                  <Input
                    type={isPasswordVisible.password ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="new-password"
                    {...field}
                    disabled={isPending}
                  />
                  <button
                    type="button"
                    id="password"
                    onClick={handlePasswordVisibility}
                    className="-ml-8 font-medium text-color-secondary"
                  >
                    {isPasswordVisible.password ? (
                      <Icons.EyeSlash />
                    ) : (
                      <Icons.Eye />
                    )}
                  </button>
                </div>
              </FormControl>
              {JSON.stringify(form.formState.errors) !== "{}" &&
                form.formState.errors.password && (
                  <div className="mt-2 text-[0.8rem]">
                    <span>Password must:</span>
                    <ul>
                      {passwordErrors.map((passwordError, index) => (
                        <li
                          key={index}
                          className={`${
                            Array.isArray(
                              form.formState.errors.password?.types?.custom,
                            )
                              ? form.formState.errors.password.types.custom.includes(
                                  passwordError,
                                )
                                ? "text-red-500"
                                : ""
                              : form.formState.errors.password?.types
                                    ?.custom === passwordError
                                ? "text-red-500"
                                : ""
                          }`}
                        >
                          {passwordError}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              <ul className="mt-2 text-[0.8rem] text-red-500"></ul>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel required>Confirm Password</FormLabel>

              <FormControl>
                <div className="flex">
                  <Input
                    type={
                      isPasswordVisible.confirmPassword ? "text" : "password"
                    }
                    placeholder="Password"
                    autoComplete="new-password"
                    {...field}
                    disabled={isPending}
                  />
                  <button
                    type="button"
                    id="confirmPassword"
                    onClick={handlePasswordVisibility}
                    className="-ml-8 font-medium text-color-secondary"
                  >
                    {isPasswordVisible.confirmPassword ? (
                      <Icons.EyeSlash />
                    ) : (
                      <Icons.Eye />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitResults.isSuccess !== null && (
          <FormStatusMessage
            message={submitResults.message as string}
            type={submitResults.isSuccess ? "success" : "error"}
          />
        )}
        <Button disabled={isPending} className="w-full" type="submit">
          Set New Password
        </Button>
      </form>
    </Form>
  );
}
