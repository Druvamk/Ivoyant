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
    <form onSubmit={add} className="flex gap-2 items-center">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter the text..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-150"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-150"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
