import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  mainColor: string;
  mainSubColor: string;
  backgroundColor: string;
  secondaryBackground: string;
  textColor: string;
  textLightColor: string;
  textSecondaryColor: string;
};

type Action = {
  type: ColorsActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type ProviderChildren = {
  children: ReactNode;
};

const initialData = {
  mainColor: "#1DE9B6",
  mainSubColor: "#FFF",
  backgroundColor: "#121214",
  secondaryBackground: "#0B0B0C",
  textColor: "#FFF",
  textLightColor: "#BABABA",
  textSecondaryColor: "#121214",
};

//Context
const ColorsContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ColorsActions {
  setMainColor,
  setMainSubColor,
  setBackgroundColor,
  setSecondaryBackground,
  setTextColor,
  setLightColor,
  setTextSecondaryColor,
}

export const colorsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ColorsActions.setMainColor:
      return { ...state, mainColor: action.payload };
    case ColorsActions.setMainSubColor:
      return { ...state, mainSubColor: action.payload };
    case ColorsActions.setBackgroundColor:
      return { ...state, backgroundColor: action.payload };
    case ColorsActions.setSecondaryBackground:
      return { ...state, secondaryBackground: action.payload };
    case ColorsActions.setTextColor:
      return { ...state, textColor: action.payload };
    case ColorsActions.setLightColor:
      return { ...state, textLightColor: action.payload };
    case ColorsActions.setTextSecondaryColor:
      return { ...state, textSecondaryColor: action.payload };
    default:
      return state;
  }
};

// Provider
export const ColorsProvider = ({ children }: ProviderChildren) => {
  const [state, dispatch] = useReducer(colorsReducer, initialData);
  const value = { state, dispatch };

  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
};

// Hook
export const useColors = () => {
  const context = useContext(ColorsContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
