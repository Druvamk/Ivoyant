import { useReducer, ChangeEvent } from "react";
import { ActionType, intialStateProps } from "../type";

function reducer(
  state: intialStateProps,
  action: ActionType
): intialStateProps {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      return state;
  }
}

function DateCounter() {
  const initialState: intialStateProps = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + state.count);

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <input type="number" value={state.count} onChange={defineCount} />
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
