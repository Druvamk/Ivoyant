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

  const percentage = (points / maxpossiblepoints) * 100;
  if (percentage === 100) emoji = "🧁";
  if (percentage >= 80 && percentage < 100) emoji = "🥯";
  if (percentage >= 50 && percentage < 80) emoji = "🥳";
  if (percentage >= 0 && percentage < 50) emoji = "🫡";
  if (percentage === 0) emoji = "🙃No......";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points} </strong>out of
        {maxpossiblepoints}({Math.ceil(percentage)}%)
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
