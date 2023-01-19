import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../helpers/projects";
import { IProject } from "../../types/IProjects";
import { techRedirect } from "../../helpers/techRedirect";
import { InfoField } from "../../components/Projects/InfoField";
import { FilledButton } from "../../components/common/Buttons/FilledButton";
import { NoBGButton } from "../../components/common/Buttons/NoBGButton";

export const Project = () => {
  const [project, setProject] = useState<IProject>();

  const params = useParams();

  useEffect(() => {
    for (let i in projects) {
      if (projects[i].shortName === params.project) {
        setProject(projects[i]);
      }
    }
  }, []);

  return (
    <C.Container>
      {project && (
        <C.ProjectContainer>
          <C.ImageArea url={project.image} />
          <C.InfoArea>
            <C.Title>{project.title}</C.Title>
            <C.TechsArea>
              {project.techs.map((tech, index) => (
                <C.Tech
                  onClick={() => techRedirect(tech)}
                  key={index}
                  src={`/svg_icons/${tech}.svg`}
                />
              ))}
            </C.TechsArea>
            <InfoField icon="ri-focus-2-line" title="Sobre" text="teste" />
            <InfoField
              icon="ri-clipboard-line"
              title="Minha Experiência"
              text="Teste"
            />
            <C.ButtonsArea>
              {project.links.external && (
                <FilledButton
                  icon="ri-arrow-right-up-line"
                  isLink
                  title="Acessar"
                  to={project.links.external}
                />
              )}
              {project.links.github && (
                <NoBGButton
                  icon="ri-github-fill"
                  title="GitHub"
                  to={project.links.github}
                  isLink
                />
              )}
            </C.ButtonsArea>
          </C.InfoArea>
        </C.ProjectContainer>
      )}
    </C.Container>
  );
};
