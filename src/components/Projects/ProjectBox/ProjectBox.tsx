import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import { IProject } from "../../../types/IProjects";
import * as C from "./styles";
import { techRedirect } from "../../../helpers/techRedirect";
import { useConfig } from "../../../context/ConfigContext";

export const ProjectBox = ({
  title,
  description,
  image,
  links,
  shortName,
  techs,
}: IProject) => {
  const { state } = useConfig();

  return (
    <C.Box img={image}>
      <C.TechsArea>
        {techs.map((tech, key) => (
          <C.Tech
            onClick={() => techRedirect(tech)}
            key={key}
            src={`/svg_icons/${tech}.svg`}
          />
        ))}
      </C.TechsArea>

      <C.BlurArea>
        <C.Title>{title}</C.Title>
        <C.SubTitle>
          {state.language === "pt"
            ? description.pt.short
            : description.en.short}
        </C.SubTitle>
        <C.ButtonsArea>
          <ExpandableButton
            to={`/projects/${shortName}`}
            icon="ri-more-fill"
            isLink={false}
          />

          {links.external && (
            <ExpandableButton
              to={links.external}
              icon="ri-arrow-right-up-line"
              isLink
            />
          )}
        </C.ButtonsArea>
      </C.BlurArea>
    </C.Box>
  );
};
