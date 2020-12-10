import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';
import { styles } from './styles';

const useStyles = styles;

function Footer({ setValue, headerConfig }) {
  const classes = useStyles();
  const [, tabs2] = headerConfig.map(({ tabs }) => tabs);
  const allTabs = [...tabs2];

  return (
    <footer className={classes.footer}>
      <Hidden xsDown>
        <Grid container justify="center" className={classes.mainContainer}>
          {allTabs.map(({ label, to }, i) => (
            <Grid key={label + to} item className={classes.gridItem}>
              <Grid container direction="column">
                <Grid
                  item
                  className={classes.link}
                  onClick={() => setValue(i)}
                  component={Link}
                  to={to}
                >
                  {label}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default memo(Footer);
