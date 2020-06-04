import {
  Checkbox,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import { Check, Close, Edit } from '@material-ui/icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle';

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const { tasks, tasksIndexes } = props;
  const tableCellClasses = classnames(classes.tableCell);
  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map(value => (
          <TableRow className={classes.tableRow} key={value}>
            <TableCell className={tableCellClasses}>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.root,
                }}
                icon={<Check className={classes.uncheckedIcon} />}
                onClick={() => handleToggle(value)}
                tabIndex={-1}
              />
            </TableCell>
            <TableCell className={tableCellClasses}>{tasks[value]}</TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-top"
                placement="top"
                title="Edit Task"
              >
                <IconButton
                  aria-label="Edit"
                  className={classes.tableActionButton}
                >
                  <Edit
                    className={
                      classes.tableActionButtonIcon + ` ` + classes.edit
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                id="tooltip-top-start"
                placement="top"
                title="Remove"
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Close
                    className={
                      classes.tableActionButtonIcon + ` ` + classes.close
                    }
                  />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  checkedIndexes: PropTypes.array,
  tasks: PropTypes.arrayOf(PropTypes.node),
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
};
