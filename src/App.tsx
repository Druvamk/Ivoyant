import { useEffect, useState } from "react";
import { Todoprovider } from "./context/TodoContext";
import { Todo } from "./types";
import { TodoForm, TodoItem } from "./context";

export default function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    setTodo((prev: Todo[]) => [
      {
        id: Date.now(),
        todo,
        completed: false,
      },
      ...prev,
    ]);
  };
  const updateTodo = (id: number, todo: Todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const toggleComplete = (id: number) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos && todos.length > 0) {
      setTodo(JSON.parse(todos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  console.log(todo);
  return (
    <Todoprovider
      value={{ addTodo, deleteTodo, todo, toggleComplete, updateTodo }}
    >
      <div className="mb-4">
        <TodoForm />
      </div>
      <div className="flex flex-wrap gap-y-3">
        {todo.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </Todoprovider>
  );
}
