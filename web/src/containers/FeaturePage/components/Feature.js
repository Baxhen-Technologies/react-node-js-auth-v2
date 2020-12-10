import React, { memo } from 'react';
import { Grid } from '@material-ui/core';

import { styles } from './styles';

const useStyles = styles;

function Feature() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      Feature
    </Grid>
  );
}

export default memo(Feature);
