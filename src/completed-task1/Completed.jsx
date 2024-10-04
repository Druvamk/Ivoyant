import { useState } from "react";

function Completed() {
  const items = [
    {
      item: "item-1",
      completed: false,
    },
    {
      item: "item-2",
      completed: false,
    },
    {
      item: "item-3",
      completed: false,
    },
  ];
  const [fullItems, setFullItems] = useState(items);
  function handleChange(index) {
    setFullItems(
      fullItems.map((item, i) =>
        index === i ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div>
      <ul>
        {fullItems.map((data, index) => (
          <>
            <input
              type="checkbox"
              checked={data.completed}
              onChange={() => handleChange(index)}
            />
            <li>
              <span
                style={{
                  textDecoration: data.completed ? "line-through" : "none",
                }}
              >
                {data.item}
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
