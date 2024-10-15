import { useGetTodoQuery } from "./features/api/apiSlice";

export default function App() {
  const data = useGetTodoQuery("todo");
  console.log(data);
  return <div></div>;
}
