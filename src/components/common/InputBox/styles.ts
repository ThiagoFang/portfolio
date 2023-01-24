import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  input,
  textarea {
    background-color: var(--background-color);
    border: 1px solid var(--background-color);
    padding: 0.8rem 1.6rem;
    font-size: var(--normal-font-size);
    color: var(--text-light);
    outline: none;

    :focus {
      border-bottom: 1px solid var(--main-color);
      color: var(--text-color);
    }

    &.error {
      border: 1px solid #ff0033;
    }
  }

  &:focus-within .title {
    color: var(--text-color);
  }
`;

export const InputTitle = styled.p`
  font-size: var(--normal-font-size);
  color: var(--text-light);
`;
