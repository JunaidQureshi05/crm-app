import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import EmployeesPage from "../pages/Employees";
import LoginPage from "../pages/LogIn";
import Insights from "../pages/Insights";
import HomePage from "../../src/pages/Home";

const About = () => <div>About page</div>;
const NotFound = () => <div>404 - Page not found</div>;

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/", // ✅ HomePage outside of layout
    element: <HomePage />,
  },
  {
    path: "/dashboard", // ✅ Layout routes
    element: <AppLayout />,
    children: [
      { path: "insights", element: <Insights /> },
      { path: "employees", element: <EmployeesPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
