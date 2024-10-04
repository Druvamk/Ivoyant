import { useState } from "react";

function Undo() {
  const plusData = ["-100", "-10", "-1"];
  const minusData = ["+100", "+10", "+1"];
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  function maintainHistory(key, prev, curr) {
    console.log(key, prev, curr);
    const update = {
      action: key,
      prev: prev,
      curr: curr,
    };
    const arry = [...history, update];
    arry.unshift(update);
    setHistory(arry);
    console.log(history);
  }

  function handleButton(num) {
    const val = Number(num);
    maintainHistory(num, counter, val + counter);
    setCounter((count) => count + val);
  }
  function handleUndo() {
    if (history.length) {
      const hisArr = [...history];
      const firstItem = hisArr.shift();
      setHistory(hisArr);
      setCounter(firstItem.prev);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button>Redo</button>
      </div>
      <div>
        {plusData.map((num, i) => (
          <button key={i} onClick={() => handleButton(num)}>
            {num}
          </button>
        ))}
        {counter}
        {minusData.map((num, i) => (
          <button key={i} onClick={() => handleButton(num)}>
            {num}
          </button>
        ))}
      </div>
      <div>
        <h3>history Display</h3>
        {history.map((data) => (
          <div>
            action:{data.action} prev:{data.prev} curr:{data.curr}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Undo;
