import { AppRoutes } from "@/shared/constants";
import { useMediaQuery } from "react-responsive"
import { Navigate, Outlet } from "react-router-dom";

export const MobileRouteGuard = () => {
  const isMobile = useMediaQuery({query: '(max-width: 992px)'});

  if (!isMobile) {
    return <Navigate to={`/${AppRoutes.DASHBOARD}`} replace />
  }

  return <Outlet />
}