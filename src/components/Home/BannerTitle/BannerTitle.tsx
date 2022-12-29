import { LinkButton } from "../../common/LinkButton";
import * as C from "./styles";

export const BannerTitle = () => {
  return (
    <C.Containter>
      <C.TitleBox>
        <C.Name>Thiago Fang</C.Name>
        <i className="ri-arrow-right-s-fill arrow"></i>
        <C.WordsBox>
          <C.WordBox>
            <C.Word>Front End</C.Word>
            <C.Word>Designer</C.Word>
            <C.Word>UI / UX</C.Word>
            <C.Word>Front End</C.Word>
          </C.WordBox>
        </C.WordsBox>
      </C.TitleBox>
      <C.SubTitle>Desenvolvimento ágil e eficiente</C.SubTitle>
      <C.ButtonsArea>
        <LinkButton
          title="GitHub"
          icon="ri-github-fill"
          isLink
          to="https://github.com/ThiagoFang"
        />
        <LinkButton
          title="Linkedin"
          icon="ri-linkedin-box-fill"
          isLink
          to="https://www.linkedin.com/in/thiago-lima-46463715a/"
        />
      </C.ButtonsArea>
    </C.Containter>
  );
};
