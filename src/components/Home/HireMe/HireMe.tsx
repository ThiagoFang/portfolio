import * as C from "./styles";

export const HireMe = () => {
  return (
    <C.Container>
      <C.Title>Precisando de alguem para desenvolver sua aplicação?</C.Title>
      <C.ButtonsArea>
        <C.ProjectsButton to="/projects">
          Meus Projetos
          <i className="ri-arrow-drop-right-line icon"></i>
        </C.ProjectsButton>
        <C.AboutButton to="/about">
          Contato
          <i className="ri-arrow-right-up-line icon"></i>
        </C.AboutButton>
      </C.ButtonsArea>
    </C.Container>
  );
};
