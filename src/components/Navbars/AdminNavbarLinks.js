import {
  ClickAwayListener,
  Divider,
  Grow,
  Hidden,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
} from '@material-ui/core';
import Poppers from '@material-ui/core/Popper';
import { Dashboard, Notifications, Person, Search } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/headerLinksStyle';
import Button from '../CustomButtons/Button';
import CustomInput from '../CustomInput/CustomInput';

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + ` ` + classes.search,
          }}
          inputProps={{
            placeholder: `Search`,
            inputProps: {
              'aria-label': `Search`,
            },
          }}
        />
        <Button aria-label="edit" color="white" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        aria-label="Dashboard"
        className={classes.buttonLink}
        color={window.innerWidth > 959 ? `transparent` : `white`}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
      >
        <Dashboard className={classes.icons} />
        <Hidden implementation="css" mdUp>
          <p className={classes.linkText}>Trang chủ</p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          aria-owns={openNotification ? `notification-menu-list-grow` : null}
          className={classes.buttonLink}
          color={window.innerWidth > 959 ? `transparent` : `white`}
          justIcon={window.innerWidth > 959}
          onClick={handleClickNotification}
          simple={!(window.innerWidth > 959)}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden implementation="css" mdUp>
            <p className={classes.linkText} onClick={handleCloseNotification}>
              Thông báo
            </p>
          </Hidden>
        </Button>
        <Poppers
          anchorEl={openNotification}
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            ` ` +
            classes.popperNav
          }
          disablePortal
          open={Boolean(openNotification)}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === `bottom` ? `center top` : `center bottom`,
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      You{`'`}re now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          aria-owns={openProfile ? `profile-menu-list-grow` : null}
          className={classes.buttonLink}
          color={window.innerWidth > 959 ? `transparent` : `white`}
          justIcon={window.innerWidth > 959}
          onClick={handleClickProfile}
          simple={!(window.innerWidth > 959)}
        >
          <Person className={classes.icons} />
          <Hidden implementation="css" mdUp>
            <p className={classes.linkText}>Thông tin người dùng</p>
          </Hidden>
        </Button>
        <Poppers
          anchorEl={openProfile}
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            ` ` +
            classes.popperNav
          }
          disablePortal
          open={Boolean(openProfile)}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === `bottom` ? `center top` : `center bottom`,
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseProfile}
                    >
                      Thông tin người dùng
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseProfile}
                    >
                      Cài đặt
                    </MenuItem>
                    <Divider light />
                    <MenuItem className={classes.dropdownItem}>
                      Đăng xuất
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}
