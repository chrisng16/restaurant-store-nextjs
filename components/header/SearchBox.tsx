import React from "react";
import { Icons } from "../Icons";

const SearchBox = () => {
  return (
    <div className="flex w-2/3 max-w-xl rounded-full bg-white/20 p-2">
      <Icons.Search className="mx-2" />
      <input
        className="grow bg-transparent placeholder:text-color-secondary/50 focus:outline-none search-cancel:size-4 search-cancel:cursor-pointer search-cancel:appearance-none search-cancel:bg-[url('/x-icon.svg')]"
        placeholder="Search Store"
        type="search"
      />
    </div>
  );
};
export default SearchBox;
