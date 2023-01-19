import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
  min-height: 100vh;

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
    animation: beforeBounce 6s ease-in-out infinite;
  }
  ::after {
    right: -30rem;
    top: 0;
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
`;

export const ImageArea = styled.div<{ url: string }>`
  height: 400px;
  width: 350px;
  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: cover;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);
`;

export const InfoArea = styled.div`
  max-width: 400px;
`;

export const Title = styled.h2`
  color: var(--text-color);
  font-size: var(--biggest-font-size);
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
`;
