import { List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/footerStyle';

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} href="#home">
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} href="#company">
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} href="#portfolio">
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} href="#blog">
                Blog
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}
