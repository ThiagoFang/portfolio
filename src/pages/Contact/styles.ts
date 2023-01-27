import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secondary-background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #contactTitle {
    margin: 0;
    margin-bottom: 6.4rem;
  }
`;

export const Form = styled.form`
  display: grid;
  max-width: 768px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6.4rem;
  row-gap: 3.2rem;

  #contactTextArea,
  #buttonsArea {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
  }
`;

export const BasicInput = styled.input``;

export const TextArea = styled.textarea`
  height: 10rem;
  resize: none;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;
