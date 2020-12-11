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
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

function ResetPassword(props) {
  const classes = useStyles();
  const { token, email } = useParams();
  const {
    handleSubmit,
    resetPasswordSuccessMessage,
    resetPasswordErrorMessage,
    pristine,
    submitting,
    formFields,
    dispatchResetPassword,
    history,
    error,
    loading,
    t,
  } = props;

  const [open, setOpen] = useState(false);

  const onSubmit = (formProps) => {
    formProps.token = token;
    formProps.email = email;
    dispatchResetPassword();
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
            Criar Nova Senha
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            className={classes.instructionText}
          >
            Cadastre a sua nova senha
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
                Redefinir Senha
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
          {resetPasswordSuccessMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {t('components.resetPasswordPage.dialogTitle')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {t(resetPasswordSuccessMessage)}
                </Typography>
              </Grid>
              <DialogActions>
                <Button onClick={onDialogClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Grid>
          ) : resetPasswordErrorMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  {t('components.resetPasswordPage.dialogTitleError')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {t(resetPasswordErrorMessage)}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <CircularProgress />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default memo(ResetPassword);
