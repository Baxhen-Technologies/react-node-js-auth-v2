import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    height: '20vh',
    zIndex: 1302,
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    position: 'absolute',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('sm')]: {
      height: '2em',
      width: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3em',
      width: '3em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '2.6rem',
    width: 'auto',
    right: '1em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.6rem',
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.6rem',
    },
  },
}));
