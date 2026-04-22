"use client";

import Sidebar from "@/app/components/Sidebar";
import AppHeader from "@/app/components/AppHeader";

const AppShell = ({ children }) => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <AppHeader />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;