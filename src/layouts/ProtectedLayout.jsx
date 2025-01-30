import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" redirect />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
