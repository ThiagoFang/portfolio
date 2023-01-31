import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  initialLoading: boolean;
  settings: boolean;
  language: string;
};

type Action = {
  type: ConfigActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type ProviderChildren = {
  children: ReactNode;
};

const initialData: State = {
  initialLoading: true,
  settings: false,
  language: "pt",
};

//Context
const ConfigContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ConfigActions {
  setInitialLoading,
  setSettings,
  setLanguage,
}

export const configReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ConfigActions.setInitialLoading:
      return { ...state, initialLoading: action.payload };
    case ConfigActions.setSettings:
      return { ...state, settings: action.payload };
    case ConfigActions.setLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

//Provider
export const ConfigProvider = ({ children }: ProviderChildren) => {
  const [state, dispatch] = useReducer(configReducer, initialData);
  const value = { state, dispatch };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig precisa ser usado dentro do ConfigProvider");
  }
  return context;
};
