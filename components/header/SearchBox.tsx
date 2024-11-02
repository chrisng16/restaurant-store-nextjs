import React from "react";
import { SearchIcon } from "../Icons";

const SearchBox = () => {
  return (
    <div className="flex bg-white/20 rounded-full p-2 w-2/3 max-w-xl">
      <SearchIcon className="mx-2" />
      <input
        className="bg-transparent grow placeholder:text-color-secondary/50 focus:outline-none search-cancel:appearance-none search-cancel:size-4 search-cancel:bg-[url('/x-icon.svg')] search-cancel:cursor-pointer"
        placeholder="Search Store"
        type="search"
      />
    </div>
  );
};
export default SearchBox;
