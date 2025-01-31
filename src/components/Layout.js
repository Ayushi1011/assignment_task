import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout(){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 h-full overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;