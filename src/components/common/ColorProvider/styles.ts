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
  --h1-size: 4.8rem;
  --h1-low-size: 3.2rem;

  --h2-size: 3.2rem;
  --h2-low-size: 2.4rem;

  --h3-size: 2.4rem;
  --h3-size: 1.8rem;

  --bigger-font: 1.6rem;
  --normal-font: 1.2rem;
  --lower-font: 0.8rem;

  @media screen and (max-height: 768px) {
    --h1-size: 3.2rem;
    --h1-low-size: 2.8rem;

    --h2-size: 2.8rem;
    --h2-low-size: 2.2rem;

    --h3-size: 2.2rem;
    --h3-size: 1.6rem;

    --bigger-font: 1.2rem;
    --normal-font: 0.9rem;
  }
`;
