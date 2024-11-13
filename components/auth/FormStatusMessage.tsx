import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormMessageProps {
  type?: "error" | "success";
  message?: string;
}

const FormStatusMessage = ({ type = "success", message }: FormMessageProps) => {
  if (!message) return null;
  return (
    <div
      className={`flex items-center space-x-2 rounded-md p-3 text-sm ${type === "error" ? "bg-destructive/15 text-destructive" : "bg-emerald-500/15 text-emerald-500"}`}
    >
      {type === "error" ? (
        <ExclamationTriangleIcon className="size-4" />
      ) : (
        <CheckCircledIcon className="size-4" />
      )}
      <p>{message}</p>
    </div>
  );
};

export default FormStatusMessage;
