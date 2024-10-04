import { useEffect, useReducer } from "react";
const intialState = {
  isStart: false,
  hours: 0,
  minites: 0,
  seconds: 0,
  timerid: 0,
};
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "setIsStart":
      return {
        ...state,
        isStart: action.payload,
      };
    case "setHours":
      return {
        ...state,
        hours: action.payload,
      };
    case "setminites":
      return { ...state, minites: action.payload };
    case "setSeconds":
      return { ...state, seconds: action.payload };
    case "setTimerid":
      return { ...state, timerid: action.payload };
    default:
      return intialState;
  }
}
function Task2() {
  //   const [isStart, setIsStart] = useState(false);
  //   const [hours, setHours] = useState(0);
  //   const [minites, setminites] = useState(0);
  //   const [seconds, setSeconds] = useState(0);
  //   const [timerid, setTimerid] = useState(0);

  const [state, dispatch] = useReducer(reducer, intialState);
  const { isStart, hours, minites, seconds, timerid } = state;

  function handleStart() {
    // setIsStart(true);
    dispatch({ type: "setIsStart", payload: true });
  }
  function handleReset() {
    // setIsStart(false);
    dispatch({ type: "setIsStart", payload: false });
  }
  function handleChange(e) {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "hours") {
      //   setHours(value);
      dispatch({ type: "setHours", payload: value });
    }
    if (id === "minutes") {
      //   setminites(value);
      dispatch({ type: "setminites", payload: value });
    }
    if (id === "seconds") {
      //   setSeconds(value);
      dispatch({ type: "setSeconds", payload: value });
    }
  }
  function handlePause() {
    clearInterval(timerid);
  }
  function actually(sec, min, hou, timid) {
    if (sec > 0) {
      //   setSeconds((sec) => sec - 1);
      dispatch({ type: "setSeconds", payload: sec - 1 });
    } else if (sec == 0 && min > 0) {
      //   setminites((min) => min - 1);
      //   setSeconds(59);
      dispatch({ type: "setminites", payload: min - 1 });
      dispatch({ type: "setSeconds", payload: 59 });
    } else {
      //   setHours((hou) => hou - 1);
      //   setminites(59);
      //   setSeconds(59);
      dispatch({ type: "setHours", payload: hou - 1 });
      dispatch({ type: "setminites", payload: 59 });
      dispatch({ type: "setSeconds", payload: 59 });
    }
    if (sec === 0 && min === 0 && hou === 0) {
      //   setIsStart(false);
      dispatch({ type: "setIsStart", payload: false });
    }
  }
  useEffect(() => {
    let timid;
    if (isStart) {
      timid = setInterval(() => {
        actually(seconds, minites, hours, timid);
      }, 1000);
      //   setTimerid(timerid);
      dispatch({ type: "setTimerid", payload: timerid });
    }
    return () => {
      clearInterval(timid);
    };
  }, [isStart, hours, minites, seconds]);

  return (
    <div>
      {!isStart && (
        <>
          <div>
            <input
              type="text"
              placeholder="HH"
              id="hours"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Min"
              id="minutes"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Sec"
              id="seconds"
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={handleStart}>Start</button>
          </div>
        </>
      )}
      <>
        {isStart && (
          <>
            <div>
              <input type="text" placeholder="HH" value={hours} />
              <input type="text" placeholder="Min" value={minites} />
              <input type="text" placeholder="Sec" value={seconds} />
            </div>
            <div>
              <button onClick={handlePause}>Pause</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Task2;
