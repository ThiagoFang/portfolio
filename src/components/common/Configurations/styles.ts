import styled from "styled-components";

export const BlackArea = styled.div`
  position: fixed;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
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
  border-radius: 2px;
  z-index: 11;
  color: var(--text-color);
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);

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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
