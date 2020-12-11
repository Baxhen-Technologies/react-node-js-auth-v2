import React, { memo } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';

const useStyles = styles;

function Home(props) {
  const classes = useStyles();
  const { t } = useTranslation();
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
          {t('components.homePage.main')}
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
          {t('components.homePage.button')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default memo(Home);
