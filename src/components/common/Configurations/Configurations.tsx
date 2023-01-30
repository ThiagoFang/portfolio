import * as C from "./styles";
import { useConfig, ConfigActions } from "../../../context/ConfigContext";

export const Configurations = () => {
  const { state, dispatch } = useConfig();

  const handleCloseModal = () => {
    dispatch({ type: ConfigActions.setSettings, payload: false });
  };

  return (
    <>
      <C.Modal className={state.settings ? "active" : ""}>
        <C.TitleArea>
          <i className="ri-settings-3-line" />
          Configurações
        </C.TitleArea>
      </C.Modal>
      <C.BlackArea
        className={state.settings ? "active" : ""}
        onClick={handleCloseModal}
      />
    </>
  );
};
