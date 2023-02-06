import styled from "styled-components";

export const Container = styled.div<{ status: boolean }>`
  position: fixed;
  display: ${(p) => (p.status ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: var(--background-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const InfoBox = styled.div``;

export const Title = styled.h1`
  font-size: var(--h1-font-size);
  color: var(--main-color);
`;

export const SubTitle = styled.p`
  font-size: var(--normal-font-size);
  color: var(--text-light);
  margin-top: 0.2rem;
`;

export const LanguagesArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  height: 12rem;
  width: min(30vw, 40rem);

  @media screen and (max-width: 1024px) {
    width: 45vw;
  }
  @media screen and (max-width: 768px) {
    width: 60vw;
  }
  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

export const LanguageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100%;
  background-color: var(--secondary-background);
  border: 1px solid var(--secondary-background);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 50ms;

  &.selected {
    border: 1px solid var(--main-color);
  }
  &.selected p {
    color: var(--main-color);
  }
`;

export const LanguageImg = styled.img`
  width: 3rem;
`;

export const LanguageName = styled.p`
  font-size: var(--small-font-size);
  color: var(--text-color);
  font-weight: 600;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: max-content;
  gap: 0.4rem;
  background-color: var(--main-color);
  color: var(--background-color);
  font-size: var(--h3-font-size);
  font-weight: 700;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;

  .icon {
    font-size: var(--h2-font-size);
    transition: transform 0.1s;
  }

  &:hover {
    .icon {
      transform: translateX(2px);
    }
  }

  @media screen and (max-height: 768px) {
    font-size: var(--small-font-size);
  }
`;
