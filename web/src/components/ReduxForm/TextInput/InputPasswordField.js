import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton, InputAdornment } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';

export const InputPasswordField = ({
  input,
  type,
  label,
  meta: { error, touched },
  className,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        type={showPassword ? 'text' : type}
        label={label}
        id={name}
        name={name}
        className={className}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                color="primary"
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
