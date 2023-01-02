import styled from "styled-components";

interface IProps {
  mainColor: string;
  mainSubColor: string;
  backgroundColor: string;
  secondaryBackground: string;
  textColor: string;
  textLightColor: string;
  textSecondaryColor: string;
}

export const Provider = styled.div<{ props: IProps }>`
  --main-color: ${(p) => p.props.mainColor};
  --main-subcolor: ${(p) => p.props.mainSubColor};
  --background-color: ${(p) => p.props.backgroundColor};
  --secondary-background: ${(p) => p.props.secondaryBackground};
  --text-color: ${(p) => p.props.textColor};
  --text-light: ${(p) => p.props.textLightColor};
  --text-secondary: ${(p) => p.props.textSecondaryColor};

  //Text Size
  --biggest-font-size: 3.2rem;

  --h1-font-size: 2.4rem;
  --h2-font-size: 2rem;
  --h3-size: 1.6rem;

  --normal-font-size: 1.5rem;
  --small-font-size: 1.3rem;
  --smaller-font-size: 1.2rem;
`;
