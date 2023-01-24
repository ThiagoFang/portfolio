import styled from "styled-components";

const imglink = "https://i.postimg.cc/T3pzRG31/reload.jpg";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 30rem;
  height: 45rem;
  background-color: var(--background-color);
  background-image: url(${imglink});
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const InfoArea = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  width: 100%;
  padding: 2rem 1.6rem;
`;

export const Title = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  height: 4.2rem;
  overflow: hidden;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 0.8rem;

  #behanceButton,
  #instaButton {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    .icon {
      font-size: var(--h3-font-size);
    }
  }
`;
