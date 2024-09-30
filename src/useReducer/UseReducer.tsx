import { useReducer } from "react";
type userReducerprops = {
  count: number;
};
type actionProps = {
  type: "incremet" | "decrement";
  payload: number;
};
type authorprops = {
  type: "reset";
};
type totalProps = actionProps | authorprops;
const intialState = {
  count: 1,
};
function reducer(state: userReducerprops, action: totalProps) {
  switch (action.type) {
    case "incremet":
      if (state.count === 10) return intialState;
      else return { ...state, count: state.count + action.payload };
    case "decrement":
      if (state.count === 0) return intialState;
      return { ...state, count: state.count - action.payload };
    case "reset":
      return intialState;
    default:
      return intialState;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);
  function handleIncrement() {
    dispatch({ type: "incremet", payload: 1 });
  }
  function handleDecrement() {
    dispatch({ type: "decrement", payload: 1 });
  }
  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      {state.count}
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
