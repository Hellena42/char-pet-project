import { AppRoutes } from "@/shared/constants";
import { storage } from "@/shared/lib";
import { useLocation } from "react-router-dom";

export const useGuidanceGuard = () => {
  const location = useLocation();
  const isGuidanceCompleted = storage.get('guidance');
  const isGuidancePage = location.pathname === `/${AppRoutes.GUIDANCE}`;
  
  return {
    shouldRedirect: !isGuidanceCompleted && !isGuidancePage,
    redirectPath: `/${AppRoutes.GUIDANCE}`
  };
}