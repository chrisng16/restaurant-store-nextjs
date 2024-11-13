"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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

import { useState, useTransition } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { PasswordResetFormSchema } from "@/lib/schemas";
import { resetPassword } from "@/actions/auth";

export function PasswordResetForm() {
  const [isPending, startTransition] = useTransition();
  const [submitResults, setSubmitResults] = useState<
    Record<string, boolean | null | string>
  >({
    isSuccess: null,
    message: "searchParamsError",
  });

  const form = useForm<z.infer<typeof PasswordResetFormSchema>>({
    resolver: zodResolver(PasswordResetFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PasswordResetFormSchema>) {
    startTransition(() => {
      resetPassword(values).then((result) =>
        setSubmitResults({
          isSuccess: result.success,
          message: result.message,
        }),
      );
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Email"
                  disabled={isPending}
                  {...field}
                />
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
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
