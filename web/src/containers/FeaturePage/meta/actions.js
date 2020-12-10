import * as constants from './constants';

export const getFeature = () => ({
  type: constants.GET_FEATURE,
});

export const getFeatureSuccess = (payload) => ({
  type: constants.GET_FEATURE_SUCCESS,
  payload,
});

export const getFeatureError = (payload) => ({
  type: constants.GET_FEATURE_ERROR,
  payload,
});
