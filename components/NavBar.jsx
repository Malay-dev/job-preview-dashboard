import React from "react";
import NavTab from "./NavTab";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="container flex items-center h-20 justify-between">
        <Link
          href="/"
          className={`${buttonVariants({ variant: "Secondary" })} bg-gray-100`}>
          <p className="text-[#DC4A2D]">Logo</p>
        </Link>
        <div>
          <NavTab></NavTab>
        </div>
        <div className="flex items-center gap-3">
          <Badge content="" className="bg-[#DC4A2d]" size="sm" shape="circle">
            <Icons.Bell></Icons.Bell>
          </Badge>
          <Avatar>
            <AvatarImage src="/atlassian-logo.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Icons.ChevronDown></Icons.ChevronDown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
