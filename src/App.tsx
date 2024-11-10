import { FormEvent, useState } from "react";
interface Todo {
  id: number;
  text: string;
  complete: boolean;
}
export default function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text, complete: false }]);
    setText("");
  }
  function handleDelete(id: number) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  function handleCheckBox(id: number) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the text..."
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((item, i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleCheckBox(item.id)}
              placeholder="checkin"
            />
            <span
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
