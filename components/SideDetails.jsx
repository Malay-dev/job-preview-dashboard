import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
const SideDetails = () => {
  return (
    <div className="w-96 h-full right-0 top-0 pt-10 container border-l">
      <div className="grid grid-cols-2 gap-10 place-content-center">
        <Button
          variant="outline"
          className="bg-[##DC4A2D] text-[#DC4A2D] hover:text-[#DC4A2D] border-[#DC4A2D] flex gap-2 w-28 items-center">
          <Icons.Trash2
            size={"16"}
            color="#DC4A2D"
            className="min-w-3"></Icons.Trash2>
          Delete job
        </Button>
        <Button
          variant="default"
          className="bg-[#DC4A2D] hover:bg-[#AC4A2D] flex gap-2 items-center">
          <Icons.Pencil size={"16"}></Icons.Pencil>Edit job
        </Button>
      </div>
      <div>
        <ul className="mt-5">
          <li className="grid grid-cols-2 gap-28 place-content-between place-items-start border-b py-2">
            <p className="flex items-center gap-2">
              <Icons.Users size={"16"}></Icons.Users>
              Applicants
            </p>
            <strong>400</strong>
          </li>
          <li className="grid grid-cols-2 gap-28 place-content-between place-items-start border-b py-2">
            <p className="flex items-center gap-2">
              <Icons.UserRoundCheck size={"16"}></Icons.UserRoundCheck>
              Matches
            </p>
            <strong>100</strong>
          </li>
          <li className="grid grid-cols-2 gap-28 place-content-between place-items-start border-b py-2">
            <p className="flex items-center gap-2">
              <Icons.MessageSquare size={"16"}></Icons.MessageSquare>
              Messages
            </p>
            <strong>147</strong>
          </li>
          <li className="grid grid-cols-2 gap-28 place-content-between place-items-start border-b py-2">
            <p className="flex gap-2 items-center">
              <Icons.Eye size={"16"}></Icons.Eye>
              Views
            </p>
            <strong>800</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDetails;
