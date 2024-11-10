import { useState } from "react";
import { useTodo } from "./TodoContext";
import { Todo } from "../types";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [todoEditable, setTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleComplete, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border rounded-lg px-3 py-2 gap-3 shadow-sm duration-300 transition-colors ${
        todo.completed
          ? "bg-green-100 text-gray-600"
          : "bg-purple-100 text-gray-800"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
        placeholder="Enter the edit text"
      />
      <input
        type="text"
        className={`flex-1 px-2 py-1 rounded-lg border outline-none transition-all duration-150 ${
          todoEditable
            ? "border-gray-300 bg-white"
            : "border-transparent bg-transparent"
        }`}
        value={todoMsg}
        readOnly={!todoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        placeholder="Enter the edit text"
      />
      <button
        type="button"
        className="w-8 h-8 rounded-lg text-xs flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors duration-150"
        onClick={() => {
          if (todo.completed) return;
          if (todoEditable) {
            editTodo();
          } else {
            setTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {todoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="w-8 h-8 rounded-lg text-xs flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}
