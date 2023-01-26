import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  position: absolute;
  left: 3.2rem;
  bottom: 3.2rem;
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: 500;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  .prevent-select {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  @media screen and (max-width: 425px) {
    font-size: var(--small-font-size);
  }
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
