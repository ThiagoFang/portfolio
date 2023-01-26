import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: var(--secondary-background);
  min-height: 100vh;
  padding: 6.4rem 1.6rem;
  padding-top: 12rem;
  overflow: hidden;

  ::before,
  ::after {
    content: " ";
    position: absolute;
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
    filter: blur(20rem);
  }

  ::after {
    width: 60rem;
    height: 60rem;
    top: 6rem;
    right: -25rem;
    animation: afterBounce 8s linear infinite;
    animation-delay: 4s;
    filter: blur(20rem);
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

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 30rem);
  margin: auto;
  margin-bottom: 3.2rem;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 30rem);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 30rem);
  }
`;
