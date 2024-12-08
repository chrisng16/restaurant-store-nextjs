import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import SignInPage from "@/app/auth/sign-in/page";
import SignUpPage from "@/app/auth/sign-up/page";

import Link from "next/link";

type AuthButton = {
  children: React.ReactNode;
  type: "sign-in" | "sign-up";
  mode: "redirect" | "modal";
};

export function AuthButton({ children, type, mode }: AuthButton) {
  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger
          asChild
          className={`${type === "sign-up" ? "hidden md:block" : ""}`}
        >
          {children}
        </DialogTrigger>
        <DialogContent>
          {type === "sign-in" ? <SignInPage /> : <SignUpPage />}
        </DialogContent>
      </Dialog>
    );
  }

  return <Link href={`/auth/${type}`}>{children}</Link>;
}
