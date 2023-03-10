import { useEffect, useState } from "react";
import { useConfig, ConfigActions } from "../../../context/ConfigContext";

import * as C from "./styles";

export const ChooseLang = () => {
  const [status, setStatus] = useState<boolean>(true);

  const { state, dispatch } = useConfig();

  const handleToggleLanguage = (language: "pt" | "en") => {
    dispatch({ type: ConfigActions.setLanguage, payload: language });
    localStorage.setItem("language", language);
  };

  const handleCloseModal = () => {
    window.scrollTo(0, 0);
    setStatus(false);
  };

  useEffect(() => {
    const info = localStorage.getItem("language");
    if (info === "pt" || info === "en") setStatus(false);
  }, []);

  return (
    <C.Container status={status}>
      <C.Content>
        <C.InfoBox>
          <C.Title>
            {state.language === "pt"
              ? "Olá, Primeira vez aqui?"
              : "Hi! First time here?"}
          </C.Title>
          <C.SubTitle>
            {state.language === "pt"
              ? "Escolha o idioma qual deseja ver o meu portfolio"
              : "Choose the language in which you want to see my portfolio"}
          </C.SubTitle>
        </C.InfoBox>
        <C.LanguagesArea>
          <C.LanguageBox
            className={state.language === "pt" ? "selected" : ""}
            onClick={() => handleToggleLanguage("pt")}
          >
            <C.LanguageImg src="/svg/brazil.svg" />
            <C.LanguageName>Português</C.LanguageName>
          </C.LanguageBox>
          <C.LanguageBox
            className={state.language === "en" ? "selected" : ""}
            onClick={() => handleToggleLanguage("en")}
          >
            <C.LanguageImg src="/svg/usa.svg" />
            <C.LanguageName>English</C.LanguageName>
          </C.LanguageBox>
        </C.LanguagesArea>
        <C.Button onClick={handleCloseModal}>
          {state.language === "pt" ? "Continuar" : "Continue"}
          <i className="ri-arrow-right-s-line icon"></i>
        </C.Button>
      </C.Content>
    </C.Container>
  );
};
