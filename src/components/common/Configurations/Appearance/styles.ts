import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
  padding: 2.4rem;
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
`;

export const SectionTitle = styled.h3`
  font-size: var(--small-font-size);
  margin-bottom: 0.8rem;
`;

export const SelectArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const SelectBox = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--secondary-background);
  border-radius: 50%;
  border: 1px solid var(--main-color);

  &.selected {
    background-color: var(--main-color);
  }
`;

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;
