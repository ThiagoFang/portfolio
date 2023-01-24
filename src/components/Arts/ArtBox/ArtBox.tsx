import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import * as C from "./styles";

export const ArtBox = () => {
  return (
    <C.Container>
      <C.InfoArea>
        <C.Title>Reload Gaming - Social media and streaming overlay</C.Title>
        <C.ButtonsArea>
          <ExpandableButton
            id="behanceButton"
            icon="ri-behance-fill"
            isLink
            to=""
          />
          <ExpandableButton
            id="instaButton"
            icon="ri-instagram-line"
            isLink
            to=""
          />
        </C.ButtonsArea>
      </C.InfoArea>
    </C.Container>
  );
};
