import { Dashboard, Person } from '@material-ui/icons';
import BookIcon from '@material-ui/icons/Book';
import ListIcon from '@material-ui/icons/List';

import DashboardPage from './views/Dashboard/Dashboard';
import List from './views/List/List';
import Scheduler from './views/Scheduler/Scheduler';
import UserProfile from './views/UserProfile/UserProfile';

const dashboardRoutes = [
  {
    path: `/home`,
    name: `Trang chủ`,
    icon: Dashboard,
    component: DashboardPage,
    layout: `/admin`,
  },
  {
    path: `/user`,
    name: `Thông tin người dùng`,
    icon: Person,
    component: UserProfile,
    layout: `/admin`,
  },
  {
    path: `/list`,
    name: `Danh Sách`,
    icon: ListIcon,
    component: List,
    layout: `/admin`,
  },
  {
    path: `/scheduler`,
    name: `Đặt Bàn`,
    icon: BookIcon,
    component: Scheduler,
    layout: `/admin`,
  },
];

export default dashboardRoutes;
