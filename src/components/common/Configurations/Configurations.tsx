import * as C from "./styles";
import { useConfig, ConfigActions } from "../../../context/ConfigContext";

export const Configurations = () => {
  const { state, dispatch } = useConfig();

  return (
    <C.BlackArea>
      <C.Modal>
        <div>Configurations</div>
      </C.Modal>
    </C.BlackArea>
  );
};
