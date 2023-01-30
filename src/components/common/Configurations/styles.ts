import styled from "styled-components";

export const BlackArea = styled.div`
  position: fixed;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  z-index: 9;

  &.active {
    display: flex;
    animation: appear 0.1s linear;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CloseModal = styled.i`
  color: #fff;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: var(--h2-font-size);
  cursor: pointer;
  z-index: 3;
`;

export const Modal = styled.div`
  position: fixed;
  flex-direction: column;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 40rem;
  background-color: var(--background-color);
  border-radius: 0.8rem;
  z-index: 11;
  color: var(--text-color);
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);
  overflow: hidden;

  &.active {
    display: flex;
    animation: appear 0.1s linear;
  }

  @media screen and (max-width: 1024px) {
    width: 45vw;
  }

  @media screen and (max-width: 768px) {
    width: 60vw;
  }

  @media screen and (max-width: 425px) {
    width: 90vw;
  }
`;

export const TitleArea = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-light);
`;

export const FlexArea = styled.div`
  display: flex;
  flex: 1;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 2.4rem 0;
  background-color: var(--secondary-background);
`;

export const ConfigOption = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-light);
  font-size: var(--normal-font-size);
  cursor: pointer;
  padding: 0.8rem;
  transition: background-color 50ms;

  &:hover,
  &.selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--main-color);
  }

  @media screen and (max-width: 425px) {
    font-size: var(--small-font-size);
  }
`;
