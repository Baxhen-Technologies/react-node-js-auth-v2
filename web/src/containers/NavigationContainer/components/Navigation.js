import React, { memo, useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { Button } from '@material-ui/core';
import { history } from '../../../history';

const useStyles = styles;

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navigation({
  headerConfig,
  linksConfig,
  value,
  setValue,
  isAuthenticated,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);

  /***************************************** Config Objects **********************************************/
  const headerConditions = [
    {
      first: isAuthenticated,

      action: () => {
        return renderHeader('Quando o usuário esta autenticado');
      },
    },
    {
      first: !isAuthenticated,

      action: () => {
        return renderHeader('Quando o usuário não esta autenticado');
      },
    },
  ];
  /*******************************************************************************************************/
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (e, value) => {
    setValue(value);
  };

  const renderTabs = (tabs) => (
    <Tabs
      value={value >= tabs.length ? 0 : value}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor="secondary"
    >
      {tabs.map(({ label, to, className }) => (
        <Tab
          key={t(label)}
          className={classes[className]}
          label={t(label)}
          component={Link}
          to={to}
        />
      ))}
    </Tabs>
  );
  const drawer = (tabs) => (
    <Grid container direction="column">
      <List>
        {tabs.map(({ label, valueActive, to }) => (
          <ListItem
            button
            key={label}
            justify="center"
            className={
              classes[valueActive === value ? 'menuItemActive' : 'menuItem']
            }
            component={Link}
            to={to}
            onClick={() => {
              setValue(valueActive);
              matches && handleDrawerToggle();
            }}
          >
            <ListItemText primary={t(label)} style={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
  // const renderDrawer = (tabs) => (
  //   <>
  //     <SwipeableDrawer
  //       disableBackdropTransition={!iOS}
  //       disableDiscovery={iOS}
  //       open={openDrawer}
  //       onClose={() => setOpenDrawer(false)}
  //       onOpen={() => setOpenDrawer(true)}
  //       classes={{ paper: classes.drawer }}
  //     >
  //       <div className={classes.toolbarMargin}></div>

  //       <List disablePadding>
  //         {tabs.map(({ label, to }, i) => (
  //           <ListItem
  //             divider
  //             button
  //             key={label}
  //             component={Link}
  //             to={to}
  //             onClick={() => {
  //               setOpenDrawer(false)
  //               setValue(i)
  //             }}
  //             selected={value === i}
  //             classes={{ selected: classes.drawerSelectedItem }}
  //           >
  //             <ListItemText className={classes.drawerItem} disableTypography>
  //               {label}
  //             </ListItemText>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </SwipeableDrawer>
  //     <IconButton
  //       onClick={() => setOpenDrawer(!openDrawer)}
  //       disableRipple
  //       className={classes.drawerIconContainer}
  //     >
  //       <MenuIcon className={classes.drawerIcon} />
  //     </IconButton>
  //   </>
  // )

  const renderHeader = (condition) => {
    const [headerToRender] = headerConfig.filter(({ cond }) => {
      return condition === cond;
    });

    const {
      logoTab: { to },
      tabs,
    } = headerToRender;

    return (
      <>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appBar} color="secondary">
            <Toolbar disableGutters>
              <Button
                component={Link}
                to={to}
                onClick={() => {
                  setValue(0);
                }}
                disableRipple
                className={classes.logoContainer}
              >
                <img src={logo} alt="Logo" className={classes.logo} />
              </Button>
              {matches ? (
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <></>
              )}
              {matches ? <></> : renderTabs(tabs)}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              // container={container}
              // anchor='right'
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer(tabs)}
            </Drawer>
          </Hidden>
        </nav>
      </>
    );
  };

  function renderLinks() {
    const [header] = headerConditions.filter(({ first, action }) => {
      if (first) return action();
      return null;
    });

    return header.action();
  }

  useEffect(() => {
    const historyListener = history.listen((location) => {
      const { pathname } = location;
      linksConfig.forEach(
        ({ path, linkValue }) =>
          pathname === path && value !== linkValue && setValue(linkValue)
      );

      return () => {
        historyListener();
      };
    });
  }, [linksConfig, setValue, value]);
  useEffect(() => {
    const { pathname } = window.location;
    linksConfig.forEach(
      ({ path, linkValue }) =>
        pathname === path && value !== linkValue && setValue(linkValue)
    );
  }, [linksConfig, setValue, value]);

  return <div className="header">{renderLinks()}</div>;
}

Navigation.propTypes = {};

export default memo(Navigation);
