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
  font-size: var(--h1-size);
  text-transform: uppercase;
`;

export const WordsBox = styled.div`
  overflow: hidden;
  color: var(--main-color);
  font-size: var(--h1-size);
  font-weight: 600;
  min-width: 20rem;
  height: 6rem;
`;

export const WordBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 1.6rem;
  text-align: left;
  animation: rotate 12s linear infinite;
  height: 100%;

  @keyframes rotate {
    0%,
    22% {
      transform: translateY(0);
    }
    27%,
    49% {
      transform: translateY(-7.5rem);
    }
    54%,
    70% {
      transform: translateY(-15rem);
    }
    75%,
    100% {
      transform: translateY(-22.5rem);
    }
  }
`;

export const Word = styled.div``;

export const SubTitle = styled.div`
  color: var(--text-light);
  font-size: var(--h3-size);
`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 4.8rem;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
