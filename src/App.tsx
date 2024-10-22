import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/index.css";
import { ActionsProps, intialStateProps } from "./type";
const intialState: intialStateProps = { questions: [], status: "loading" };
function reducer(state, action: ActionsProps) {
  console.log(state);
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      return state;
  }
}
export default function App() {
  const [state, disptach] = useReducer(reducer, intialState);
  console.log(state);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("http://localhost:3008/questions");
        const res = await data.json();
        disptach({ type: "dataReceived", payload: res });
        console.log(res);
      } catch (error) {
        disptach({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
