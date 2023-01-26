import { SectionTitle } from "../../components/common/SectionTitle";
import * as C from "./styles";
import { ConfigActions, useConfig } from "../../context/ConfigContext";
import { useEffect } from "react";
import { ArtBox } from "../../components/Arts/ArtBox";
import { arts } from "../../helpers/arts";
import { DigitalClock } from "../../components/Home/DigitalClock";

export const Arts = () => {
  const { state, dispatch } = useConfig();

  useEffect(() => {
    dispatch({ type: ConfigActions.setInitialLoading, payload: false });
  }, []);

  return (
    <C.Container>
      <DigitalClock />
      <SectionTitle
        normalFont="my"
        grossFont="ART"
        subtitle="minha arte"
        id="arttitle"
      />
      <C.BoxGrid>
        {arts.map((item, key) => (
          <ArtBox art={item} key={key} />
        ))}
      </C.BoxGrid>
    </C.Container>
  );
};
