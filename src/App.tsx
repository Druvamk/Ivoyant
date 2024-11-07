import { ChangeEvent, useState, useTransition } from "react";

const items = ["druva", "Sanju", "Chaitu", "Darshan", "Chitra", "Cheta"];

export default function App() {
  const [data, setData] = useState(items);
  const [textInput, setTextInput] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTextInput(inputValue);

    startTransition(() => {
      const filteredData = items.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setData(filteredData);
    });
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <input
        type="text"
        value={textInput}
        onChange={handleChange}
        placeholder="enter the text"
      />
      {data.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}
