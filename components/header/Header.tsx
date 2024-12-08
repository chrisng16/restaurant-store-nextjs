"use client";
import React from "react";
// import { Button } from "../ui/button";
import SearchBox from "./SearchBox";
import { Icons } from "../Icons";
import UserButton from "./UserButton";
// import { useCartStore } from "@/store";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartButton from "../body/CartButton";
import CategoriesSideMenu from "./CategoriesSideMenu";

const Header = () => {
  // const { itemCount } = useCartStore();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div
      className={`font-leagueSpartan sticky top-0 z-20 flex h-16 w-full items-center justify-between overflow-x-clip bg-color-main px-2 text-center text-color-secondary backdrop-blur-md dark:bg-black/30 md:px-4`}
    >
      {pathname === "/checkout" ? (
        <Link
          href={"/"}
          className="group flex items-center justify-start gap-1 pl-2 md:p-0"
        >
          <Icons.ArrowLeft className="size-5" strokeWidth={2.5} />
          <span className="hidden font-medium decoration-color-secondary underline-offset-4 group-hover:underline md:block">
            Back to Home
          </span>
        </Link>
      ) : (
        <div className="block sm:hidden">
          <CategoriesSideMenu />
        </div>
      )}
      <a
        href="\"
        className={` ${pathname === "/checkout" ? "absolute left-1/2 -translate-x-1/2 transform" : ""} absolute left-1/2 mt-2 flex flex-shrink-0 -translate-x-1/2 items-center text-nowrap p-2 text-center font-great-vibes text-3xl font-medium sm:static sm:left-0 sm:translate-x-0`}
      >
        Online Restaurant
      </a>
      <nav
        className={`flex ${pathname === "/checkout" ? "" : "grow"} items-center justify-between gap-4 p-2`}
      >
        {pathname !== "/checkout" && <SearchBox />}
        <div className="flex w-full items-center justify-end gap-2">
          <CartButton variant="button" />
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
