import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: var(--secondary-background);
  bottom: 3.2rem;
  right: 3.2rem;
  width: 3rem;
  height: 3rem;
  border: 0.5px solid var(--main-color);
  cursor: pointer;
  z-index: 9;
  border-radius: 0.2rem;
  transform: translateY(100px);
  transition: transform 0.2s ease-in-out;

  &.active {
    transform: translateY(0px);
  }
`;

export const ArrowIcon = styled.i`
  color: var(--main-subcolor);
  font-size: var(--h3-font-size);
`;
