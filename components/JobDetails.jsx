import React from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

const JobDetails = () => {
  return (
    <div className="container px-20 py-10 border-b">
      <div className="grid grid-cols-4">
        <div>
          <h1 className="font-medium text-[#6E6D6D]">Skills Required</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <Chip
                radius="sm"
                variant="bordered"
                classNames={{ base: "border" }}
                startContent={
                  <Image
                    alt="figma-logo"
                    width={"16"}
                    height={"16"}
                    src={"/figma-logo.png"}></Image>
                }>
                Figma
              </Chip>
            </li>
            <li>
              <Chip
                radius="sm"
                variant="bordered"
                classNames={{ base: "border" }}
                startContent={
                  <Image
                    alt="figma-logo"
                    width={"16"}
                    height={"16"}
                    src={"/adobe-i.png"}></Image>
                }>
                Adobe Illustrator
              </Chip>
            </li>
            <li>
              <Chip
                radius="sm"
                variant="bordered"
                classNames={{ base: "border" }}
                startContent={
                  <Image
                    alt="figma-logo"
                    width={"16"}
                    height={"16"}
                    src={"/adobe-x.png"}></Image>
                }>
                Adobe XD
              </Chip>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-[#6E6D6D]">Preferred Language</h1>
          <p className="mt-2 font-bold">English</p>
        </div>
        <div>
          <h1 className="font-medium text-[#6E6D6D]">Type</h1>
          <p className="mt-2 font-bold">Full time</p>
        </div>
        <div>
          <h1 className="font-medium text-[#6E6D6D]">Years of Experience</h1>
          <p className="mt-2 font-bold">3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
