import styled from "styled-components";

interface IProps {
  MainColor: string,
}

export const Provider = styled.div<{props: IProps}>`
  --main-color: ${p => p.props.MainColor};
`;
