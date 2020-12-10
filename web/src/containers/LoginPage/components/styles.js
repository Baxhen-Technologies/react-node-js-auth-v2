import { withStyles } from '@material-ui/styles';

const useStyles = withStyles(
  (theme) => ({
    background: {
      backgroundColor: theme.palette.primary,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '90vh',
      [theme.breakpoints.down('xs')]: {
        height: '38em',
      },
    },
    loginButton: {
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
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    title: {
      marginTop: '29px',
      marginBottom: '29px',
      lineHeight: 1,
      fontWeight: 400,
      fontSize: 24,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
      },
    },
    forgotPassword: {
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.light,
      },
    },
    linkContainer: {
      color: 'primary',
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
  }),
  { withTheme: true }
);

export default useStyles;
