import { createContext, useContext } from "react";
import { Todo } from "../types";

const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "Todo Messages",
      completed: false,
    },
  ],
  addTodo: (todo: string) => {},
  updateTodo: (id: number, todo: Todo) => {},
  deleteTodo: (id: number) => {},
  toggleComplete: (id: number) => {},
});
export const useTodo = () => useContext(TodoContext);
export const Todoprovider = TodoContext.Provider;
