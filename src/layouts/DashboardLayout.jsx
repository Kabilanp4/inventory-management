import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;

// It follows a Single Responsibility Principle
