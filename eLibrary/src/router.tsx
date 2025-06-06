import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layout/DashboardLayout";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },

      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
