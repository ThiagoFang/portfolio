import { useEffect, useState } from "react";
import { LinkButton } from "../../common/Buttons/LinkButton";
import * as C from "./styles";

export const BannerTitle = () => {
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
