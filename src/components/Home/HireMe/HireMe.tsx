import { FilledButton } from "../../common/Buttons/FilledButton";
import { NoBGButton } from "../../common/Buttons/NoBGButton";
import * as C from "./styles";

export const HireMe = () => {
  return (
    <C.Container>
      <C.Title>Precisando de alguem para desenvolver sua aplicação?</C.Title>
      <C.ButtonsArea>
        <FilledButton
          title="Meus Projetos"
          isLink={false}
          to="/projects"
          icon="ri-arrow-drop-right-line"
        />
        <NoBGButton
          title="Contato"
          to="/about"
          icon="ri-arrow-right-up-line"
          isLink={false}
        />
      </C.ButtonsArea>
    </C.Container>
  );
};
