import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
  padding-bottom: 7.8rem;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    opacity: 0.2;
    background-color: var(--main-color);
    filter: blur(10rem);
  }

  ::before {
    content: "";
    left: -30rem;
    animation: beforeBounce 8s ease-in-out infinite;
  }
  ::after {
    right: -30rem;
    top: 0;
    animation: afterBounce 8s ease-in-out infinite;
    animation-delay: 3s;
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

export const ProjectContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  z-index: 1;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ImageArea = styled.div<{ url: string }>`
  position: relative;
  height: 400px;
  width: 350px;
  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: cover;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 300px;
  }

  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 400px;
    width: 350px;
    margin: 0 auto;
    transform: scale(0.7);
    opacity: 0.2;
    filter: blur(8rem);
    background-color: var(--main-color);
    animation: rotate 12s ease-in-out infinite;
  }

  @keyframes rotate {
    60% {
      transform: rotate(360deg);
      transform: scale(1);
    }
  }
`;

export const InfoArea = styled.div`
  max-width: 400px;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  color: var(--text-color);
  font-size: var(--biggest-font-size);

  @media screen and (max-width: 768px) {
    font-size: var(--h1-font-size);
  }
`;

export const TechsArea = styled.div`
  display: flex;
  margin-top: 0.8rem;
  gap: 1.2rem;
`;

export const Tech = styled.img`
  height: 2.25rem;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    height: 1.8rem;
  }
`;
