import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.8rem;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .arrow {
    font-size: 3.2rem;
    color: var(--main-color);
  }
`;

export const Name = styled.h1`
  font-size: var(--biggest-font-size);
  text-transform: uppercase;
`;

export const WordsBox = styled.div`
  color: var(--main-color);
  font-size: var(--biggest-font-size);
  overflow: hidden;
  font-weight: 600;
  min-width: 20rem;
  height: 6rem;
`;

export const WordBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  height: 100%;
  display: flex;
  animation: spinWords 6s ease infinite;

  @keyframes spinWords {
    0%,
    15% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-112%);
    }
    35% {
      transform: translateY(-100%);
    }
    40% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(-212%);
    }
    60% {
      transform: translateY(-200%);
    }
    65% {
      transform: translateY(-200%);
    }
    75% {
      transform: translateY(-312%);
    }
    85% {
      transform: translateY(-300%);
    }
    100% {
      transform: translateY(-300%);
    }
  }
`;

export const Word = styled.div`
  background-color: red;
  height: 100%;
`;

export const SubTitle = styled.div`
  color: var(--text-light);
  font-size: var(--h3-font-size);
`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 4.8rem;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
