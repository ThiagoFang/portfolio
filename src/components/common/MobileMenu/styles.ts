import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary-background);
  z-index: 9999999;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--main-color);
  font-size: var(--h1-font-size);
  cursor: pointer;
`;
