import { makeStyles } from '@material-ui/core/styles';

import home from 'assets/home.jpg';

export const styles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundColor: theme.palette.secondary,
    paddingTop: 0,
    marginTop: 0,
    height: '90vh',
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundImage: `url(${home})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      marginTop: 0,
      marginLeft: 0,
      width: '100%',
      height: '100%',
      opacity: 0.4,
      zIndex: -1,
    },
  },
  mainText: {
    margin: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  mainButton: {
    width: '8rem',
  },
}));
