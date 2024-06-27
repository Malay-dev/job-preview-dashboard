import React from "react";
import Image from "next/image";
const CompanyDetails = () => {
  return (
    <div className="container py-10">
      <div className="flex gap-2  text-[#4F4F4F] text-2xl items-center justify-start font-medium">
        <Image
          alt="atlassian-logo-2"
          width={36}
          height={36}
          src={"/atlassian-logo-2.png"}></Image>
        <h1>Atlassian</h1>
      </div>
      <div className="grid grid-rows-3 mt-5  gap-2 text-sm">
        <div className="grid grid-cols-2">
          <span className="flex flex-col gap-2">
            <h1 className="text-[#6E6D6D]">Company Size</h1>
            <p className="font-medium">1k-2k Employees</p>
          </span>
          <span className="flex flex-col gap-2">
            <h1 className="text-[#6E6D6D]">Type</h1>
            <p className="font-medium">Private</p>
          </span>
        </div>
        <div className="grid grid-cols-2">
          <span className="flex flex-col gap-1">
            <h1 className="text-[#6E6D6D]">Sector</h1>
            <p className="font-medium">
              Information Technology, Infrastructure
            </p>
          </span>
          <span className="flex flex-col gap-1">
            <h1 className="text-[#6E6D6D]">Funding</h1>
            <p className="font-medium">Bootstrapped</p>
          </span>
        </div>
        <div className="grid grid-cols-2">
          <span className="flex flex-col gap-1">
            <h1 className="text-[#6E6D6D]">Founded In</h1>
            <p className="font-medium">2019</p>
          </span>
          <span className="flex flex-col gap-1">
            <h1 className="text-[#6E6D6D]">Founded By</h1>
            <p className="font-medium">Scott Farquhar, Mike Cannon-Brookes</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
