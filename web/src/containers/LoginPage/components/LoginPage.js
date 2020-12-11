import React, { Component, memo } from 'react';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

class LoginPage extends Component {
  state = {
    error: false,
  };

  onSubmit = (formProps) => {
    this.props.dispatchAuthenticate();
  };

  componentDidUpdate(lastProps) {
    if (this.props.signInErrorMessage !== lastProps.signInErrorMessage) {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      handleSubmit,
      classes,
      signInErrorMessage,
      pristine,
      submitting,
      formFields,
      t,
    } = this.props;

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
              {t('components.loginPage.main')}
            </Typography>
          </Grid>

          <Grid item>
            <FormControl
              error={this.state.error}
              component="form"
              onSubmit={handleSubmit(this.onSubmit)}
            >
              <Grid item container direction="column">
                {formFields.map(
                  ({ label, type, name, className, inputType }) => (
                    <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                      <Field
                        component={inputType}
                        label={t(label)}
                        name={name}
                        type={type}
                        className={classes[className]}
                      />
                    </Grid>
                  )
                )}
                <Grid item container justify="flex-end">
                  <Typography className={classes.linkContainer}>
                    <Link
                      variant="body2"
                      className={classes.forgotPassword}
                      component={RouterLink}
                      to="/recoverPassword"
                    >
                      {t('components.loginPage.forgotPassword')}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item container justify="center">
                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    disabled={pristine || submitting}
                    type="submit"
                  >
                    {t('components.loginPage.button')}
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
                {t(signInErrorMessage)}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default memo(LoginPage);
