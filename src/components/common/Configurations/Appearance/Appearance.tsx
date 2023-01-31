import { useEffect, useState } from "react";
import { ColorsActions, useColors } from "../../../../context/SettingsContext";
import * as C from "./styles";

export const Appearance = () => {
  const [mainColor, setMainColor] = useState("green");

  const { state, dispatch } = useColors();

  const changeMainColor = () => {
    switch (mainColor) {
      case "green":
        dispatch({ type: ColorsActions.setMainColor, payload: "#1DE9B6" });
        break;
      case "purple":
        console.log("roxo");
        dispatch({ type: ColorsActions.setMainColor, payload: "#CC30FF" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    changeMainColor();
  }, [mainColor]);

  return (
    <C.Container>
      <C.TitleArea>
        <C.Title>Aparencia</C.Title>
        <C.SubTitle>
          Aqui você pode brincar e personalizar um pouco a aparencia do site!
        </C.SubTitle>
      </C.TitleArea>
      <C.Section>
        <C.SectionTitle>Cor Principal</C.SectionTitle>
        <C.SelectArea>
          <C.SelectOption onClick={() => setMainColor("green")}>
            <C.SelectBox className={mainColor === "green" ? "selected" : ""} />
            Verde Água
          </C.SelectOption>

          <C.SelectOption onClick={() => setMainColor("purple")}>
            <C.SelectBox className={mainColor === "purple" ? "selected" : ""} />
            Roxo
          </C.SelectOption>
        </C.SelectArea>
      </C.Section>
    </C.Container>
  );
};
