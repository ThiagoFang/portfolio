import { useEffect, useRef, useState } from "react";
import { ColorsActions, useColors } from "../../../../context/SettingsContext";
import * as C from "./styles";

export const Appearance = () => {
  const [mainColor, setMainColor] = useState("#1DE9B6");

  const { state, dispatch } = useColors();

  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  useEffect(() => {
    dispatch({ type: ColorsActions.setMainColor, payload: mainColor });
  }, [mainColor]);

  useEffect(() => {
    setMainColor(state.mainColor);
  }, []);

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
          <C.SelectOption onClick={() => setMainColor("#1DE9B6")}>
            <C.SelectBox
              className={mainColor === "#1DE9B6" ? "selected" : ""}
            />
            Verde Água
          </C.SelectOption>

          <C.SelectOption onClick={() => setMainColor("#CC30FF")}>
            <C.SelectBox
              className={mainColor === "#CC30FF" ? "selected" : ""}
            />
            Roxo
          </C.SelectOption>
        </C.SelectArea>
      </C.Section>
      <C.Section>
        <C.SectionTitle>Cor Personalizada</C.SectionTitle>
        <C.ChooseColor
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <C.ColorInput
            ref={inputRef}
            type="color"
            onChange={(e) => setMainColor(e.target.value)}
          />
          Escolha uma cor
          <C.ShowColor color={mainColor} />
        </C.ChooseColor>
      </C.Section>
    </C.Container>
  );
};
