import { useCallback, useState } from "react";
import A1 from "./A1";
import A2 from "./A2";
import A3 from "./A3";

export default function App() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(1000);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      {count} | {salary}
      <A1 />
      <A2 incrementSalary={incrementSalary} />
      <A3 incrementCount={incrementCount} />
    </div>
  );
}
