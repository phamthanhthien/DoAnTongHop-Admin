import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/cardIconStyle';

const useStyles = makeStyles(styles);

export default function CardIcon(props) {
  const classes = useStyles();
  const { children, className, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + `CardHeader`]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    `warning`,
    `success`,
    `danger`,
    `info`,
    `primary`,
    `rose`,
  ]),
};
