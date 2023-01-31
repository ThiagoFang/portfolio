import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.4rem 1.6rem;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
`;

export const SubTitle = styled.p`
  font-size: var(--small-font-size);
  color: var(--text-light);
`;

export const Section = styled.div`
  padding: 0.8rem 0 2.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const SectionTitle = styled.h3`
  font-size: var(--small-font-size);
  margin-bottom: 0.8rem;
`;

export const SelectArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  justify-content: center;
  gap: 1.6rem;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 8rem;
  cursor: pointer;
  background-color: var(--secondary-background);
  border-radius: 0.4rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.7;
  transition: all 100ms;

  ::before {
    content: "";
    position: absolute;
    display: none;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 50%;
    opacity: 0.8;
    width: 0.4rem;
    height: 0.4rem;
    background-color: var(--main-color);
  }

  &.selected,
  :hover {
    opacity: 1;
    border: 1px solid var(--main-color);
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
  }

  &.selected::before {
    display: flex;
  }
`;

export const FlagIcon = styled.img`
  width: 2rem;
  height: 1.5rem;
  margin-bottom: 0.4rem;
`;

export const CountryName = styled.p`
  font-size: var(--small-font-size);
  font-weight: 600;
`;
