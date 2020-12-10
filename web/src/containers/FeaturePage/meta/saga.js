import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';

function* handleGetFeature(action) {
  try {
    yield put(actions.getFeatureSuccess());
  } catch (error) {
    yield put(actions.getFeatureError(error));
  }
}

export default function* () {
  yield all([yield takeLatest(constants.GET_FEATURE, handleGetFeature)]);
}
