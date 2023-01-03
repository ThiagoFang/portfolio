import { ReactNode } from "react";
import * as C from "./styles";

interface IProps {
  children: ReactNode;
}

export const AnimatedGradient = ({ children }: IProps) => {
  return (
    <C.Background>
      <C.SmallCircle />
      <C.TallCircle />
      <C.Filter>{children}</C.Filter>
    </C.Background>
  );
};
