import React from "react";
import Drawer from "./Drawer";
import { Button } from "../ui/button";
import { CartIcon } from "../Icons";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="sticky h-16 top-0 flex justify-between z-20 w-full overflow-x-clip bg-color-main text-color-secondary text-center font-leagueSpartan backdrop-blur-md dark:bg-black/30">
      <a className="flex-shrink-0 mt-2 p-2 px-6 text-center font-great-vibes font-normal text-3xl">
        Online Restaurant
      </a>
      <nav className="flex grow items-center justify-between gap-4 p-2">
        <SearchBox />
        <div className="flex justify-end gap-2">
          <Button>
            <CartIcon /> <span className="leading-10 text-base">0</span>
          </Button>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
          <Drawer />
        </div>
      </nav>
    </div>
  );
};

export default Header;
