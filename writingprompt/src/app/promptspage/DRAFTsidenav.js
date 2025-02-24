"use client";
import HeroPrompt from "@/components/HeroPrompt";
import EntriesWrapper from "@/components/EntriesWrapper";
import Nav from "@/components/Nav";
import WritingArea from "@/components/WritingArea.js";
import React, { useState } from "react";
import { ApiClient } from "../../../apiclient/client";

import { HomeAppSidebar } from "@/components/Home-app-sidebar ";
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

const Home = () => {
  const [writingPrompt, setWritingPrompt] = useState(""); // State to hold writingPrompt

  const client = new ApiClient(); // Initialize  client

  return (
    <SidebarProvider>
      <HomeAppSidebar />
      <SidebarInset>
        <header className="flex pb-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/userDashboard">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Daily Writing Prompt</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div>
          {/* Pass setWritingPrompt to HeroPrompt */}
          <HeroPrompt setWritingPrompt={setWritingPrompt} />

          {/* Pass writingPrompt and username to WritingArea */}
          <WritingArea client={client} writingPrompt={writingPrompt} />
          <div>
            <EntriesWrapper client={client} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
