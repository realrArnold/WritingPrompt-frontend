"use client";
import React, from "react";
import { ApiClient } from "../../../apiclient/client";
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
   return (
            <SidebarProvider>
              <DBoardAppSidebar />
              <SidebarInset>
                <header className="flex pb-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                  <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href="/userDashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Awards</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </header>
                  <label className="text-lg text-center font-semibold tracking-tight pb-2">
                  Great authors are made, not born. All creative skills are gained through practice and your are doing great!
                  </label>
                  <div>
    
    
                  </div>
                 
              </SidebarInset>
            </SidebarProvider>
          );
}

export default awards
