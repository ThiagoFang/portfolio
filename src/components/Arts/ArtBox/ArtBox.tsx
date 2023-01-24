import { IArt } from "../../../types/IArts";
import { ExpandableButton } from "../../common/Buttons/ExpandableButton";
import * as C from "./styles";

const myInsta = "https://www.instagram.com/thiago_fang/";
interface IProps {
  art: IArt;
}

export const ArtBox = ({ art }: IProps) => {
  return (
    <C.Container url={art.img}>
      <C.InfoArea>
        <C.Title>{art.title}</C.Title>
        <C.ButtonsArea>
          <ExpandableButton
            id="behanceButton"
            icon="ri-behance-fill"
            isLink
            to={art.links.behance}
          />
          <ExpandableButton
            id="instaButton"
            icon="ri-instagram-line"
            isLink
            to={art.links.instagram ? art.links.instagram : myInsta}
          />
        </C.ButtonsArea>
      </C.InfoArea>
    </C.Container>
  );
};
