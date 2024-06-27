import React from "react";
import { Chip } from "@nextui-org/react";
import { Icons } from "./Icons";
const JobTitle = () => {
  return (
    <div className="container py-10 border-b">
      <div className="flex gap-2 items-center justify-start">
        <h1 className="text-4xl font-bold text-slate-600">
          Senior Product Designer
        </h1>
        <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
        <p className="text-[#888888] font-medium ">posted 2 days ago</p>
        <Chip
          color="success"
          variant="dot"
          className="bg-[#ECFDF3] border-[#ABEFC6] text-green-800 font-semibold">
          Open
        </Chip>
      </div>
      <div className="flex gap-2 items-center justify-start mt-5">
        <p className="text-[#888888] font-medium flex items-center gap-2">
          <Icons.MapPin></Icons.MapPin>
          Deleware, USA
        </p>
        <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
        <p className="text-[#888888] font-medium flex items-center gap-2">
          <Icons.CoinsStacked></Icons.CoinsStacked>
          $300k-$400k
        </p>
      </div>
    </div>
  );
};

export default JobTitle;
