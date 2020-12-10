import { initialState } from './reducer';
/**
 * Get LogOut
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.LogOut || initialState;
