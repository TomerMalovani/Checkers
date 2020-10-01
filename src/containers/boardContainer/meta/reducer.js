import produce from "immer";
import { act } from "react-dom/test-utils";
import * as constants from "./constants";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  playerTurn: 1,
  possibleMoves: [],
  board_size: 8,
  board: [],
  active_square: "",
  player1Postion: [
    "a7",
    "c7",
    "g7",
    "e7",
    "a5",
    "c5",
    "g5",
    "e5",
    "b6",
    "d6",
    "f6",
    "h6",
  ],
  sats: {},
};
const board = createReducer(initialState, {
  [constants.PICK_MAN_TO_ACTIVE]: (state, action) => {
    return { ...state, active_square: action.payload };
  },
  [constants.SETBOARD]: (state, action) => {
    let tempBoard = [];
    for (let rowIndex = 0; rowIndex < state.board_size; rowIndex++) {
      for (let squareIndex = 0; squareIndex < state.board_size; squareIndex++) {
        tempBoard.push({
          coordinates: [rowIndex, squareIndex],
          id: `${constants.LETTERS[squareIndex]}${rowIndex}`,
        });
      }
    }
    return { ...state, board: tempBoard };
  },
  [constants.SET_POSSIBLE_Moves]: (state, action) => {
    return { ...state, possibleMoves: action.payload };
  },
  [constants.RESET_ACTIVE_PLAYER]: (state, action) => {
    return { ...state, active_square: "", possibleMoves: [] };
  },
  [constants.APPLY_POSTION]: (state, action) => {
    return {
      ...state,
      active_square: "",
      possibleMoves: [],
      player1Postion: action.payload,
    };
  },
});

/* eslint-disable no-param-reassign */
// const board = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//       case constants.PICK_MAN_TO_ACTIVE:
//         draft.active_square = action.payload;
//         break;
//       case constants.GET_BOARD_SUCCESS:
//         draft.items = action.payload;
//         break;
//       case constants.GET_BOARD_ERROR:
//         break;
//     }
//   });

export default board;
