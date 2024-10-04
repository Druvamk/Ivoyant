import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [passStrength, setPassStrength] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
    handleStrength(password);
  }
  function handleStrength(pas) {
    if (pas.length < 7) {
      setPassStrength("weak");
    } else if (pas.length >= 7 && pas.length <= 12) {
      setPassStrength("medium");
    } else {
      setPassStrength("strong");
    }
  }
  return (
    <div>
      <div>
        <input type="text" value={password} onChange={handleChange} />
        {passStrength === "weak" && <p>The password is too weak</p>}
        {passStrength === "medium" && <p>The password okay😒</p>}
        {passStrength === "strong" && <p>The password strong😉</p>}
      </div>
    </div>
  );
}

export default Password;
