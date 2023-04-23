"use client";

import { useState, type ReactNode } from "react";
import { SideBar } from "./sidebar";
import { TopBar } from "./topbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <TopBar setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
