import styled from "styled-components";
import { useConfig } from "../../../context/ConfigContext";
import { FilledButton } from "../../common/Buttons/FilledButton";
import { NoBGButton } from "../../common/Buttons/NoBGButton";

const ButtonsArea = styled.div`
  display: flex;
  margin-top: 3.2rem;
  gap: 1.6rem;

  #githubProjectDetail {
    .icon {
      font-size: 2rem;
      font-weight: normal;
    }
  }
  #externalProjectDetail {
    .icon {
      font-size: 2rem;
    }
  }
  #githubFillProjectDetail {
    .icon {
      font-size: 2rem;
      font-weight: normal;
    }
  }
`;

interface IProps {
  github: string;
  external?: string;
}

export const Buttons = ({ github, external }: IProps) => {
  const { state } = useConfig();

  return (
    <ButtonsArea>
      {external && github && (
        <FilledButton
          icon="ri-arrow-right-up-line"
          isLink
          title={state.language === "pt" ? "Acessar" : "Access"}
          to={external}
          id="externalProjectDetail"
        />
      )}
      {github && external && (
        <NoBGButton
          icon="ri-github-fill"
          title="GitHub"
          to={github}
          isLink
          id="githubProjectDetail"
        />
      )}
      {!external && github && (
        <FilledButton
          icon="ri-github-fill"
          title="GitHub"
          to={github}
          isLink
          id="githubFillProjectDetail"
        />
      )}
    </ButtonsArea>
  );
};
