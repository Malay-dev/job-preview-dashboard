import React from "react";
import JobTitle from "@/components/JobTitle";
import JobDetails from "@/components/JobDetails";
import JobAbout from "@/components/JobAbout";
import CompanyDetails from "@/components/CompanyDetails";
const page = () => {
  return (
    <div className="w-full flex flex-col">
      <JobTitle></JobTitle>
      <JobDetails></JobDetails>
      <JobAbout></JobAbout>
      <CompanyDetails></CompanyDetails>
    </div>
  );
};

export default page;
