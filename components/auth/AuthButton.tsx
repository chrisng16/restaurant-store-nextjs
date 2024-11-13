import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";

type AuthButton = {
  children: React.ReactNode;
  type: string;
};

export function AuthButton({ children, type }: AuthButton) {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(type);

  // function closeDialog() {
  //   setOpen(false);
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {openDialog === "sign-in" ? (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign In to Restaurant App</DialogTitle>
            <DialogDescription>
              Welcome back! Please sign in to continue
            </DialogDescription>
          </DialogHeader>
          <SignInForm  />
          <DialogFooter className="text-xs">
            <span className="text-muted-foreground">
              Don&apos;t have an account?
            </span>
            <span
              className="hover:underline"
              onClick={() => setOpenDialog("sign-up")}
            >
              Sign Up
            </span>
          </DialogFooter>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Your Account</DialogTitle>
            <DialogDescription>
              Welcome! Please fill in some quick details to get started
            </DialogDescription>
          </DialogHeader>
          <SignUpForm />
          <DialogFooter className="text-xs">
            <span className="text-muted-foreground">
              Already have an account?
            </span>
            <span
              className="hover:underline"
              onClick={() => setOpenDialog("sign-in")}
            >
              Sign In
            </span>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
