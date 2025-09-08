import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import EmployeesPage from "../pages/Employees";
import LoginPage from "../pages/LogIn";
import Insights from "../pages/Insights";
const Home = () => <div>Hi there</div>;
const About = () => <div>About page</div>;
const NotFound = () => <div>404 - Page not found</div>;

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />, // ✅ always show layout
    children: [
      { index: true, element: <Home /> }, // `/`
      { path: "/insights", element: <Insights /> }, // `/about`
      {
        path: "/employees",
        element: <EmployeesPage />,
      },

      { path: "*", element: <NotFound /> }, // fallback 404
    ],
  },
]);
