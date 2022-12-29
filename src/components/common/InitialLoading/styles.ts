import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #030303;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.1s;

  &.notVisible {
    opacity: 0;
  }
  &.none {
    display: none;
  }

  img {
    width: 30rem;
  }
`;
