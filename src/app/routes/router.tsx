import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthPage } from "../../pages/Auth/AuthPage";
import { ProtectedRoute } from "../providers/router/ui/ProtectedRoute";
import { DashboardPage } from "@/pages/Dashboard/DashboardPage";
import { MobileRouteGuard } from "./MobileRouteGuard";
import { CalendarPage } from "@/pages/Mobile/Calendar";
import { ProductivityPage } from "@/pages/Mobile/Productivity";
import { WeatherplayPage } from "@/pages/Mobile/Weatherplay";
import { MobileMealPage } from "@/pages/Mobile";
import { LogsPage } from "@/pages/Logs/ui/LogsPage";
import { AppRoutes } from "@/shared/constants";
import { GuidancePage } from "@/pages/Guidance/ui/GuidancePage";


//mock pages
const MockMainContainer = () => 
  <div className="app-layout">
    {/*mock main container */ }
    <span>mock main</span>
    <Outlet />  
  </div>;

// const DashboardPage = () => <div style={{padding: '20px'}}>Dashboard Page (In Progress)</div>;

const MOBILE = AppRoutes.MOBILE;

export const router = createBrowserRouter([
  {
    path: AppRoutes.AUTH,
    element: <AuthPage />
  },
  {
    // path: '/',
    // element: <MockMainContainer />,
    element: <ProtectedRoute />,
    children: [
      {
        index: true, // default router
        element: <Navigate to={`/${AppRoutes.DASHBOARD}`} replace />,
      },
      {
        path: '/',
        element: <MockMainContainer />,
      },
      {
        path: AppRoutes.DASHBOARD,
        // element: <DashboardPage />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            element: <MobileRouteGuard />,
            children: [
              {
                path: MOBILE.CALENDAR,
                element: <CalendarPage />
              },
              {
                path: MOBILE.PRODUCTIVITY,
                element: <ProductivityPage />
              },
              {
                path: MOBILE.WEATHERPLAY,
                element: <WeatherplayPage />
              },
              {
                path: MOBILE.MESSHALL,
                element: <MobileMealPage />
              }
            ]
          }
        ]
      },
      {
        path: AppRoutes.LOGS,
        element: <LogsPage />,
        handle: {
          hideCharacter: true
        }
      },
      {
        path: AppRoutes.GUIDANCE,
        element: <GuidancePage />,
        handle: {
          hideCharacter: true
        }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace/>
  }
]);