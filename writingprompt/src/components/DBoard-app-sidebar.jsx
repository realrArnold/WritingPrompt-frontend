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
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is data for menus. 
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

export function DBoardAppSidebar({ userWritingsCount, ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex mx-auto pt-4 pb-4">
          <a href="/promptspage">
            <Image
              src="/images/Logo.svg"
              height={60}
              width={60}
              alt="Quill pen drawing a line"
              priority
            />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent className="pl-4">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div name="badge" className="flex mx-auto ">
          {/* conditional rendering of badges depending on userWritingsCount */}
          {userWritingsCount >= 10 && userWritingsCount < 30 && (
            <Image
              src="/images/Novice_small.svg"
              height={180}
              width={180}
              alt="novice badge with pen nib and green leaves"
              priority
            />
          )}
          {userWritingsCount >= 30 && userWritingsCount < 100 && (
            <Image
              src="/images/Author_small.svg"
              height={180}
              width={180}
              alt="novice badge with pen nib and purple leaves"
              priority
            />
          )}
          {userWritingsCount >= 100 && (
            <Image
              src="/images/Master_small.svg"
              height={180}
              width={180}
              alt="novice badge with pen nib and magenta leaves"
              priority
            />
          )}
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
