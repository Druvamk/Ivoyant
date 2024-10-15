import { FormEvent, useState } from "react";
import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  usePatchTodosMutation,
  usePostTodosMutation,
} from "./apiSlice";

export default function App() {
  const [postdata] = usePostTodosMutation();
  const [patchTodos] = usePatchTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();
  const [dataTodo, setDataTodo] = useState<string>("");
  const { data, isLoading } = useGetTodosQuery();
  if (isLoading) return <div>Loading...</div>;
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!dataTodo) return;
    console.log(dataTodo);
    postdata({ text: dataTodo, completed: false });
    setDataTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={dataTodo}
            onChange={(e) => setDataTodo(e.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      {data?.map((todo: any) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => patchTodos({ ...todo, completed: !todo.completed })}
          />
          <label
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
            <button onClick={() => deleteTodos({ id: todo.id })}>Delete</button>
          </label>
        </div>
      ))}
    </>
  );
}
