import * as C from "./styles";
import { useConfig, ConfigActions } from "../../../context/ConfigContext";
import { useEffect, useState } from "react";
import { Appearance } from "./Appearance";
import { Languages } from "./Languages";

export const Configurations = () => {
  const [page, setPage] = useState("appearance");

  const { state, dispatch } = useConfig();

  const handleCloseModal = () => {
    dispatch({ type: ConfigActions.setSettings, payload: false });
  };

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (state.initialLoading && e.key === "Escape") {
        handleCloseModal();
      }
    });
  }, []);

  return (
    <>
      <C.Modal className={state.settings ? "active" : ""}>
        <C.CloseModal className="ri-close-fill" onClick={handleCloseModal} />
        <C.FlexArea>
          <C.OptionsList>
            <C.ConfigOption
              onClick={() => setPage("appearance")}
              className={page === "appearance" ? "selected" : ""}
            >
              <i className="ri-palette-fill" />
              {state.language === "pt" ? "AparĂȘncia" : "Appearance"}
            </C.ConfigOption>
            <C.ConfigOption
              onClick={() => setPage("language")}
              className={page === "language" ? "selected" : ""}
            >
              <i className="ri-earth-fill" />
              {state.language === "pt" ? "Idioma" : "Language"}
            </C.ConfigOption>
          </C.OptionsList>

          {page === "appearance" && <Appearance />}
          {page === "language" && <Languages />}
        </C.FlexArea>
      </C.Modal>
      <C.BlackArea
        className={state.settings ? "active" : ""}
        onClick={handleCloseModal}
      />
    </>
  );
};
