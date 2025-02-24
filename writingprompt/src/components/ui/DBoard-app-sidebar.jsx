"use client";

import * as React from "react";
import Image from "next/image";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Star,
  LibraryBig,
  BookOpenText,
  Settings,
  CircleUserRound,
  Trophy,
  Award,
} from "lucide-react";

import { NavMain } from "@/components/DBoard-nav-main";
import { NavUser } from "@/components/DBoard-nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is data for menus. D
const data = {
  user: {
    name: "Username",
    email: "username@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Your Library",
      url: "/userLibrary",
      icon: LibraryBig,
      isActive: true,
      
    },
    {
      title: "Awards",
      url: "/userAwards",
      icon: Trophy,
    },
    {
      title: "Settings",
      url: "/userSettings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex mx-auto pt-4 pb-4">
          <a href="/promptspage">
            <Image
              src="/images/quill.svg"
              height={30}
              width={30}
              alt="Quill pen drawing a line"
            />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
