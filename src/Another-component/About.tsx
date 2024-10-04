import { Dispatch, SetStateAction } from "react";

type aboutProps = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

export default function About({ counter, setCounter }: aboutProps) {
  function handleIncrement(): void {
    setCounter(() => counter + 1);
  }
  function handleDEcrement(): void {
    setCounter(() => counter - 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      {counter}
      <button onClick={handleDEcrement}>-</button>
    </div>
  );
}
