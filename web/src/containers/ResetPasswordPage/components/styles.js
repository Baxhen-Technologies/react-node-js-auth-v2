import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '90vh',
    [theme.breakpoints.down('xs')]: {
      height: '38em',
    },
  },
  recoverButton: {
    borderRadius: 50,
    height: 45,
    width: '328px',
    color: 'white',
    fontWeight: 400,
    fontSize: '1rem',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    marginTop: '0.5rem',
    marginBottom: '29px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  container: {
    width: '36rem',
    maxHeight: '24.25rem',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '16px',
    [theme.breakpoints.down('xs')]: {
      width: '20rem',
    },
  },
  title: {
    marginTop: '29px',
    marginBottom: '29px',
    textAlign: 'center',
    lineHeight: 1,
    fontWeight: 400,
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  instructionText: {
    marginTop: '29px',
    marginBottom: '29px',
    textAlign: 'center',
    lineHeight: 1,
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  input: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderRadius: 0,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.light,
      },
    },
    width: '328px',
    marginBottom: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
