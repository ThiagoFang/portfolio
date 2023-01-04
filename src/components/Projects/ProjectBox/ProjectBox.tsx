import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import * as C from "./styles";

export const ProjectBox = () => {
  return (
    <C.Box img="/img/teste.png">
      <C.BlurArea>
        <C.Title>Halloween Responsive WebSite</C.Title>
        <C.SubTitle>
          Um site de halloween 100% responsivo e com mobile first
        </C.SubTitle>
        <C.ButtonsArea>
          <ExpandableButton
            to="about"
            title="Teste"
            icon="ri-more-fill"
            isLink={false}
          />

          <ExpandableButton
            to="about"
            title="Teste"
            icon="ri-arrow-right-up-line"
            isLink={false}
          />
        </C.ButtonsArea>
      </C.BlurArea>
    </C.Box>
  );
};
