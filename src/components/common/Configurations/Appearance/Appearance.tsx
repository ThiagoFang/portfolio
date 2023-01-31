import { useEffect, useRef, useState } from "react";
import { ColorsActions, useColors } from "../../../../context/SettingsContext";
import { useConfig } from "../../../../context/ConfigContext";
import * as C from "./styles";

export const Appearance = () => {
  const [mainColor, setMainColor] = useState("#1DE9B6");

  const { state, dispatch } = useColors();
  const configs = useConfig().state;

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
        <C.Title>{configs.language === "pt" ? "Aparência" : "Style"}</C.Title>
        <C.SubTitle>
          {configs.language === "pt" && (
            <>
              Aqui você pode brincar e personalizar um pouco a aparencia do
              site!
            </>
          )}
          {configs.language === "en" && (
            <>Here you can customize the appearance of the App a bit!</>
          )}
        </C.SubTitle>
      </C.TitleArea>
      <C.Section>
        <C.SectionTitle>
          {configs.language === "pt" ? "Cor Principal" : "Main Color"}
        </C.SectionTitle>
        <C.SelectArea>
          <C.SelectOption onClick={() => setMainColor("#1DE9B6")}>
            <C.SelectBox
              className={mainColor === "#1DE9B6" ? "selected" : ""}
            />
            {configs.language === "pt" ? "Verde Água" : "Aqua Green"}
          </C.SelectOption>

          <C.SelectOption onClick={() => setMainColor("#CC30FF")}>
            <C.SelectBox
              className={mainColor === "#CC30FF" ? "selected" : ""}
            />
            {configs.language === "pt" ? "Roxo" : "Purple"}
          </C.SelectOption>
        </C.SelectArea>
      </C.Section>
      <C.Section>
        <C.SectionTitle>
          {configs.language === "pt" ? "Cor Personalizada" : "Custom Color"}
        </C.SectionTitle>
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
          {configs.language === "pt" ? "Escolha uma cor" : "Choose a color"}
          <C.ShowColor color={mainColor} />
        </C.ChooseColor>
      </C.Section>
    </C.Container>
  );
};
