import { Dashboard, Person } from '@material-ui/icons';
import BookIcon from '@material-ui/icons/Book';
import ListIcon from '@material-ui/icons/List';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import CouserList from './views/CouserList/CouserList';
import DashboardPage from './views/Dashboard/Dashboard';
import List from './views/List/List';
import RegisterCourse from './views/RegisterCourse/RegisterCourse';
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
    name: `Người dùng`,
    icon: ListIcon,
    component: List,
    layout: `/admin`,
  },
  {
    path: `/couserlist`,
    name: `Khóa học`,
    icon: MenuBookIcon,
    component: CouserList,
    layout: `/admin`,
  },
  {
    path: `/register-course`,
    name: `Ghi danh khóa học`,
    icon: MenuBookIcon,
    component: RegisterCourse,
    layout: `/admin`,
  },
  {
    path: `/scheduler`,
    name: `Xếp lịch`,
    icon: BookIcon,
    component: Scheduler,
    layout: `/admin`,
  },
];

export default dashboardRoutes;
