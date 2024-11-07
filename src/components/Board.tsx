import { useSelector } from "react-redux";
import { RootState } from "../store";
import Tile from "./Tile";

export default function Board() {
  const data = useSelector((state: RootState) => state.candyCrush);
  const { board, boardSize } = data;
  return (
    <div
      className="flex flex-wrap rounded-lg"
      style={{ width: `${boardSize * 6.25}rem` }}
    >
      {board.map((candy, index) => (
        <Tile key={index} candy={candy} candyId={index} />
      ))}
    </div>
  );
}
