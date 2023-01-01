import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: max-content;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.2rem;
  margin-bottom: 3.2rem;
  color: var(--main-subcolor);

  ::before {
    content: "";
    bottom: 0;
    position: absolute;
    display: block;
    background-color: var(--main-color);
    height: 1px;
    width: 50%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.4rem;
  font-size: var(--h2-size);
  text-transform: uppercase;
  span {
    font-weight: 300;
  }
`;

export const SubTitle = styled.h2`
  font-size: var(--bigger-font);
  text-transform: uppercase;

  font-weight: 400;
  color: var(--text-light);
  text-align: center;
`;
