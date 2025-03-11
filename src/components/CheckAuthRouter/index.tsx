import { useSelectAuth } from "features/authSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuthRouter = () => {
  const { accessToken, user } = useSelector(useSelectAuth);

  if ((!user || !accessToken) && window.location.pathname !== "/sign-in")
    return <Navigate to="/sign-in" />;
  return <Outlet />;
};

export default CheckAuthRouter;
