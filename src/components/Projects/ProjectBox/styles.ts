import styled from "styled-components";

export const Box = styled.div<{ img: string }>`
  position: relative;
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  height: 35rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const TechsArea = styled.div`
  display: flex;
  position: absolute;
  height: max-content;
  width: max-content;
  gap: 0.8rem;
  top: 0.8rem;
  right: 0.8rem;
  padding: 0.6rem 0.8rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5rem);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

export const Tech = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  opacity: 0.5;
  transition: transform 0.1s;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

export const BlurArea = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1.2rem);
  width: 100%;
  padding: 2.4rem 1.6rem;
`;

export const Title = styled.h3`
  color: var(--text-color);
  font-size: var(--normal-font-size);
  font-weight: 700;
  height: 2rem;
  overflow: hidden;
`;

export const SubTitle = styled.p`
  color: var(--text-light);
  font-size: var(--smaller-font-size);
  height: 3.2rem;
  overflow: hidden;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1rem;
`;
