"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
const NavDash = () => {
  return (
    <div className="h-10  border-b w-full">
      <div className="container">
        <Tabs
          color="primary"
          variant="underlined"
          aria-label="Tabs"
          classNames={{
            tabList: "gap-20 w-full relative rounded-none p-0 border-divider",
            cursor: "w-full bg-[#DC4A2D]",
            tab: "max-w-fit px-0 h-10",
            tabContent: "group-data-[selected=true]:text-[#DC4A2D]",
          }}>
          <Tab key="job-preview" title="Job preview" />
          <Tab key="applicants" title="Applicants" />
          <Tab key="match" title="Match" />
          <Tab key="messages" title="Messages" />
        </Tabs>
      </div>
    </div>
  );
};

export default NavDash;
