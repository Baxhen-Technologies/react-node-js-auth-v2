import React, { memo } from 'react';
import { Grid } from '@material-ui/core';

import { styles } from './styles';

const useStyles = styles;

function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      About
    </Grid>
  );
}

export default memo(About);
