import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.6rem;
  background-color: var(--secondary-background);
  border: 1px solid var(--secondary-background);
  gap: 0.4rem;
  margin-top: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: border 0.01s ease-in-out;

  .icon {
    color: var(--main-color);
    font-size: var(--normal-font-size);
  }

  &:hover {
    border: 1px solid var(--main-color);
  }

  @media screen and (max-height: 768px) {
    font-size: var(--small-font-size);
  }
`;
