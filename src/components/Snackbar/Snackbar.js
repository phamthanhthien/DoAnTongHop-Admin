import { IconButton, makeStyles, Snack } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/snackbarContentStyle';

const useStyles = makeStyles(styles);

export default function Snackbar(props) {
  const classes = useStyles();
  const { close, color, icon, message, open, place } = props;
  var action = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        aria-label="Close"
        className={classes.iconButton}
        color="inherit"
        key="close"
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      action={action}
      anchorOrigin={{
        vertical: place.indexOf(`t`) === -1 ? `bottom` : `top`,
        horizontal:
          place.indexOf(`l`) !== -1
            ? `left`
            : place.indexOf(`c`) !== -1
            ? `center`
            : `right`,
      }}
      contentProps={{
        classes: {
          root: classes.root + ` ` + classes[color],
          message: classes.message,
        },
      }}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      open={open}
    />
  );
}

Snackbar.propTypes = {
  close: PropTypes.bool,
  closeNotification: PropTypes.func,
  color: PropTypes.oneOf([`info`, `success`, `warning`, `danger`, `primary`]),
  icon: PropTypes.object,
  message: PropTypes.node.isRequired,
  open: PropTypes.bool,
  place: PropTypes.oneOf([`tl`, `tr`, `tc`, `br`, `bl`, `bc`]),
  rtlActive: PropTypes.bool,
};
