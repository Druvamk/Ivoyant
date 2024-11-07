export const isColumnOffur = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOffour: number
) => {
  for (let i: number = 0; i < formulaForColumnOffour; i++) {
    const columnOffour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnOffour.every(
        (index) => newBoard[index] === decidedColor && !isBlank
      )
    ) {
      columnOffour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfThree: number
) => {
  for (let i: number = 0; i < formulaForColumnOfThree; i++) {
    const columnOfThree: number[] = [i, i + boardSize, i + boardSize * 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnOfThree.every(
        (index) => newBoard[index] === decidedColor && !isBlank
      )
    ) {
      columnOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
export const checkForFourRows = (
  newBoard: string[],
  boardSize: number,
  invalidatesMoves: number[]
) => {
  for (let i: number = 0; i < boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidatesMoves.includes(i)) continue;
    if (
      rowOfFour.every((index) => newBoard[index] === decidedColor && !isBlank)
    ) {
      rowOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
export const checkForThreeRows = (
  newBoard: string[],
  boardSize: number,
  invalidatesMoves: number[]
) => {
  for (let i: number = 0; i < boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidatesMoves.includes(i)) continue;
    if (
      rowOfThree.every((index) => newBoard[index] === decidedColor && !isBlank)
    ) {
      rowOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
