import { useState } from "react";

function FormValidation() {
  const [totalData, setTotalData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleSubmit(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    let newErrors = {};
    if (!totalData.email.trim()) {
      newErrors.errorEmail = "Email is required";
    } else if (!emailRegex.test(totalData.email)) {
      newErrors.errorEmail = "Enter the valid Email";
    } else {
      newErrors.errorEmail = "";
    }
    if (!totalData.name.trim()) {
      newErrors.errorName = "name is required";
    } else {
      newErrors.errorName = "";
    }
    if (!totalData.password.trim()) {
      newErrors.errorPassword = "Password is required";
    } else {
      newErrors.errorPassword = "";
    }
    setErrors(newErrors);
    if (!errors.errorName && !errors.errorEmail && !errors.errorPassword) {
      alert("Form submitted");
      setTotalData({ ...totalData, name: "", email: "", password: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            type="text"
            name="name"
            value={totalData.name}
            onChange={(e) =>
              setTotalData({ ...totalData, name: e.target.value })
            }
          />
          <p>{errors.errorName}</p>
        </div>
        <div>
          Email:
          <input
            type="text"
            name="email"
            value={totalData.email}
            onChange={(e) =>
              setTotalData({ ...totalData, email: e.target.value })
            }
          />
          <p>{errors.errorEmail}</p>
        </div>
        <div>
          Password:
          <input
            type="password"
            name="password"
            value={totalData.password}
            onChange={(e) =>
              setTotalData({ ...totalData, password: e.target.value })
            }
          />
          <p>{errors.errorPassword}</p>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
