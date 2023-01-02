import styled from "styled-components";

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--main-color);
  color: var(--background-color);
  font-size: var(--h3-font-size);
  font-weight: 700;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;

  .icon {
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-height: 768px) {
    font-size: var(--small-font-size);
  }
`;
