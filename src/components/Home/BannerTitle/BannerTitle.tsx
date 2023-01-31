import { LinkButton } from "../../common/Buttons/LinkButton";
import { useConfig } from "../../../context/ConfigContext";
import * as C from "./styles";

export const BannerTitle = () => {
  const configs = useConfig().state;

  return (
    <C.Containter>
      <C.TitleBox>
        <C.Name>Thiago Fang</C.Name>
        <i className="ri-arrow-right-s-fill arrow"></i>
        <C.WordsBox>
          <C.WordBox>FrontEnd</C.WordBox>
          <C.WordBox>Designer</C.WordBox>
          <C.WordBox>UI / UX</C.WordBox>
          <C.WordBox>FrontEnd</C.WordBox>
        </C.WordsBox>
      </C.TitleBox>
      <C.SubTitle>
        {configs.language === "pt" && <>Desenvolvimento ágil e eficiente</>}
        {configs.language === "en" && <>Agile and efficient development.</>}
      </C.SubTitle>
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
