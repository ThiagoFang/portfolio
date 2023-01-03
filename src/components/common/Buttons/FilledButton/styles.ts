import styled from "styled-components";

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  position: relative;
  gap: 0.4rem;
  background-color: var(--main-color);
  color: var(--background-color);
  font-size: var(--h3-font-size);
  font-weight: 700;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;

  .icon {
    font-size: var(--h1-font-size);
    transition: transform 0.1s, scale 0.1s;
  }

  &:hover {
    .icon {
      transform: translateX(2px);
      scale: 1.1;
    }
  }

  @media screen and (max-height: 768px) {
    font-size: var(--small-font-size);
  }
`;
