import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import { IProject } from "../../../types/IProjects";
import * as C from "./styles";

export const ProjectBox = ({
  title,
  description,
  image,
  links,
  shortName,
  techs,
}: IProject) => {
  return (
    <C.Box img={image}>
      <C.TechsArea>
        {techs.map((tech, key) => (
          <C.Tech key={key} src={`/svg_icons/${tech}.svg`} />
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
