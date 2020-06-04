import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/typographyStyle';

const useStyles = makeStyles(styles);

export default function Quote(props) {
  const classes = useStyles();
  const { author, text } = props;
  return (
    <blockquote className={classes.defaultFontStyle + ` ` + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  author: PropTypes.node,
  text: PropTypes.node,
};
