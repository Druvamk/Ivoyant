import { candyData } from "./candyData";

export const createBoard = (boardSize: number) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => candyData[Math.floor(Math.random() * candyData.length)]);
