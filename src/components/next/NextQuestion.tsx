import { ActionsProps } from "../../type";

export default function NextQuestion({
  dispatch,
  answer,
  index,
  numQuestions,
}: {
  dispatch: (action: ActionsProps) => void;
  answer: number;
  index: number;
  numQuestions: number;
}) {
  console.log(dispatch, answer);
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}
