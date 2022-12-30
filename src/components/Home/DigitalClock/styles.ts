import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  position: absolute;
  left: 3.2rem;
  bottom: 3.2rem;
  font-size: var(--bigger-font);
  font-weight: 500;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  .prevent-select {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
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
