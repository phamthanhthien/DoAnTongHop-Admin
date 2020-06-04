import { IconButton, makeStyles, Snack } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/snackbarContentStyle';

const useStyles = makeStyles(styles);

export default function SnackbarContent(props) {
  const classes = useStyles();
  const { close, color, icon, message } = props;
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
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      action={action}
      classes={{
        root: classes.root + ` ` + classes[color],
        message: classes.message,
      }}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
    />
  );
}

SnackbarContent.propTypes = {
  close: PropTypes.bool,
  color: PropTypes.oneOf([`info`, `success`, `warning`, `danger`, `primary`]),
  icon: PropTypes.object,
  message: PropTypes.node.isRequired,
  rtlActive: PropTypes.bool,
};
