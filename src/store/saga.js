import { all } from "redux-saga/effects";
import BoardSaga from "../containers/boardContainer/meta/saga";
export default function* saga() {
  yield all([BoardSaga()]);
}
