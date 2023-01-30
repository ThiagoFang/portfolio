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
`;
