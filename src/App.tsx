import { FormEvent, useState } from "react";

interface dataProps {
  name: string;
  email: string;
  phoneNumber: string;
}

interface errorProps {
  erremail: string;
  errName: string;
  errPhone: string;
}

export default function App() {
  const [data, setData] = useState<dataProps>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [error, setError] = useState<errorProps>({
    erremail: "",
    errName: "",
    errPhone: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const errors: errorProps = { erremail: "", errName: "", errPhone: "" };

    if (!data.email) {
      errors.erremail = "Please enter the email";
    } else if (!emailRegex.test(data.email)) {
      errors.erremail = "Please enter a valid email";
    }

    if (!data.name) {
      errors.errName = "Please enter the name";
    }

    if (!data.phoneNumber) {
      errors.errPhone = "Please enter the phone number";
    }

    setError(errors);

    if (!errors.erremail && !errors.errName && !errors.errPhone) {
      console.log("Form submitted successfully:", data);
      setData({ name: "", email: "", phoneNumber: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Enter the Name:
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <p>{error.errName}</p>
      </div>
      <div>
        Enter the Email:
        <input
          type="text"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <p>{error.erremail}</p>
      </div>
      <div>
        Enter the Phone Number:
        <input
          type="text"
          value={data.phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
        />
        <p>{error.errPhone}</p>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
