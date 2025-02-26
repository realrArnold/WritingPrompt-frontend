"use client";
import { useState, useEffect } from "react";
import UserWCardWrapper from "@/components/UserWCardWrapper";
import { DBoardAppSidebar } from "@/components/DBoard-app-sidebar";
import { ApiClient } from "../../../apiclient/client";
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

const userLibrary = () => {
  const client = new ApiClient(); // Initialize  client
  

    //defines state for userWritingsCount
    const [userWritingsCount, setUserWritingsCount] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await client.getUserWritings();
          setUserWritingsCount(data.data.length);
          
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <SidebarProvider>
      <DBoardAppSidebar userWritingsCount={userWritingsCount}/>
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
                  <BreadcrumbPage>Your Library</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-6 pb-6">
          All your hard work in one place...
        </h1>
        <div className="">
          <UserWCardWrapper client={client} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default userLibrary;
