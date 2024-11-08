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
import { useState } from "react";

const formSchema = z.object({
  email: z.string({ required_error: "Required" }).email({
    message: "Incorrect email format",
  }),
  password: z.string({ required_error: "Required" }),
});

export function SignInForm({ closeDialog }: { closeDialog: () => void }) {
  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Submitted",
      description: JSON.stringify(values),
    });
    closeDialog();
  }

  const handlePasswordVisibility = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
