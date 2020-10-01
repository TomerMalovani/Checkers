import { initialState } from "./reducer";
/**
 * Get board
 * @param state
 * @returns {Object}
 */
const select = (state) => state.board || initialState;
export const selectBoard = (state) => select(state).board;
export const selectActiveMan = (state) => select(state).active_square;
export const PlayerOne = (state) => select(state).player1Postion;
export const possibleMoves = (state) => select(state).possibleMoves;
