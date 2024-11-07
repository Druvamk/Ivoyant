import { WritableDraft } from "immer";
import { formula } from "../../utils/formula";
export const MoveBelow = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    SquarebeingReplaced: Element | undefined;
    SquareReplaced: Element | undefined;
  }>
) => {
  const newBoard: string[] = [...state.board];
  const { boardSize } = state;
  let boardChanges: boolean = false;
  const formulaForMove: number = formula(boardSize);
};
