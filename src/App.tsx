import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { updateBoard } from "./slicemethods/candy";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import {
  checkForFourRows,
  checkForThreeRows,
  isColumnOffur,
  isColumnOfThree,
} from "./utils/moveCheckLogin";
import {
  formula,
  formulaForColumnThree,
  generateInvalidBoard,
} from "./utils/formula";

export default function App() {
  const data = useSelector((state: RootState) => state.candyCrush);
  const dispatch = useDispatch();
  const { board, boardSize } = data;
  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOffur(newBoard, boardSize, formula(boardSize));
      isColumnOfThree(newBoard, boardSize, formulaForColumnThree(boardSize));
      checkForFourRows(
        newBoard,
        boardSize,
        generateInvalidBoard(boardSize, true)
      );
      checkForThreeRows(newBoard, boardSize, generateInvalidBoard(boardSize));
      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);
  return (
    <div className="flex items-center justify-center h-100vh">
      <Board />
    </div>
  );
}
