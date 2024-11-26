import { Icons } from "@/components/Icons";
import Link from "next/link";

const CheckoutHeader = () => {
  return (
    <div className="font-leagueSpartan sticky top-0 z-20 flex h-16 w-full items-center justify-between overflow-x-clip bg-color-main px-2 text-center text-color-secondary backdrop-blur-md dark:bg-black/30 md:px-4">
      <Link
        href={"/"}
        className="group flex items-center justify-start gap-1 pl-2 md:p-0"
      >
        <Icons.ArrowLeft className="size-5" />
        <span className="hidden decoration-color-secondary underline-offset-4 group-hover:underline md:block">
          Back to Home
        </span>
      </Link>
      <a
        href="\"
        className="absolute left-1/2 mt-2 -translate-x-1/2 transform text-nowrap p-2 text-center font-great-vibes text-3xl font-normal"
      >
        Online Restaurant
      </a>
      <span className="flex-none"></span>
    </div>
  );
};

export default CheckoutHeader;
