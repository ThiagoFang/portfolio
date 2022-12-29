import LoadingGif from "/assets/gif/animated_logo.gif";
import * as C from "./styles";
import { useEffect, useState } from "react";

export const InitialLoading = () => {
  const [visibility, setVisibility] = useState(false);
  const [none, setNone] = useState(false);

  const changeVisibility = () => {
    setTimeout(() => {
      console.log("trocou");
      setVisibility(true);
      setTimeout(() => {
        setNone(true);
      }, 200);
    }, 1800);
  };

  useEffect(() => {
    changeVisibility();
  }, []);

  return (
    <C.Container
      className={`${visibility ? "notVisible" : ""} ${none ? "none" : ""}`}
    >
      <img src={LoadingGif}></img>
    </C.Container>
  );
};
