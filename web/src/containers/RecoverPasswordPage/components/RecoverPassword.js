import React, { useState, memo } from 'react';
import useStyles from './styles';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { CircularProgress } from '@material-ui/core';

function RecoverPassword(props) {
  const classes = useStyles();
  const {
    handleSubmit,
    recoverPasswordSuccessMessage,
    recoverPasswordErrorMessage,
    pristine,
    submitting,
    formFields,
    dispatchRecoverPassword,
    history,
    loading,
    error,
    t,
  } = props;

  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    dispatchRecoverPassword();
    setOpen(!open);
  };

  const onDialogClose = () => {
    setOpen(!open);
    !error && history.push('/login');
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.background}
    >
      <Grid
        item
        container
        alignItems="center"
        justify="flex-start"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h4" color="primary" className={classes.title}>
            {t('components.recoverPasswordPage.main')}
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            className={classes.instructionText}
          >
            {t('components.recoverPasswordPage.secondary')}
          </Typography>
        </Grid>
        <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid item container direction="column">
            {formFields.map(({ label, type, name, className, inputType }) => (
              <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                <Field
                  component={inputType}
                  label={t(label)}
                  name={name}
                  type={type}
                  className={classes[className]}
                />
              </Grid>
            ))}

            <Grid item container justify="center">
              <Button
                variant="contained"
                className={classes.recoverButton}
                disabled={pristine || submitting}
                type="submit"
              >
                {t('components.recoverPasswordPage.button')}
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Dialog
        open={open}
        onClose={onDialogClose}
        PaperProps={{
          style: {
            padding: 'auto',
          },
        }}
      >
        <DialogContent>
          {recoverPasswordSuccessMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {t('components.recoverPasswordPage.dialogTitle')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {t(recoverPasswordSuccessMessage)}
                </Typography>
                <DialogActions>
                  <Button onClick={onDialogClose} color="primary" autoFocus>
                    Ok
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          ) : recoverPasswordErrorMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {t('components.recoverPasswordPage.dialogTitleError')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {t(recoverPasswordErrorMessage)}
                </Typography>
              </Grid>
              <DialogActions>
                <Button onClick={onDialogClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Grid>
          ) : (
            <CircularProgress />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default memo(RecoverPassword);
