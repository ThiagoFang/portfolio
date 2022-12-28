import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  inset: 0;
  height: 10rem;
  z-index: 4;
  background-color: rgba(18, 18, 20, 0.8);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  height: 100%;
  margin: auto;

  .logo {
    width: 6rem;
  }
`;
