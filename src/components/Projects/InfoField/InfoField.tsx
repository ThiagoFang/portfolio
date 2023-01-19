import * as C from "./styles";

interface IProps {
  icon: string;
  title: string;
  text: string;
}

export const InfoField = ({ icon, text, title }: IProps) => {
  return (
    <C.InfoField>
      <C.TitleArea>
        <C.InfoIcon className={icon}></C.InfoIcon>
        <C.InfoTitle>{title}</C.InfoTitle>
      </C.TitleArea>
      <C.InfoContent>{text}</C.InfoContent>
    </C.InfoField>
  );
};
