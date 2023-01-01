import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-background);
  height: 30rem;
  gap: 1.6rem;
`;

export const Title = styled.h1`
  color: var(--text-color);
  font-size: var(--h2-size);
  max-width: 30vw;
  text-align: center;
  font-weight: 600;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const ProjectsButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--main-color);
  color: var(--background-color);
  font-size: var(--h3-low-size);
  font-weight: 700;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;

  .icon {
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-height: 768px) {
    font-size: var(--bigger-font);
  }
`;

export const AboutButton = styled(Link)`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: var(--h3-low-size);
  font-weight: 600;
  cursor: pointer;
  color: var(--main-subcolor);

  .icon {
    font-size: 1.6rem;
  }

  @media screen and (max-height: 768px) {
    font-size: var(--bigger-font);
  }
`;
