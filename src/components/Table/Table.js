import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/tableStyle';

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableData, tableHead, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + `TableHeader`]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + ` ` + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow className={classes.tableBodyRow} key={key}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: `gray`,
};

CustomTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableHeaderColor: PropTypes.oneOf([
    `warning`,
    `primary`,
    `danger`,
    `success`,
    `info`,
    `rose`,
    `gray`,
  ]),
};
