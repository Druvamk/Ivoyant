import { questionsPropsFetching } from "../../type";

export default function Options({
  question,
  answer,
  dispatch,
}: questionsPropsFetching) {
  const hasAnswerd = answer !== null;
  console.log(answer);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
