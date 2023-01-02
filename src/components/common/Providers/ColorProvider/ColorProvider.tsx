import { ReactNode, useEffect } from "react";
import * as C from "./styles";
import { ColorsActions, useColors } from "../../../../context/SettingsContext";

interface IChildren {
  children: ReactNode;
}

export const ColorProvider = ({ children }: IChildren) => {
  const { state, dispatch } = useColors();

  return (
    <C.Provider
      props={{
        mainColor: state.mainColor,
        mainSubColor: state.mainSubColor,
        backgroundColor: state.backgroundColor,
        secondaryBackground: state.secondaryBackground,
        textColor: state.textColor,
        textLightColor: state.textLightColor,
        textSecondaryColor: state.textSecondaryColor,
      }}
    >
      {children}
    </C.Provider>
  );
};
