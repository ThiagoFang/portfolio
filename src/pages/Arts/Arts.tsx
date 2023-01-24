import { SectionTitle } from "../../components/common/SectionTitle";
import * as C from "./styles";
import { ConfigActions, useConfig } from "../../context/ConfigContext";
import { useEffect } from "react";
import { ArtBox } from "../../components/Arts/ArtBox";

export const Arts = () => {
  const { state, dispatch } = useConfig();

  useEffect(() => {
    dispatch({ type: ConfigActions.setInitialLoading, payload: false });
  }, []);

  return (
    <C.Container>
      <SectionTitle
        normalFont="my"
        grossFont="ART"
        subtitle="minha arte"
        id="arttitle"
      />
      <C.BoxGrid>
        <ArtBox />
        <ArtBox />
        <ArtBox />
      </C.BoxGrid>
    </C.Container>
  );
};
