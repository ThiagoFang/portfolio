import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../helpers/projects";
import { IProject } from "../../types/IProjects";
import { techRedirect } from "../../helpers/techRedirect";

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
            <C.InfoField>
              <C.TitleArea>
                <C.InfoIcon className="ri-focus-2-line"></C.InfoIcon>
                <C.InfoTitle>Sobre</C.InfoTitle>
              </C.TitleArea>
              <C.InfoContent>
                Um site com temática de Halloween, interativo e com efeito de
                scroll reveal
              </C.InfoContent>
            </C.InfoField>
          </C.InfoArea>
        </C.ProjectContainer>
      )}
    </C.Container>
  );
};
