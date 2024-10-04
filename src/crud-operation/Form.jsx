import { useState } from "react";
import { usePostApiMutation } from "./apiSlice";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [postApi] = usePostApiMutation();
  function handleSubmit(e) {
    if (!formData) return;
    e.preventDefault();
    console.log(formData);
    postApi(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="enter the name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter the username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter the email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
