import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  mainColor: string,
}

type Action = {
  type: ColorsActions,
  payload: any,
}

type ContextType = {
  state: State,
  dispatch: (action: Action) => void,
};

type ProviderChildren = {
  children: ReactNode;
}

const initialData = {
  mainColor: '#1DE9B6'
}

//Context
const ColorsContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ColorsActions {
  setMainColor,
}

export const colorsReducer = (state: State, action: Action) => {
  switch (action.type) {
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
