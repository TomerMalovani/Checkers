import * as constants from "./constants";

export const getBoard = () => ({
  type: constants.GET_BOARD,
});

export const getBoardSuccess = (payload) => ({
  type: constants.GET_BOARD_SUCCESS,
  payload,
});

export const getBoardError = (payload) => ({
  type: constants.GET_BOARD_ERROR,
  payload,
});

export const activeMan = (coor) => ({
  type: constants.PICK_MAN_TO_ACTIVE,
  payload: coor,
});

export const setBoard = (payload) => ({
  type: constants.SETBOARD,
  payload,
});

export const setPossibleMoves = (payload) => ({
  type: constants.SET_POSSIBLE_Moves,
  payload,
});

export const resetActive = (payload) => ({
  type: constants.RESET_ACTIVE_PLAYER,
  payload,
});

export const clickOnSquare = (payload) => ({
  type: constants.PICK_SQUARE,
  payload: payload,
});

export const newMove = (payload) => ({
  type: constants.NEW_MOVE,
  payload: payload,
});

export const applyPostion = (payload) => ({
  type: constants.APPLY_POSTION,
  payload: payload,
});
