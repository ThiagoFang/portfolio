import { ReactNode } from "react";
import * as C from "./styles";

interface IProps {
  children: ReactNode;
  title: string;
  error?: any;
  id?: string;
}

export const InputBox = ({ children, title, id, error }: IProps) => {
  return (
    <C.Container id={id}>
      <C.InputTitle className="title">{title}</C.InputTitle>
      {children}
      <C.InputError>{error}</C.InputError>
    </C.Container>
  );
};
