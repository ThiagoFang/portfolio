import * as C from "./styles";

interface IProps {
  normalFont: string;
  grossFont: string;
  subtitle: string;
  id: string;
}

export const SectionTitle = ({
  normalFont,
  grossFont,
  subtitle,
  id,
}: IProps) => {
  return (
    <C.Container id={id}>
      <C.Title>
        <span>{normalFont}</span> {grossFont}
      </C.Title>
      <C.SubTitle>{subtitle}</C.SubTitle>
    </C.Container>
  );
};
