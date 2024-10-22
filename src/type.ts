type questionsProps = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export interface intialStateProps {
  questions: questionsProps[];
  status: "loading" | "ready" | "error";
}
export type ActionsProps =
  | { type: "dataReceived"; payload: intialStateProps }
  | { type: "dataFailed" };
