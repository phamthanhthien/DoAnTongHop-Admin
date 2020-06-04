import { FormControl, Input, InputLabel, makeStyles } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../assets/jss/material-dashboard-react/components/customInputStyle';

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    error,
    formControlProps,
    id,
    inputProps,
    labelProps,
    labelText,
    success,
  } = props;

  const labelClasses = classNames({
    [` ` + classes.labelRootError]: error,
    [` ` + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + ` ` + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + ` ` + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ` ` + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  error: PropTypes.bool,
  formControlProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  labelText: PropTypes.node,
  success: PropTypes.bool,
};
