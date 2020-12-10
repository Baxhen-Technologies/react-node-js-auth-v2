import React, { Component, memo } from 'react';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { CircularProgress } from '@material-ui/core';

import { history } from '../../../history';

class SignUp extends Component {
  state = {
    error: false,
    open: false,
  };

  onSubmit = () => {
    this.props.dispatchSignUp();
    this.setState({ open: !this.state.open });
  };

  componentDidUpdate(lastProps) {
    if (this.props.signUpErrorMessage !== lastProps.signUpErrorMessage) {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      handleSubmit,
      classes,
      signUpErrorMessage,
      signUpSuccessMessage,
      pristine,
      submitting,
      formFields,
    } = this.props;
    const onDialogClose = () => {
      this.setState({ open: !this.state.open });
      history.push('/login');
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
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.container}
        >
          <Grid item>
            <Typography variant="h2" color="primary" className={classes.title}>
              Cadastro
            </Typography>
          </Grid>

          <FormControl
            error={this.state.error}
            component="form"
            onSubmit={handleSubmit(this.onSubmit)}
          >
            <Grid item container direction="column">
              {formFields.map(({ label, type, name, className, inputType }) => (
                <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                  <Field
                    component={inputType}
                    label={label}
                    name={name}
                    type={type}
                    className={classes[className]}
                  />
                </Grid>
              ))}
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  className={classes.registerButton}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Criar Conta
                </Button>
              </Grid>
            </Grid>
            <FormHelperText
              style={{
                textAlign: 'center',
                marginBottom: '9.5px',
                marginTop: '9.5px',
              }}
            >
              {signUpErrorMessage}
            </FormHelperText>
          </FormControl>
        </Grid>

        {!signUpErrorMessage ? (
          <Dialog
            open={this.state.open}
            onClose={onDialogClose}
            PaperProps={{
              style: {
                padding: 'auto',
              },
            }}
          >
            <DialogContent>
              {signUpSuccessMessage ? (
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h4" color="primary" gutterBottom>
                      Email Enviado
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="primary" variant="body1">
                      {signUpSuccessMessage}
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
        ) : (
          <></>
        )}
      </Grid>
    );
  }
}

export default memo(SignUp);
