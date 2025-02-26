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

// This is data for menus. D
const data = {

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

export function DBoardAppSidebar({ ...props }) {
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
      <NavUser user={userData} />
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
