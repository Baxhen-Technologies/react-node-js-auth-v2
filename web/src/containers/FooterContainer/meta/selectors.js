import { initialState } from './reducer';
/**
 * Get Footer
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.Footer || initialState;
