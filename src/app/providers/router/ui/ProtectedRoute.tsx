import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "@/shared/constants/router";
import { useUserStore } from "@/entities/user/model/slice";
import { MainLayout } from "@/app/layouts/MainLayout/ui/MainLayout";

export const ProtectedRoute = () => {
  const token = useUserStore(state => state.token);
  const _inited = useUserStore(state => state._inited);

  if (!_inited) return null;

  if (!token) {
    return <Navigate to={AppRoutes.AUTH} replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}