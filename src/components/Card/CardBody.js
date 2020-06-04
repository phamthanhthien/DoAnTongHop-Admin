import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const classes = useStyles();
  const { children, className, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
};
