import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12rem;
  min-height: 100vh;

  ::before {
    content: "";
    position: absolute;
    top: -20rem;
    left: -20rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    filter: blur(15rem);
    background-color: var(--main-color);
    opacity: 0.3;
    transform: scale(0.8);
    animation: bounce 12s ease-in-out infinite;
    transition: background-color 1s ease-in-out;
  }

  @keyframes bounce {
    60% {
      scale: 1.5;
    }
  }
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 1024px;
`;
