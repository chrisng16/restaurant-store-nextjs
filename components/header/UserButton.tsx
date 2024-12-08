"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../Icons";
import { useCurrentUser } from "@/hooks/use-current-user";
import SignoutButton from "./SignoutButton";
import { Button } from "../ui/button";
import { AuthButton } from "../auth/AuthButton";

const UserButton = () => {
  const user = useCurrentUser();

  // if (!user) {

  //   return (
  //     <>
  //       <Button id="sign-in" onClick={handleClick}>
  //         Sign In
  //       </Button>
  //       <Button id="sign-up" onClick={handleClick} className="hidden sm:block">
  //         Sign Up
  //       </Button>
  //     </>
  //   );
  // }

  if (!user) {
    return (
      <>
        <AuthButton type={"sign-in"} mode={"modal"}>
          <div>
            <Button size="icon" variant="ghost" className="sm:hidden">
              <Icons.SignIn />
            </Button>
            <Button className="hidden sm:block">Sign In</Button>
          </div>
        </AuthButton>
        <AuthButton type={"sign-up"} mode={"modal"}>
          <Button>Sign Up</Button>
        </AuthButton>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-color-secondary text-color-main">
            <span>{`${user.firstName[0]}${user.lastName[0]}`}</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <SignoutButton>
          <DropdownMenuItem>
            <Icons.SignOut />
            Sign Out
          </DropdownMenuItem>
        </SignoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
