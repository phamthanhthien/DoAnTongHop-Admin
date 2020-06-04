import { Button, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/buttonStyle';

const useStyles = makeStyles(styles);

export default function RegularButton(props) {
  const classes = useStyles();
  const {
    block,
    children,
    className,
    color,
    disabled,
    justIcon,
    link,
    muiClasses,
    round,
    simple,
    size,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button className={btnClasses} classes={muiClasses} {...rest}>
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    `primary`,
    `info`,
    `success`,
    `warning`,
    `danger`,
    `rose`,
    `white`,
    `transparent`,
  ]),
  disabled: PropTypes.bool,
  justIcon: PropTypes.bool,
  link: PropTypes.bool,
  muiClasses: PropTypes.object,
  round: PropTypes.bool,
  simple: PropTypes.bool,
  size: PropTypes.oneOf([`sm`, `lg`]),
};
