import { FilledButton } from "../../components/common/Buttons/FilledButton";
import { NoBGButton } from "../../components/common/Buttons/NoBGButton";
import { DigitalClock } from "../../components/Home/DigitalClock";
import * as C from "./styles";

export const AboutMe = () => {
  return (
    <C.Container>
      <DigitalClock />
      <C.MainContent>
        <C.ImageArea />
        <C.TextArea>
          <C.Title>Quem sou eu?</C.Title>
          <C.Content>
            Meu nome é <span>Thiago Silva</span>, também conhecido como{" "}
            <span>Fang</span>, sou apaixonado por tecnologia desde pequeno, meu
            primeiro contato com programação foi no ensino fundamental onde
            tentei criar a minha própria versão de um jogo que eu jogava muito.
          </C.Content>
          <C.Content>
            Após me formar como designer, tive mais contato com a parte de
            programação e percebi era o que eu realmente amava, é o espaço onde
            posso sempre{" "}
            <span>aprender coisas novas e sentir que faço parte do futuro</span>
            , escolhi atuar no Front-End pois mistura programação com design,
            procuro me desenvolver todos os dias, conhecer novas tecnologias e
            recursos deste âmbito profissional.
          </C.Content>
          <C.ButtonsArea>
            <FilledButton
              icon="ri-download-line"
              isLink
              title="Curriculo"
              to=""
              id="AboutCurriculumBtn"
            />
            <NoBGButton
              icon="ri-arrow-right-s-fill"
              title="Meus Projetos"
              to="/projects"
              id="AboutProjectBtn"
              isLink={false}
            />
          </C.ButtonsArea>
        </C.TextArea>
      </C.MainContent>
    </C.Container>
  );
};
