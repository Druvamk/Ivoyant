import { useEffect, useRef } from "react";

export default function Ref() {
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}
