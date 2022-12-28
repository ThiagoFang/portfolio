import { ReactNode } from "react"
import { ColorsProvider } from "../../../context/SettingsContext";

interface IProps {
  children: ReactNode
}

export const ContextProviders = ({ children }: IProps) => {
  return(
    <ColorsProvider>
      {children}
    </ColorsProvider>
  );
};