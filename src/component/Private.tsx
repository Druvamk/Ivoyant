import { ComponentType } from "react";
import Login from "./Login";
import { profileProps } from "./Profile";
type privateProps = {
  isLogged: boolean;
  Component: ComponentType<profileProps>;
};

export default function Private({ isLogged, Component }: privateProps) {
  if (isLogged) {
    return <Component name="Druva" />;
  } else {
    return <Login />;
  }
}
