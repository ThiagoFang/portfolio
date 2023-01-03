import { ReactNode } from "react";
import { ConfigProvider } from "../../../../context/ConfigContext";
import { ColorsProvider } from "../../../../context/SettingsContext";

interface IProps {
  children: ReactNode;
}

export const ContextProviders = ({ children }: IProps) => {
  return (
    <ColorsProvider>
      <ConfigProvider>{children}</ConfigProvider>
    </ColorsProvider>
  );
};
