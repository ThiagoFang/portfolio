import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  position: absolute;
  left: 3.2rem;
  bottom: 3.2rem;
  font-weight: 500;
`;

export const Hour = styled.div`
  &:hover {
    color: var(--main-color);
  }
`;

export const Minutes = styled.div`
  &:hover {
    color: var(--main-color);
  }
`;

export const Seconds = styled.div`
  &:hover {
    color: var(--main-color);
  }
`;
