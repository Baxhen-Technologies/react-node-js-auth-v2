import React, { memo } from 'react';
import { styles } from './styles';

const useStyles = styles;

function CONT_CAMEL_NAME() {
  const classes = useStyles();
  return <div className={classes} />;
}

export default memo(CONT_CAMEL_NAME);
