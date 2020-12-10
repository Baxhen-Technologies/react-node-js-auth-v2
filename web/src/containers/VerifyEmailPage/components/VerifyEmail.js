import React, { useState, memo, useEffect } from 'react';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

function VerifyEmail(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { token, email } = useParams();
  const {
    verifyEmailSuccessMessage,
    verifyEmailErrorMessage,
    loading,
    error,
    dispatchVerifyEmail,
    history,
  } = props;

  const [open, setOpen] = useState(false);

  const onDialogClose = () => {
    setOpen(!open);
    !error && history.push('/login');
  };

  useEffect(() => {
    dispatchVerifyEmail({ token, email });
    setOpen(!open);
    // eslint-disable-next-line
  }, []);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.background}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              Verificação de email
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.blue,
                textAlign: 'center',
                marginBottom: '2em',
              }}
            >
              Estamos Verificando a sua conta
            </Typography>
          </Grid>
        </Grid>
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
          {verifyEmailSuccessMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Verificação de Email
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {verifyEmailSuccessMessage}
                </Typography>
              </Grid>
              <DialogActions>
                <Button onClick={onDialogClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Grid>
          ) : verifyEmailErrorMessage && !loading ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Verificação De Email Falhou
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {verifyEmailErrorMessage}
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

export default memo(VerifyEmail);
