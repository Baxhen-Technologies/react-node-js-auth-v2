import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Grid } from '@material-ui/core';

const DynamicComponent = (dynamicImport) => {
  const Component = lazy(dynamicImport);

  const renderCircularProgress = () => {
    return (
      <Grid
        justify="center"
        alignItems="center"
        style={{ height: '70vh' }}
        container
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  };
  return (props) => (
    <Suspense fallback={renderCircularProgress()}>
      <Component {...props} />
    </Suspense>
  );
};

DynamicComponent.proTypes = {
  dynamicImport: PropTypes.func,
};

export default DynamicComponent;
