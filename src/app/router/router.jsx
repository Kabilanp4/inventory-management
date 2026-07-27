import { createBrowserRouter, Navigate } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import Categories from "@/pages/Categories";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import Suppliers from "@/pages/Suppliers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
    ],
  },
]);

export default router;
