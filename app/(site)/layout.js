import React from "react";
import NavDash from "@/components/NavDash";
import SideDetails from "@/components/SideDetails";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <NavDash></NavDash>
      <div className="flex ">
        {children}
        <SideDetails></SideDetails>
      </div>
    </div>
  );
};

export default DashboardLayout;
