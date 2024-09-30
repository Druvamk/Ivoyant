import { ReactNode, createContext } from "react";
import { theme } from "./theme";
type useContextprops = {
  children: ReactNode;
};
export const ThemeContext = createContext(theme);

export default function UseContext({ children }: useContextprops) {
  return (
    <div>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  );
}
