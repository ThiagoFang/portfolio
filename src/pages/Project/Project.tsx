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
          </C.InfoArea>
        </C.ProjectContainer>
      )}
    </C.Container>
  );
};
