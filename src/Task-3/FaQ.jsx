import { useState } from "react";

function FaQ({ item, index }) {
  console.log(item);
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div onClick={handleClick} key={index}>
      <div>{item.qusetions}</div>
      {show && <div>{item.answer}</div>}
    </div>
  );
}

export default FaQ;
