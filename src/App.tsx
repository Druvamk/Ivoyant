/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/index.css";
import { ActionsProps, intialStateProps, questionsProps } from "./type";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/startScreen/StartScreen";
import Questions from "./components/Questions/Questions";
import NextQuestion from "./components/next/NextQuestion";
import Progress from "./components/progress/Progress";
import FinishScreen from "./components/finish/FinishScreen";
const intialState: intialStateProps = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};
function reducer(state: any, action: ActionsProps) {
  console.log(state);
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const quest: questionsProps = state.questions[state.index];
      console.log(quest);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === quest.correctOption
            ? state.points + quest.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return { ...intialState, questions: state.questions, status: "ready" };

    default:
      return state;
  }
}
export default function App() {
  const [state, disptach] = useReducer(reducer, intialState);
  const { questions, status, index, answer, points, highScore } = state;
  const lengthOfQuestions = questions.length;
  console.log(state);
  const maxPossible = questions.reduce(
    (prev: number, cur: questionsProps) => prev + cur.points,
    0
  );
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3008/questions");
      const res = await data.json();
      disptach({ type: "dataReceived", payload: res });
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            lengthOfQuestions={lengthOfQuestions}
            disptach={disptach}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={lengthOfQuestions}
              points={points}
              maxPossible={maxPossible}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={disptach}
              answer={answer}
            />
            <NextQuestion
              dispatch={disptach}
              answer={answer}
              numQuestions={lengthOfQuestions}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxpossiblepoints={lengthOfQuestions}
            highScore={highScore}
            dispatch={disptach}
          />
        )}
      </Main>
    </div>
  );
}
