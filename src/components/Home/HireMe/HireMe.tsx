import { useConfig } from "../../../context/ConfigContext";
import { FilledButton } from "../../common/Buttons/FilledButton";
import { NoBGButton } from "../../common/Buttons/NoBGButton";
import * as C from "./styles";

export const HireMe = () => {
  const configs = useConfig().state;

  return (
    <C.Container>
      <C.Title>
        {configs.language === "pt" && (
          <>Precisando de alguem para desenvolver sua aplicação?</>
        )}
        {configs.language === "en" && (
          <>Need someone to develop your application?</>
        )}
      </C.Title>
      <C.ButtonsArea>
        <FilledButton
          title={configs.language === "pt" ? "Meus Projetos" : "My Projects"}
          isLink={false}
          to="/projects"
          icon="ri-arrow-drop-right-line"
        />
        <NoBGButton
          title={configs.language === "pt" ? "Contato" : "Contact"}
          to="/about"
          icon="ri-arrow-right-up-line"
          isLink={false}
        />
      </C.ButtonsArea>
    </C.Container>
  );
};
