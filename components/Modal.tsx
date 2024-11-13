"use client";

import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={closeModal}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
