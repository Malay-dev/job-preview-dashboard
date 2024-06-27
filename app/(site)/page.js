import React from "react";
import JobTitle from "@/components/JobTitle";
import JobDetails from "@/components/JobDetails";
const page = () => {
  return (
    <div className="w-full flex flex-col">
      <JobTitle></JobTitle>
      <JobDetails></JobDetails>
    </div>
  );
};

export default page;
