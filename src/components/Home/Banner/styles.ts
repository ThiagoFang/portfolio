import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--secondary-background);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .4;
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
  color: #FFF;
`;