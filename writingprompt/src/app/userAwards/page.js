"use client";
import React, { useState } from "react";
import AwardsWrapper from "@/components/AwardsWrapper";
import { DBoardAppSidebar } from "@/components/DBoard-app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const awards = () => {
  //defines state for userWritingsCount
  const [userWritingsCount, setUserWritingsCount] = useState(0);

  return (
    <SidebarProvider>
      <DBoardAppSidebar userWritingsCount={userWritingsCount} />
      <SidebarInset>
        <header className="flex pb-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/userDashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Awards</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-6 pb-6">
          Great authors are made, not born. All creative skills are gained
          through practice...
        </h1>

        <div className="">
          <AwardsWrapper
            //passes function to update userWritingsCount state to AwardsWrapper component
            setUserWritingsCount={setUserWritingsCount}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default awards;
