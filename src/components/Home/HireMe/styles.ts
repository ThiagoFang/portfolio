import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-background);
  height: 30rem;
  gap: 1.6rem;

  @media screen and (max-width: 425px) {
    padding: 1.6rem;
  }
`;

export const Title = styled.h1`
  color: var(--text-color);
  font-size: var(--biggest-font-size);
  max-width: 30vw;
  text-align: center;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    max-width: 50vw;
    font-size: var(--h1-font-size);
  }

  @media screen and (max-width: 425px) {
    max-width: 80vh;
    font-size: var(--h2-font-size);
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;
