import { ConfigActions, useConfig } from "../../../context/ConfigContext";

export const OpenSettingsButton = () => {
  const { state, dispatch } = useConfig();

  const handleOpenModal = () => {
    dispatch({ type: ConfigActions.setSettings, payload: true });
  };

  return <i className="ri-settings-3-line icon" onClick={handleOpenModal} />;
};
