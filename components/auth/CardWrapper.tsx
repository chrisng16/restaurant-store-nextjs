import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

interface CardWrapperProps {
  title: string;
  desc: string;
  children: React.ReactNode;
  redirectText: string;
  redirectHref: string;
}

const CardWrapper = ({
  title,
  desc,
  children,
  redirectHref,
  redirectText,
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto my-6 w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-center">
        <Link href={redirectHref} className="text-sm hover:underline">
          {redirectText}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
