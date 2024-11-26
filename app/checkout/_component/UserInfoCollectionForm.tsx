"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserInfoCollectionFormSchema } from "@/lib/schemas";
import { Dispatch, SetStateAction } from "react";
import { BillingDetails } from "./CheckoutForm";

export function UserInfoCollectionForm({
  setBillingDetails,
  setActiveSection,
  billingDetails,
}: {
  setBillingDetails: Dispatch<
    SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;
  setActiveSection: Dispatch<SetStateAction<string>>;
  billingDetails: BillingDetails;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserInfoCollectionFormSchema>>({
    resolver: zodResolver(UserInfoCollectionFormSchema),
    defaultValues: {
      name: billingDetails.name,
      email: billingDetails.email,
      phone: billingDetails.phone,
    },
    mode: "onChange",
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserInfoCollectionFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setBillingDetails(values);
    setActiveSection("payment-info");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 space-y-4 rounded border p-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full"
          type="submit"
          disabled={!form.formState.isValid}
        >
          Proceed to Payment
        </Button>
      </form>
    </Form>
  );
}
