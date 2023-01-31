import { SectionTitle } from "../../common/SectionTitle";
import * as C from "./styles";
import { FilledButton } from "../../common/Buttons/FilledButton";
import { NoBGButton } from "../../common/Buttons/NoBGButton";
import { useConfig } from "../../../context/ConfigContext";

const PortugueseDesc = () => {
  return (
    <C.Desc>
      Olá! Meu nome é <span>Thiago Silva</span>, também conhecido como
      <span> Fang</span>, sou apaixonado por técnologia desde pequeno, meu
      primeiro contato com programação foi no ensino fundamental onde tentei
      criar a minha própria versão de um jogo que eu jogava muito.
    </C.Desc>
  );
};

export const EnglishDesc = () => {
  return (
    <C.Desc>
      Hello! My name is <span>Thiago Silva</span>, also known as
      <span> Fang</span>, I have been passionate about technology since I was
      young, my first contact with programming was in elementary school where I
      tried to create my own version of a game I used to play a lot.
    </C.Desc>
  );
};

export const AboutMe = () => {
  const configs = useConfig().state;

  return (
    <C.Container>
      <SectionTitle
        id="about"
        normalFont="About"
        grossFont="Me"
        subtitle="Sobre Mim"
      />
      <C.InfoContainer>
        <C.MainInfo>
          <C.Info>
            <C.Title>
              {configs.language === "pt" ? "Quem eu sou?" : "Who am i?"}
            </C.Title>
            {configs.language === "pt" && <PortugueseDesc />}
            {configs.language === "en" && <EnglishDesc />}
            <C.ButtonsArea>
              <FilledButton
                icon="ri-arrow-drop-right-line"
                title={
                  configs.language === "pt" ? "Meus Projetos" : "My Projects"
                }
                isLink={false}
                to="/projects"
              />
              <NoBGButton
                icon="ri-arrow-right-up-line"
                title={configs.language === "pt" ? "Veja Mais" : "See More"}
                isLink={false}
                to="/about"
              />
            </C.ButtonsArea>
          </C.Info>

          <C.Numbers>
            <C.NumberBox className="number">
              <C.NumberTitle>5+</C.NumberTitle>
              <C.NumberDesc>
                {configs.language === "pt" ? "Tecnologias" : "Technologies"}
              </C.NumberDesc>
            </C.NumberBox>

            <C.NumberBox className="number">
              <C.NumberTitle>20+</C.NumberTitle>
              <C.NumberDesc>
                {configs.language === "pt" ? "Projetos" : "Projects"}
              </C.NumberDesc>
            </C.NumberBox>

            <C.NumberBox className="number">
              <C.NumberTitle>1+</C.NumberTitle>
              <C.NumberDesc>
                {configs.language === "pt" ? "Anos como dev" : "Years as Dev"}
              </C.NumberDesc>
            </C.NumberBox>
          </C.Numbers>
        </C.MainInfo>
        <C.PhotoArea>
          <C.Photo src="/img/small.jpg" />
        </C.PhotoArea>
      </C.InfoContainer>
    </C.Container>
  );
};
