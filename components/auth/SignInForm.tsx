"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Icons } from "../Icons";
import { useEffect, useState } from "react";
import { signin } from "@/actions/auth";
import AuthWithSocial from "./AuthWithSocial";
import FormStatusMessage from "./FormStatusMessage";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SignInFormSchema } from "@/lib/schemas";

export function SignInForm() {
  const searchParams = useSearchParams();

  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [submitResults, setSubmitResults] = useState<
    Record<string, boolean | null | string>
  >({
    isSuccess: null,
    message: "searchParamsError",
  });

  useEffect(() => {
    const searchParamsError = searchParams.get("error");
    console.log(searchParamsError);
    if (searchParamsError === "OAuthAccountNotLinked") {
      setSubmitResults({
        isSuccess: false,
        message: "Email was used with another sign in method",
      });
    }
  }, [searchParams]);

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    await signin(values);
    location.reload();
    // closeDialog();
  }

  const handlePasswordVisibility = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <Form {...form}>
      <AuthWithSocial />
      <div className="m-0 my-4 flex items-center gap-2 p-0">
        <span className="h-px w-full border border-muted-foreground/20" />
        <span>or</span>
        <span className="h-px w-full border border-muted-foreground/20" />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input required placeholder="Email" {...field} />
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
                      required
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                    />
                    <button
                      type="button"
                      id="password"
                      onClick={handlePasswordVisibility}
                      className="-ml-8 font-medium text-color-secondary"
                    >
                      {isPasswordVisible ? <Icons.EyeSlash /> : <Icons.Eye />}
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
        <Button variant="link" className="mb-4 mt-2 justify-start p-0">
          <Link href={"/auth/reset-password"}>Forgot password?</Link>
        </Button>
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
