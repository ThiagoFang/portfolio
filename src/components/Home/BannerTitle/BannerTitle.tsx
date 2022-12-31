import { useEffect, useState } from "react";
import { LinkButton } from "../../common/LinkButton";
import * as C from "./styles";

export const BannerTitle = () => {
  const [firstWordClass, setFirstWordClass] = useState("");
  const [secondWordClass, setsecondWordClass] = useState("");
  const [thirdWordClass, setthirdWordClass] = useState("");

  const maxWords = 3;
  const textInTimer = 3000;
  const textOuttimer = 2800;

  const clearClasses = () => {
    setFirstWordClass("");
    setsecondWordClass("");
    setthirdWordClass("");
  };

  let counter = 1;
  const changeWordAnimation = () => {
    clearClasses();
    if (counter === 1) {
      setFirstWordClass("textIn");
    }
  };

  useEffect(() => {
    setInterval(changeWordAnimation, textInTimer);
  }, []);

  return (
    <C.Containter>
      <C.TitleBox>
        <C.Name>Thiago Fang</C.Name>
        <i className="ri-arrow-right-s-fill arrow"></i>
        <C.WordsBox>
          <C.WordBox className={firstWordClass}>FrontEnd</C.WordBox>
          <C.WordBox className={secondWordClass}>Designer</C.WordBox>
          <C.WordBox className={thirdWordClass}>UI / UX</C.WordBox>
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
