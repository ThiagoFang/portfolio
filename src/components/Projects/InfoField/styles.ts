import styled from "styled-components";

export const InfoField = styled.div`
  margin-top: 2.4rem;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const InfoIcon = styled.i`
  color: var(--text-color);
`;

export const InfoTitle = styled.h3`
  color: var(--text-color);
  font-weight: 500;
  font-size: var(--h3-font-size);

  @media screen and (max-width: 768px) {
    font-size: var(--normal-font-size);
  }
`;

export const InfoContent = styled.p`
  color: var(--text-light);
  font-size: var(--normal-font-size);

  @media screen and (max-width: 768px) {
    font-size: var(--small-font-size);
  }
`;
