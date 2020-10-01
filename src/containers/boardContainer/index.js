import { connect } from "react-redux";
import Board from "./components/board";
import { getBoard, setBoard, clickOnSquare, newMove } from "./meta/actions";
import {
  selectBoard,
  PlayerOne,
  selectActiveMan,
  possibleMoves,
} from "./meta/selectors";

const isActiveSqaure = (active, picked) => active === picked;

const isActive = (arr1, arr2, arr3) =>
  !arr3
    ? arr1[0] === arr2[0] && arr1[1] === arr2[1]
    : (arr1[0] === arr2[0] && arr1[1] === arr2[1]) ||
      (arr1[0] === arr3[0] && arr1[1] === arr3[1]);

const mapStateToProps = (state) => ({
  board: selectBoard(state),
  CurrentactiveMan: selectActiveMan(state),
  PlayerOneCoor: PlayerOne(state),
  possibleMoves: possibleMoves(state),
  isActive: isActive,
  isActiveSqaure: isActiveSqaure,
});

const mapDispatchToProps = {
  getBoard,
  setBoard,
  newMove,

  clickOnSquare,
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
