import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/cardHeaderStyle';

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
  const classes = useStyles();
  const { children, className, color, icon, plain, stats, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + `CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
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
  icon: PropTypes.bool,
  plain: PropTypes.bool,
  stats: PropTypes.bool,
};
