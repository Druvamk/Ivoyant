export interface Todo {
  id: number;
  completed: boolean;
  todo: string;
}

export interface TodoContextProps {
  todo: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (id: number, updatedTodo: Todo) => void;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}
