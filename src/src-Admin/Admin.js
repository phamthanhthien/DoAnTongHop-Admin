import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'perfect-scrollbar';
import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import logo from '../assets/img/reactlogo.png';
import bgImage from '../assets/img/sidebar-2.jpg';
import styles from '../assets/jss/material-dashboard-react/layouts/adminStyle';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes';

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === `/admin`) {
        return (
          <Route
            component={prop.component}
            key={key}
            path={prop.layout + prop.path}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const classes = useStyles();
  const mainPanel = React.createRef();
  const [image] = React.useState(bgImage);
  const [color] = React.useState(`blue`);
  let history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== `/admin/maps`;
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (!localStorage.getItem(`userAdmin`)) {
      history.push(`/`);
    }
  }, [history]);

  React.useEffect(() => {
    if (navigator.platform.indexOf(`Win`) > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = `hidden`;
    }
    window.addEventListener(`resize`, resizeFunction);
    return function cleanup() {
      if (navigator.platform.indexOf(`Win`) > -1) {
        ps.destroy();
      }
      window.removeEventListener(`resize`, resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        color={color}
        handleDrawerToggle={handleDrawerToggle}
        image={image}
        logo={logo}
        logoText={`EDULINE ADMIN`}
        open={mobileOpen}
        routes={routes}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          routes={routes}
          {...rest}
        />
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </div>
  );
}
