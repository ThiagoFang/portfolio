import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.section`
  position: relative;
  padding: 6.4rem;
  justify-content: center;
  background-color: var(--background-color);
`;

export const InfoContainer = styled.div`
  display: flex;
  color: var(--text-color);
  margin: auto;
  max-width: 1024px;
  margin-top: 6.4rem;
  gap: 3.2rem;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  width: 60%;
`;

export const Info = styled.div`
  display: grid;
  gap: 1.6rem;
`;

export const Title = styled.h1`
  font-size: var(--h2-size);
  font-weight: 600;
`;

export const Desc = styled.p`
  font-size: var(--bigger-font);
  color: var(--text-light);
  max-width: 50rem;
  line-height: 2.1rem;
  letter-spacing: 0.1rem;

  span {
    color: var(--main-color);
    font-weight: 600;
  }

  @media screen and (max-height: 768px) {
    line-height: 1.5rem;
    max-width: 40rem;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  gap: 2.4rem;
`;

export const ProjectsButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--main-color);
  color: var(--background-color);
  font-size: var(--h3-size);
  font-weight: 700;
  padding: 0.8rem 1.6rem;
  border-radius: 0.2rem;
  cursor: pointer;

  .icon {
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const AboutButton = styled(Link)`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: var(--h3-size);
  font-weight: 600;
  cursor: pointer;
  color: var(--main-subcolor);

  .icon {
    font-size: 1.6rem;
  }
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--secondary-background);
  border: 0.5px solid var(--main-color);
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const NumberBox = styled.div`
  padding: 3.2rem;
  text-align: center;
`;

export const NumberTitle = styled.h2`
  font-size: var(--h2-size);
`;

export const NumberDesc = styled.p`
  font-size: var(--bigger-font);
`;

export const PhotoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  border-radius: 0.4rem;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const Photo = styled.img`
  height: 50rem;

  @media screen and (max-height: 768px) {
    height: 45rem;
  }
`;
