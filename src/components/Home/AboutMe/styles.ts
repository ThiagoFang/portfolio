import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 6.4rem;
  justify-content: center;
  background-color: var(--background-color);

  @media screen and (max-width: 768px) {
    padding: 6.4rem 3.2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 6.4rem 1.6rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  color: var(--text-color);
  margin: auto;
  max-width: min(60vw, 1024px);
  margin-top: 6.4rem;
  gap: 3.2rem;

  @media screen and (max-width: 1024px) {
    max-width: 85vh;
  }
  @media screen and (max-width: 768px) {
    max-width: 95vh;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-top: 3.2rem;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    text-align: center;
    order: 2;
  }
`;

export const Info = styled.div`
  display: grid;
  gap: 1.6rem;
`;

export const Title = styled.h1`
  font-size: var(--biggest-font-size);
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: var(--h1-font-size);
  }
`;

export const Desc = styled.p`
  font-size: var(--normal-font-size);
  color: var(--text-light);
  max-width: 50rem;
  line-height: 2.1rem;

  span {
    color: var(--main-color);
    font-weight: 600;
  }

  @media screen and (max-height: 768px) {
    line-height: 1.5rem;
    font-size: var(--small-font-size);
    max-width: 40rem;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  gap: 2.4rem;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--secondary-background);
  border: 0.5px solid var(--main-color);
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
`;

export const NumberBox = styled.div`
  padding: 3.2rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1.4rem;
  }
`;

export const NumberTitle = styled.h2`
  font-size: var(--h1-font-size);

  @media screen and (max-width: 1024px) {
    font-size: var(--h2-font-size);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--h3-font-size);
  }
`;

export const NumberDesc = styled.p`
  font-size: var(--small-font-size);

  @media screen and (max-width: 1024px) {
    font-size: var(--smaller-font-size);
  }
`;

export const PhotoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0.4rem;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 425px) {
    order: 1;
    height: 30rem;
  }
`;

export const Photo = styled.img`
  height: 50rem;

  @media screen and (max-height: 768px) {
    height: 45rem;
  }
`;
