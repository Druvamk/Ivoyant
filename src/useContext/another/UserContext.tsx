import { ReactNode, createContext, useState } from "react";

type userContextProps = {
  children: ReactNode;
};
export type valueProps = {
  name: string;
  email: string;
};
type stateProps = {
  user: valueProps | null;
  setUser: React.Dispatch<React.SetStateAction<valueProps | null>>;
};
export const UserContextProvider = createContext({} as stateProps);

export default function UserContext({ children }: userContextProps) {
  const [user, setUser] = useState<valueProps | null>(null);
  return (
    <div>
      <UserContextProvider.Provider value={{ user, setUser }}>
        {children}
      </UserContextProvider.Provider>
    </div>
  );
}
