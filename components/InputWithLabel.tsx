"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HTMLInputTypeAttribute, useState } from "react";
import { Icons } from "./Icons";

type Props = {
  fieldTitle: string;
  nameInSchema: string;
  placeholder?: string;
  labelLeft?: boolean;
  type?: HTMLInputTypeAttribute;
};

export function InputWithLabel({
  fieldTitle,
  nameInSchema,
  placeholder,
  labelLeft,
  type,
}: Props) {
  const form = useFormContext();

  const fieldTitleNoSpaces = fieldTitle.replaceAll(" ", "-");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={labelLeft ? "flex w-full items-center gap-2" : ""}>
          <FormLabel
            className={`text-base ${labelLeft ? "mt-2 w-1/3" : ""}`}
            htmlFor={fieldTitleNoSpaces}
          >
            {fieldTitle}
          </FormLabel>

          <div
            className={`flex items-center gap-2 ${labelLeft ? "w-2/3" : "w-full max-w-xs"}`}
          >
            <div className="flex w-full max-w-xs items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <FormControl>
                <div className="flex">
                  <Input
                    {...field}
                    id={fieldTitleNoSpaces}
                    className="w-full max-w-xs"
                    placeholder={placeholder || fieldTitle}
                    type={type}
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
            </div>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
