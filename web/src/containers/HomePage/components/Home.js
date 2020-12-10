import React, { memo } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { styles } from './styles';

const useStyles = styles;

function Home(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h2" color="primary" className={classes.mainText}>
          Tire O Seu Projeto Do Papel
        </Typography>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          color="primary"
          className={classes.mainButton}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default memo(Home);
