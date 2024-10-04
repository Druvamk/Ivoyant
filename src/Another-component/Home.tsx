import { useState } from "react";
import About from "./About";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <About counter={counter} setCounter={setCounter} />
    </div>
  );
}
