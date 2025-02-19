"use client";
import React, { useState } from "react";
import { ApiClient } from "../../../apiclient/client";
import { AppSidebar } from "@/components/DBoard-app-sidebar";
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
import { ChartComponent } from "@/components/UserChart";
import WritingCarousel from "@/components/WritingCarousel";

const Dashboard = () => {
  const client = new ApiClient(); // Initialize  client

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex pb-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="w-full gap-4 p-6 pt-0">
          <ChartComponent />
        </div>
        <div className="w-full pt-0 pb-2 flex flex-col items-center">
          <label className="text-lg text-center font-semibold tracking-tight pb-2">
            Recent Writings
          </label>
          <WritingCarousel client={client} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
