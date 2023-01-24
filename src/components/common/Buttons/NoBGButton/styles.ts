import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: var(--h3-font-size);
  font-weight: 600;
  cursor: pointer;
  color: var(--main-subcolor);
  background: none;
  border: none;

  .icon {
    font-size: 1.6rem;
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
