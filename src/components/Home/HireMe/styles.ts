import styled from "styled-components";

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
  font-size: var(--biggest-font-size);
  max-width: 30vw;
  text-align: center;
  font-weight: 600;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;
