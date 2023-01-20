import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../helpers/projects";
import { IProject } from "../../types/IProjects";
import { techRedirect } from "../../helpers/techRedirect";
import { InfoField } from "../../components/Projects/InfoField";
import { Buttons } from "../../components/Projects/Buttons";
import { DigitalClock } from "../../components/Home/DigitalClock";

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
      <DigitalClock />
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
            <InfoField
              icon="ri-focus-2-line"
              title="Sobre"
              text={project.description.about}
            />
            <InfoField
              icon="ri-clipboard-line"
              title="Minha Experiência"
              text={project.description.experience}
            />
            <Buttons
              github={project.links.github}
              external={project.links.external}
            />
          </C.InfoArea>
        </C.ProjectContainer>
      )}
    </C.Container>
  );
};
