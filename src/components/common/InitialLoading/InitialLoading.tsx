import * as C from "./styles";
import { useEffect, useState } from "react";
import { ConfigActions, useConfig } from "../../../context/ConfigContext";

export const InitialLoading = () => {
  const [visibility, setVisibility] = useState(false);
  const [none, setNone] = useState(false);

  const { state, dispatch } = useConfig();

  const changeVisibility = () => {
    setTimeout(() => {
      setVisibility(true);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setNone(true);
        dispatch({ type: ConfigActions.setInitialLoading, payload: false });
      }, 300);
    }, 1800);
  };

  useEffect(() => {
    if (!state.initialLoading) {
      setVisibility(true);
      setNone(true);
      return;
    }

    changeVisibility();
  }, []);

  return (
    <C.Container
      className={`${visibility ? "notVisible" : ""} ${none ? "none" : ""}`}
    >
      <img src={"/gif/animated_logo.gif"}></img>
    </C.Container>
  );
};
