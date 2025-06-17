import { Outlet, Navigate } from "react-router-dom";
import useTokenStore from "@/store";

const AuthLayout = () => {
  const token = useTokenStore((state) => state.token);

  if (token) {
    return <Navigate to={"/dashboard/home"} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
