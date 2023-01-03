import { SectionTitle } from "../../components/common/SectionTitle";
import { ProjectBox } from "../../components/Projects/ProjectBox";
import * as C from "./styles";

export const Projects = () => {
  return (
    <C.Container>
      <C.Filter>
        <C.Content>
          <SectionTitle
            normalFont="My"
            grossFont="Projects"
            id="projects"
            subtitle="Meus Projetos"
          />
          <C.ProjectsGrid>
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </C.ProjectsGrid>
        </C.Content>
      </C.Filter>
    </C.Container>
  );
};
