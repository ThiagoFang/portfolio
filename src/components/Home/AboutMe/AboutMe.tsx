import { SectionTitle } from "../../common/SectionTitle";
import MyPhoto from "/assets/img/small.jpg";
import * as C from "./styles";
import { FilledButton } from "../../common/Buttons/FilledButton";
import { NoBGButton } from "../../common/Buttons/NoBGButton";

export const AboutMe = () => {
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
            <C.Title>Quem eu sou?</C.Title>
            <C.Desc>
              Olá! Meu nome é <span>Thiago Silva</span>, também conhecido como
              <span> Fang</span>, sou apaixonado por técnologia desde pequeno,
              meu primeiro contato com programação foi no ensino fundamental
              onde tentei criar a minha própria versão de um jogo que eu jogava
              muito.
            </C.Desc>
            <C.ButtonsArea>
              <FilledButton
                icon="ri-arrow-drop-right-line"
                title="Meus Projetos"
                isLink={false}
                to="/projects"
              />
              <NoBGButton
                icon="ri-arrow-right-up-line"
                title="Veja Mais"
                isLink={false}
                to="/about"
              />
            </C.ButtonsArea>
          </C.Info>

          <C.Numbers>
            <C.NumberBox className="number">
              <C.NumberTitle>5+</C.NumberTitle>
              <C.NumberDesc>Tecnologias</C.NumberDesc>
            </C.NumberBox>

            <C.NumberBox className="number">
              <C.NumberTitle>20+</C.NumberTitle>
              <C.NumberDesc>Projetos</C.NumberDesc>
            </C.NumberBox>

            <C.NumberBox className="number">
              <C.NumberTitle>1+</C.NumberTitle>
              <C.NumberDesc>Anos como dev</C.NumberDesc>
            </C.NumberBox>
          </C.Numbers>
        </C.MainInfo>
        <C.PhotoArea>
          <C.Photo src={MyPhoto} />
        </C.PhotoArea>
      </C.InfoContainer>
    </C.Container>
  );
};
