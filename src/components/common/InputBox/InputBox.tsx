import { ReactNode } from "react";
import * as C from "./styles";

interface IProps {
  children: ReactNode;
  name: string;
  error?: any;
  id?: string;
}

export const InputBox = ({ children, name, id }: IProps) => {
  return (
    <C.Container id={id}>
      <C.InputTitle className="title">{name}</C.InputTitle>
      {children}
    </C.Container>
  );
};
