import styled from "styled-components";

export const Background = styled.section`
  flex: 1;
  position: relative;
  width: 100%;
`;

export const SmallCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  background-color: var(--main-color);
  transition: background 0.2s;
  top: -10rem;
  right: -20rem;
  width: 30rem;
  height: 30rem;
  animation: afterBounce 4s linear infinite;
  animation-delay: 2s;
`;

export const TallCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  background-color: var(--main-color);
  transition: background 0.2s;
  bottom: 2rem;
  left: 0rem;
  width: 40rem;
  height: 40rem;
  animation: afterBounce 4s linear infinite;
  animation-delay: 2s;
`;

export const Filter = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10rem);
`;
