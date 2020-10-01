import {
  all,
  takeLatest,
  takeEvery,
  put,
  select,
  call,
} from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import { PlayerOne, selectActiveMan } from "./selectors";

function* handleGetBoard(action) {
  try {
    yield put(actions.getBoardSuccess());
  } catch (error) {
    yield put(actions.getBoardError(error));
  }
}

function* HandleMoves(action) {
  try {
    console.log("handle move: ", action.payload);
    const AllplayerMoves = yield select(PlayerOne);
    const currnetActive = yield select(selectActiveMan);
    if (!AllplayerMoves.find((x) => x === action.payload)) return;
    if (currnetActive === action.payload)
      return yield put(actions.resetActive());
    else {
      const possiblePlayerMoves = yield call(whereCanItGo, [
        AllplayerMoves,
        action.payload,
      ]);
      yield put(actions.setPossibleMoves(possiblePlayerMoves));
      yield put(actions.activeMan(action.payload));
    }
  } catch (error) {
    console.log(error);
    // yield put(actions.getBoardError(error));
  }
}

function* newMove(action) {
  console.log("new postion: ", action);

  const AllplayerMoves = yield select(PlayerOne);
  const currnetActive = yield select(selectActiveMan);
  let temp = [...AllplayerMoves];

  let index = AllplayerMoves.indexOf(currnetActive);

  temp[index] = action.payload;
  console.log(temp);
  yield put(actions.applyPostion(temp));
}

function whereCanItGo(payload) {
  const [allPlayer, activePlayer] = payload;
  let activePlayerIndex = constants.LETTERS.indexOf(activePlayer[0]);

  let movesBeforeCheck = [
    constants.LETTERS[activePlayerIndex + 1] +
      `${parseInt(activePlayer[1]) - 1}`,

    constants.LETTERS[activePlayerIndex - 1] +
      `${parseInt(activePlayer[1]) - 1}`,
  ];
  let temp = movesBeforeCheck;
  movesBeforeCheck.map((CheckedMove, i) => {
    return allPlayer.indexOf(CheckedMove) !== -1 && temp.splice(i, 1);
  });
  return temp;
}

export default function* () {
  yield all([yield takeLatest(constants.GET_BOARD, handleGetBoard)]);
  yield all([yield takeEvery(constants.PICK_SQUARE, HandleMoves)]);
  yield all([yield takeLatest(constants.NEW_MOVE, newMove)]);
}
