import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import { IProject, Techs } from "../../../types/IProjects";
import * as C from "./styles";

export const ProjectBox = ({
  title,
  description,
  image,
  links,
  shortName,
  techs,
}: IProject) => {
  const techLink = (tech: Techs) => {
    switch (tech) {
      case "css":
        window.open(
          "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          "_blank"
        );
        break;
      case "html":
        window.open(
          "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          "_blank"
        );
        break;
      case "javascript":
        window.open(
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          "_blank"
        );
        break;
      case "node":
        window.open("https://nodejs.org/en/", "_blank");
        break;
      case "react":
        window.open("https://reactjs.org/", "_blank");
        break;
      case "typescript":
        window.open("https://www.typescriptlang.org/", "_blank");
        break;
    }
  };

  return (
    <C.Box img={image}>
      <C.TechsArea>
        {techs.map((tech, key) => (
          <C.Tech
            onClick={() => techLink(tech)}
            key={key}
            src={`/svg_icons/${tech}.svg`}
          />
        ))}
      </C.TechsArea>

      <C.BlurArea>
        <C.Title>{title}</C.Title>
        <C.SubTitle>{description}</C.SubTitle>
        <C.ButtonsArea>
          <ExpandableButton
            to={`/projects/${shortName}`}
            title="Teste"
            icon="ri-more-fill"
            isLink={false}
          />

          {links.external && (
            <ExpandableButton
              to={links.external}
              title="Teste"
              icon="ri-arrow-right-up-line"
              isLink
            />
          )}
        </C.ButtonsArea>
      </C.BlurArea>
    </C.Box>
  );
};
