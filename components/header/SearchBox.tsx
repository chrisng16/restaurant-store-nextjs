"use client";
import React from "react";
import { Icons } from "../Icons";
import { useSearchStore } from "@/store";

const SearchBox = () => {
  const { updateSearchKey } = useSearchStore();

  return (
    <div className="hidden w-2/3 max-w-xl rounded-full bg-white/20 p-2 sm:flex">
      <Icons.Search className="mx-2" />
      <input
        className="grow bg-transparent placeholder:text-color-secondary/50 focus:outline-none search-cancel:size-4 search-cancel:cursor-pointer search-cancel:appearance-none search-cancel:bg-[url('/x-icon.svg')]"
        placeholder="Search Store"
        type="search"
        onChange={(e) => updateSearchKey(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
