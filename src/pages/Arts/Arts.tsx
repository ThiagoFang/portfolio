import { SectionTitle } from "../../components/common/SectionTitle";
import * as C from "./styles";

export const Arts = () => {
  return (
    <C.Container>
      <SectionTitle
        normalFont="my"
        grossFont="ART"
        subtitle="minha arte"
        id="arttitle"
      />
      <div>ART</div>
    </C.Container>
  );
};
