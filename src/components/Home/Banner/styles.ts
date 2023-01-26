import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--background-color);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
`;

export const ContentArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const PlayPause = styled.i`
  position: absolute;
  background-color: var(--secondary-background);
  border: 0.5px solid var(--main-color);
  border-radius: 0.2rem;
  padding: 0.8rem 1.6rem;
  bottom: 3.2rem;
  right: 3.2rem;
  font-size: var(--bigger-font-size);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: none;

  &.active {
    display: flex;
  }

  @media screen and (max-height: 768px) {
    font-size: var(--normal-font-size);
    padding: 0.4rem 1rem;
  }
`;
