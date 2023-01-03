import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  ::before,
  ::after {
    content: " ";
    position: absolute;
    display: block;
    border-radius: 50%;
    opacity: 0.5;
    background-color: var(--main-color);
    transition: background 0.2s;
  }

  ::before {
    bottom: -20rem;
    left: -20rem;
    width: 35rem;
    height: 35rem;
    animation: beforeBounce 4s linear infinite;
  }

  ::after {
    top: -20rem;
    right: -20rem;
    width: 30rem;
    height: 30rem;
    animation: afterBounce 4s linear infinite;
    animation-delay: 2s;
  }

  @keyframes beforeBounce {
    70% {
      transform: scale(1.2) translate(100px);
    }
  }

  @keyframes afterBounce {
    70% {
      transform: scale(1.2) translate(-100px);
    }
  }
`;

export const Filter = styled.div`
  z-index: 2;
  backdrop-filter: blur(10rem);
  flex: 1;
`;
