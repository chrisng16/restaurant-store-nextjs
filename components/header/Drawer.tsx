"use client";
import React, { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex dark:text-white md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative z-20"
      >
        <div className="relative flex h-10 w-10 transform items-center justify-center rounded-md bg-none ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-2 group-focus:ring-4">
          <div
            className={`flex h-4 w-4 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
              isOpen ? "-rotate-180" : ""
            }`}
          >
            <span
              className={`h-[2px] w-6 transform bg-black transition-all duration-500 dark:bg-white ${
                isOpen ? "rotate-[41deg]" : ""
              } -translate-x-1`}
            ></span>
            <span className="h-[2px] w-6 transform rounded bg-black transition-all duration-500 dark:bg-white"></span>
            <span
              className={`h-[2px] w-6 transform bg-black transition-all duration-500 dark:bg-white ${
                isOpen ? "-rotate-[41deg]" : ""
              } -translate-x-1`}
            ></span>
          </div>
        </div>
      </button>

      <div className="md:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed inset-y-0 flex flex-col ${
            isOpen ? "right-0" : "-right-full"
          } z-10 h-screen w-full overflow-y-auto bg-white/90 px-4 py-8 backdrop-blur transition-all duration-500 dark:bg-black/90 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="mt-10 flow-root">
            <div className="grid space-y-2">
              <a
                href="#about"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
