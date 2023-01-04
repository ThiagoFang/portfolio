import styled from "styled-components";

export const Box = styled.div<{ img: string }>`
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  height: 30rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const BlurArea = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.2rem);
  width: 100%;
  padding: 2.4rem 1.6rem;
`;

export const Title = styled.h3`
  color: var(--text-color);
  font-size: var(--normal-font-size);
  font-weight: 700;
`;

export const SubTitle = styled.p`
  color: var(--text-light);
  font-size: var(--small-font-size);
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1rem;
`;
