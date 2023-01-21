import styled from "styled-components";

const imageLink =
  "https://i.postimg.cc/L6Nxtc97/josh-art-highly-detailed-central-composition-studio-photogreaph-796fe0b5-46d8-45b5-a625-a6f0d379825c.png";

const warning = "Imagem gerada por IA";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--secondary-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const MainContent = styled.div`
  display: flex;
  z-index: 1;
  gap: 3.2rem;
`;

export const ImageArea = styled.div`
  position: relative;
  width: 400px;
  height: 520px;
  background-image: url(${imageLink});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);

  ::before {
    content: "${warning}";
    color: var(--text-light);
    opacity: 0.8;
    font-size: var(--smaller-font-size);
    position: absolute;
    top: 6rem;
    left: -7.5rem;
    transform: rotate(90deg);
    scale: -1;
    transform: color 0.1s, opacity 0.1s;
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
    transform: scale(0.8);
    opacity: 0.1;
    filter: blur(10rem);
    background-color: var(--main-color);
    animation: shadow 10s ease-in-out infinite;
    transition: background-color 0.5s;
  }

  @keyframes shadow {
    60% {
      transform: scale(1);
      opacity: 0.3;
    }
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  font-size: var(--biggest-font-size);
  color: var(--text-color);
  transition: color 0.3s;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:hover {
    color: var(--main-color);
  }
`;

export const Content = styled.p`
  font-size: var(--normal-font-size);
  color: var(--text-light);
  max-width: 350px;
  margin-bottom: 0.8rem;

  span {
    color: var(--main-color);
    font-weight: 600;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;

  #AboutCurriculumBtn {
    .icon {
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;
