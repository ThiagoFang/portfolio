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
  text-align: left;
  height: 100%;
  display: none;

  &.textIn {
    display: flex;
    animation: textin 0.5s ease;
  }
  &.textOut {
    display: flex;
    animation: textOut 0.5s linear infinite;
  }

  @keyframes textin {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes textOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

export const Word = styled.div`
  background-color: red;
  height: 100%;
`;

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
