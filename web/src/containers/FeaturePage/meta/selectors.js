import { initialState } from './reducer';
/**
 * Get Feature
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.Feature || initialState;
