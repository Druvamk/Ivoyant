import { FormEvent, useState } from "react";

interface Todo {
  id: number;
  text: string;
  complete: boolean;
  isEditing: boolean;
}

export default function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text, complete: false, isEditing: false },
      ]);
      setText("");
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
        {todos.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleCheckBox(item.id)}
              title="Mark as complete"
            />
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  value={item.text}
                  title="Mark as complete"
                  onChange={(e) => handleEditChange(item.id, e.target.value)}
                />
                <button type="button" onClick={() => handleEditSubmit(item.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: item.complete ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <button type="button" onClick={() => handleEdit(item.id)}>
                  ✏️
                </button>
              </>
            )}
            <button type="button" onClick={() => handleDelete(item.id)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
