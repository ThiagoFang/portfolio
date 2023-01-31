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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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

export const ColorInput = styled.input`
  width: 1px;
  height: 1px;
  margin-top: 1.2rem;
  opacity: 0;
`;

export const ChooseColor = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--normal-font-size);
`;

export const ShowColor = styled.div<{ color: string }>`
  width: 3rem;
  height: 2rem;
  border-radius: 0.2rem;
  margin-left: 0.8rem;
  background-color: ${(p) => p.color};
`;
