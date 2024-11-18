import { FormEvent, useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  complete: boolean;
  isEditing: boolean;
}

export default function App() {
  const [text, setText] = useState<string>(
    () => sessionStorage.getItem("text") || ""
  );
  const [todos, setTodos] = useState<Array<Todo>>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    sessionStorage.setItem("text", text);
  }, [text]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text, complete: false, isEditing: false },
      ]);
      setText("");
      sessionStorage.removeItem("text");
    }
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

  function handleEdit(id: number) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  }

  function handleEditChange(id: number, newText: string) {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  }

  function handleEditSubmit(id: number) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
        <div>
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg"
            >
              <input
                type="checkbox"
                checked={item.complete}
                onChange={() => handleCheckBox(item.id)}
                className="form-checkbox h-5 w-5 text-blue-500"
                title="Mark as complete"
              />
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => handleEditChange(item.id, e.target.value)}
                  placeholder="enter the text//"
                  className="flex-1 ml-2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span
                  className={`flex-1 ml-2 ${
                    item.complete ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.text}
                </span>
              )}
              {item.isEditing ? (
                <button
                  type="button"
                  onClick={() => handleEditSubmit(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded-lg ml-2 hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleEdit(item.id)}
                  className="text-blue-500 px-2 py-1 rounded-lg hover:text-blue-600 transition-colors"
                >
                  ✏️
                </button>
              )}
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="text-red-500 px-2 py-1 rounded-lg hover:text-red-600 transition-colors"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
