import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "./Icons";
import { Badge } from "@nextui-org/react";

const NavTab = () => {
  return (
    <div>
      <Tabs defaultValue="jobs" className="w-[400px] text-sm">
        <TabsList className="grid w-full grid-cols-3 place-content-center rounded-3xl border">
          <TabsTrigger value="jobs" className="rounded-2xl flex gap-2">
            <Icons.Briefcase size={"20"}></Icons.Briefcase>
            Jobs
          </TabsTrigger>
          <TabsTrigger value="messages" className="rounded-2xl flex gap-2">
            <Badge content="" className="bg-[#DC4A2d]" size="sm" shape="circle">
              <Icons.MessageSquare size={"20"}></Icons.MessageSquare>
            </Badge>
            Messages
          </TabsTrigger>
          <TabsTrigger value="payments" className="rounded-2xl flex gap-2">
            <Icons.HandCoins size={"20"}></Icons.HandCoins>
            Payments
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default NavTab;
