import { FormEvent, useState } from "react";
import { useTodo } from "./TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState<string>("");
  const { addTodo } = useTodo();
  function add(e: FormEvent) {
    e.preventDefault();
    if (!todo) return;
    console.log(todo);
    addTodo(todo);
    setTodo("");
  }
  return (
    <form onSubmit={add}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter the text..."
        className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
