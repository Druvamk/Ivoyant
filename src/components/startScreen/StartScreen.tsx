import { ActionsProps } from "../../type";

export default function StartScreen({
  lengthOfQuestions,
  disptach,
}: {
  lengthOfQuestions: number;
  disptach: (action: ActionsProps) => void;
}) {
  return (
    <div className="start">
      <h3>Welcome to the React Quiz...😉</h3>
      <h3>{lengthOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => disptach({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
