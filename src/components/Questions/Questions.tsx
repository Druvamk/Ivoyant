import { questionsPropsFetching } from "../../type";
import Options from "../options/Options";

export default function Questions({
  question,
  answer,
  dispatch,
}: questionsPropsFetching) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
