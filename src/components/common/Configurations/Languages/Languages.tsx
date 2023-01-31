import * as C from "./styles";
import { ConfigActions, useConfig } from "../../../../context/ConfigContext";

export const Languages = () => {
  const { state, dispatch } = useConfig();

  const handleChangeLanguade = (language: string) => {
    dispatch({ type: ConfigActions.setLanguage, payload: language });
  };

  return (
    <C.Container>
      <C.TitleArea>
        <C.Title>{state.language === "pt" ? "Linguagem" : "Language"}</C.Title>
        <C.SubTitle>
          {state.language === "pt" && (
            <>Aqui você pode mudar o idioma principal do site</>
          )}
          {state.language === "en" && <>Here you can change the app language</>}
        </C.SubTitle>
      </C.TitleArea>
      <C.Section>
        <C.SelectArea>
          <C.SelectBox
            className={state.language === "pt" ? "selected" : ""}
            onClick={() => handleChangeLanguade("pt")}
          >
            <C.FlagIcon src="/svg/brazil.svg " alt="Bandeira do Brasil" />
            <C.CountryName>
              {state.language === "pt" ? "Português" : "Portuguese"}
            </C.CountryName>
          </C.SelectBox>
          <C.SelectBox
            className={state.language === "en" ? "selected" : ""}
            onClick={() => handleChangeLanguade("en")}
          >
            <C.FlagIcon src="/svg/usa.svg " alt="Bandeira dos Estados unidos" />
            <C.CountryName>
              {state.language === "pt" ? "Inglês" : "English"}
            </C.CountryName>
          </C.SelectBox>
        </C.SelectArea>
      </C.Section>
    </C.Container>
  );
};
