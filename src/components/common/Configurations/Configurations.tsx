import * as C from "./styles";
import { useConfig, ConfigActions } from "../../../context/ConfigContext";
import { useState } from "react";

export const Configurations = () => {
  const [page, setPage] = useState("appearance");

  const { state, dispatch } = useConfig();

  const handleCloseModal = () => {
    dispatch({ type: ConfigActions.setSettings, payload: false });
  };

  return (
    <>
      <C.Modal className={state.settings ? "active" : ""}>
        <C.FlexArea>
          <C.OptionsList>
            <C.ConfigOption
              onClick={() => setPage("appearance")}
              className={page === "appearance" ? "selected" : ""}
            >
              <i className="ri-palette-fill" />
              Aparencia
            </C.ConfigOption>
            <C.ConfigOption
              onClick={() => setPage("language")}
              className={page === "language" ? "selected" : ""}
            >
              <i className="ri-earth-fill" />
              Linguagem
            </C.ConfigOption>
          </C.OptionsList>
        </C.FlexArea>
      </C.Modal>
      <C.BlackArea
        className={state.settings ? "active" : ""}
        onClick={handleCloseModal}
      />
    </>
  );
};
