import { AppRoutes } from "@/shared/constants";
import { Home, Calendar, NotebookPen, CloudSun, Hamburger, SquareLibrary, Cat } from "lucide-react";

const DASHBOARD = AppRoutes.DASHBOARD;
const MOBILE = AppRoutes.MOBILE;

const dPath = (path: string) => `${DASHBOARD}/${path}`;

export const links = [
  {
    title: 'Home',
    url: DASHBOARD,
    icon: Home
  },
  {
    title: 'Calendar',
    url: dPath(MOBILE.CALENDAR),
    icon: Calendar
  },
  {
    title: 'Productivity',
    url: dPath(MOBILE.PRODUCTIVITY),
    icon: NotebookPen
  },
  {
    title: 'Weatherplay',
    url: dPath(MOBILE.WEATHERPLAY),
    icon: CloudSun
  },
  {
    title: 'Mess hall',
    url: dPath(MOBILE.MESSHALL),
    icon: Hamburger
  },
  {
    title: 'Logs',
    url: AppRoutes.LOGS,
    icon: SquareLibrary
  },
  {
    title: '🔥Guidance',
    url: AppRoutes.GUIDANCE,
    icon: Cat
  },
];