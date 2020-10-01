import React, { useEffect } from "react";
import "./boardContainerStyle.css";

function Board({
  board,
  setBoard,
  clickOnSquare,
  CurrentactiveMan,
  PlayerOneCoor,
  possibleMoves,
  isActive,
  newMove,
  isActiveSqaure,
}) {
  useEffect(() => {
    setBoard();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div class="top">
          {CurrentactiveMan} - {typeof possibleMoves}
          <div class="wrapper-inner">
            <div class="box-inner">A</div>
            <div class="box-inner">B</div>
            <div class="box-inner">C</div>
            <div class="box-inner">D</div>
            <div class="box-inner">E</div>
            <div class="box-inner">F</div>
            <div class="box-inner">G</div>
            <div class="box-inner">H</div>
          </div>
        </div>
        {board.map((square, i) => (
          <div
            key={square.id}
            className={
              isActiveSqaure(CurrentactiveMan, square.id)
                ? "board_Square active"
                : possibleMoves.find((x) => x == square.id)
                ? "board_Square possible"
                : "board_Square"

              // isActive(CurrentactiveMan, square.coordinates)
              //   ? "board_Square active"
              //   : isActive(
              //       square.coordinates,
              //       possibleMoves[0],
              //       possibleMoves[1]
              //     )
              //   ? "board_Square possible"
              //   : "board_Square"
            }
            onClick={() =>
              possibleMoves.find((x) => x === square.id)
                ? newMove(square.id)
                : clickOnSquare(square.id)
            }
          >
            {PlayerOneCoor.find(
              (Onecoor) => Onecoor === square.id && Onecoor === square.id
            ) && <span className="checkerMan" />}
          </div>
        ))}
        <div class="bottom">
          <div class="wrapper-inner">
            <div class="box-inner">A</div>
            <div class="box-inner">B</div>
            <div class="box-inner">C</div>
            <div class="box-inner">D</div>
            <div class="box-inner">E</div>
            <div class="box-inner">F</div>
            <div class="box-inner">G</div>
            <div class="box-inner">H</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
