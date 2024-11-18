import React from "react";
// import Drawer from "./Drawer";
import { Button } from "../ui/button";
import SearchBox from "./SearchBox";
import { Icons } from "../Icons";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <div className="font-leagueSpartan sticky top-0 z-20 flex h-16 w-full justify-between overflow-x-clip bg-color-main px-2 text-center text-color-secondary backdrop-blur-md dark:bg-black/30 md:px-4">
      <a
        href="\"
        className="mt-2 flex-shrink-0 p-2 text-center font-great-vibes text-3xl font-normal"
      >
        Online Restaurant
      </a>
      <nav className="flex grow items-center justify-between gap-4 p-2">
        <SearchBox />
        <div className="flex w-full items-center justify-end gap-2">
          <Button className="hidden md:flex">
            <Icons.Cart className="size-4" strokeWidth={2} />{" "}
            <span className="text-base leading-10">0</span>
          </Button>
          <UserButton />
          {/* <Drawer /> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
