import { initialState } from './reducer';
/**
 * Get Home
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.Home || initialState;
