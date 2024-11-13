"use client";
import { signup } from "@/actions/auth";
import { useToast } from "@/hooks/use-toast";
import { SignUpFormSchema } from "@/lib/schemas";
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

export function SignUpForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
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

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
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

  const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {
    startTransition(async () => {
      const result = await signup(values);
      if (result) {
        setSubmitResults({
          isSuccess: result.success,
          message: result.message,
        });
      }
      toast({
        title: "Submitted",
        description: <div>{JSON.stringify(result?.message)}</div>,
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel required>First Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="given-name"
                    placeholder="First Name"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel required>Last Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="family-name"
                    placeholder="Last Name"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <div className="flex">
                    <Input
                      autoComplete="email"
                      type="email"
                      placeholder="Email"
                      {...field}
                      disabled={isPending}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
        </div>
        {submitResults.isSuccess !== null && (
          <FormStatusMessage
            message={submitResults.message as string}
            type={submitResults.isSuccess ? "success" : "error"}
          />
        )}
        <Button disabled={isPending} className="w-full" type="submit">
          SIGN UP
        </Button>
      </form>
    </Form>
  );
}
