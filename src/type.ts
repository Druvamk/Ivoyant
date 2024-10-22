export type questionsProps = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export interface intialStateProps {
  questions: questionsProps[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highScore: number;
}
export type ActionsProps =
  | { type: "dataReceived"; payload: intialStateProps }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion"; payload?: number }
  | { type: "finished"; payload?: string }
  | { type: "restart" };
export type singleQuestionProps = {
  question: string;
  options: number[];
  correctOption: number;
  points: number;
  id: string;
};

export type questionsPropsFetching = {
  question: singleQuestionProps;
  dispatch: (action: ActionsProps) => void;
  answer?: number;
};
