import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 288;
export const styles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: '10vh !important',
  },
  logoContainer: {
    marginLeft: '2.5rem',
    height: '10vh',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  logo: {
    height: '10vh',
    marginBottom: 0,
    padding: 0,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  lastTab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    marginRight: '25px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerSelectedItem: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    height: '10vh',
    minHeight: '64px',
  },
  menuButton: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuItem: {
    color: theme.palette.primary.main,
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    alignSelf: 'center',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.light,
    },
  },
  menuItemActive: {
    color: 'white',
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    top: '10vh',
    //  backgroundColor: theme.palette.secondary.main
  },
}));
