import styled from "styled-components";

interface IProps {
  mainColor: string,
  mainSubColor: string,
  backgroundColor: string,
  secondaryBackground: string,
  textColor: string,
  textLightColor: string,
  textSecondaryColor: string,
}

export const Provider = styled.div<{props: IProps}>`
  --main-color: ${p => p.props.mainColor};
  --main-subcolor: ${p => p.props.mainSubColor};
  --background-color: ${p => p.props.backgroundColor};
  --secondary-background: ${p => p.props.secondaryBackground};
  --text-color: ${p => p.props.textColor};
  --text-light: ${p => p.props.textLightColor};
  --text-secondary: ${p => p.props.textSecondaryColor};
`;
