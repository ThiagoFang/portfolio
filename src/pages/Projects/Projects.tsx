import { SectionTitle } from "../../components/common/SectionTitle";
import { DigitalClock } from "../../components/Home/DigitalClock";
import { ProjectBox } from "../../components/Projects/ProjectBox";
import { IProject, Projects as IProjects } from "../../types/IProjects";
import { projects } from "../../helpers/projects";
import * as C from "./styles";

export const Projects = () => {
  return (
    <C.Container>
      <C.Filter>
        <C.Content>
          <DigitalClock />
          <SectionTitle
            normalFont="My"
            grossFont="Projects"
            id="projects"
            subtitle="Meus Projetos"
          />
          <C.ProjectsGrid>
            {projects.map((project, key) => (
              <ProjectBox
                title={project.title}
                description={project.description}
                shortName={project.shortName}
                image={project.image}
                links={project.links}
                techs={project.techs}
                key={key}
              />
            ))}
          </C.ProjectsGrid>
        </C.Content>
      </C.Filter>
    </C.Container>
  );
};
