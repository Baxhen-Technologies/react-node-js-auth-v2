import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '70vh',
    [theme.breakpoints.down('xs')]: {
      height: '38em',
    },
  },
  recoverButton: {
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.blue,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    marginTop: '2em',
  },
  title: {
    lineHeight: 1,
    fontSize: 55,
    [theme.breakpoints.down('xs')]: {
      fontSize: 45,
      maxWidth: 306,
    },
  },
}));
