"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const Modal = ({
  children,
  title,
  desc,
}: {
  children: React.ReactNode;
  title: string;
  desc: string;
}) => {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{desc}</DialogDescription>
        <DialogContent className="p-0">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Modal;
