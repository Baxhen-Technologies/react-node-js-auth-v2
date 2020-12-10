import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputTextField = ({
  input,
  type,
  label,
  meta: { error, touched },
  className,
  name,
}) => {
  const hasError = () => {
    if (error && touched) {
      return { error: true };
    }
    return undefined;
  };

  const showError = () => {
    if (error && touched) {
      return error;
    }
    return undefined;
  };

  return (
    <>
      <TextField
        {...input}
        {...hasError()}
        helperText={showError()}
        variant="outlined"
        fullWidth
        type={type}
        label={label}
        id={name}
        name={name}
        className={className}
      />
    </>
  );
};
