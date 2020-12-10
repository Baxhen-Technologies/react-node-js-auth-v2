import { initialState } from './reducer';
/**
 * Get About
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.About || initialState;
