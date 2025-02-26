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
  CircleGauge,
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

navMain: [
    {
      title: "Your Dashboard",
      url: "/userDashboard",
      icon: CircleGauge,
      isActive: true,
      
    },

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
  // to display username of who is logged in
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    avatar: "/avatars/shadcn.jpg",
  });

  React.useEffect(() => {
    // Fetch user information from localStorage
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");  // Assuming you store the username during login
    const avatar = "/avatars/default.jpg"; // Default avatar or you could have it saved in localStorage too

    if (username) {
      setUserData({
        name: username,
        email: `${username}@example.com`, // You can change this as per your actual email storing logic
        avatar,
      });
    } else {
      // Set default values for guest user
      setUserData({
        name: "Guest",
        email: "You are not logged in",
        avatar: "/avatars/default.jpg", // You can provide a default guest avatar here
      });
    }


  }, []);


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
      <NavUser user={userData} />

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

      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
