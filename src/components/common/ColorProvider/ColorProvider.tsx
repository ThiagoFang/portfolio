import { ReactNode, useEffect } from "react";
import * as C from "./styles";
import { ColorsActions, useColors } from "../../../context/SettingsContext";

interface IChildren {
  children: ReactNode;
}

export const ColorProvider = ({ children }: IChildren) => {
  const { state, dispatch } = useColors();

  useEffect(() => {
    console.log(state.mainColor);
  }, []);

  return (
    <C.Provider props={{ MainColor: state.mainColor }}>{children}</C.Provider>
  );
};
