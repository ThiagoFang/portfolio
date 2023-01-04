import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background-color: var(--secondary-background);

  ::before,
  ::after {
    content: " ";
    position: absolute;
    z-index: 0;
    display: flex;
    opacity: 0.1;
    background-color: var(--main-color);
    border-radius: 50%;
  }

  ::before {
    width: 50rem;
    height: 50rem;
    bottom: 6rem;
    left: -30rem;
    animation: beforeBounce 8s linear infinite;
  }

  ::after {
    width: 35rem;
    height: 35rem;
    top: 6rem;
    z-index: -1;
    right: -25rem;
    animation: afterBounce 8s linear infinite;
    animation-delay: 4s;
  }

  @keyframes beforeBounce {
    60% {
      transform: scale(1.3) translate(50px);
    }
  }

  @keyframes afterBounce {
    60% {
      transform: scale(1.3) translate(-50px);
    }
  }
`;

export const Filter = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 12rem;
  height: 100%;
  backdrop-filter: blur(10rem);
  z-index: 5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 3.2rem;
  z-index: 1;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 30rem);
`;
