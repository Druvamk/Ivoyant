import { ActionsProps } from "../../type";

export default function FinishScreen({
  points,
  maxpossiblepoints,
  highScore,
  dispatch,
}: {
  points: number;
  maxpossiblepoints: number;
  highScore: number;
  dispatch: (action: ActionsProps) => void;
}) {
  let emoji;

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points} </strong>out of
        {maxpossiblepoints}
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
