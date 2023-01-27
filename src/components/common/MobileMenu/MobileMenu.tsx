import * as C from "./styles";

interface IProps {
  menu: boolean;
  changeAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ menu, changeAction }: IProps) => {
  return (
    <C.Container className={menu ? "open" : ""}>
      <C.CloseIcon
        onClick={() => changeAction(false)}
        className="ri-close-fill"
      />
    </C.Container>
  );
};
