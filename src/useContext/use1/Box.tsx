import { useContext } from "react";
import { ThemeContext } from "./UseContext";

export default function Box() {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <p
        style={{
          background: themeContext.primary.main,
          color: themeContext.secondary.text,
        }}
      >
        Hello druva
      </p>
    </div>
  );
}
