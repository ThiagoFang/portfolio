import { useLocation, useNavigate } from "react-router-dom";
import * as C from "./styles";

interface IProps {
  menu: boolean;
  changeAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ menu, changeAction }: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    changeAction(false);
  };

  return (
    <C.Container className={menu ? "open" : ""}>
      <C.CloseIcon
        onClick={() => changeAction(false)}
        className="ri-close-fill"
      />
      <C.NavArea>
        <C.NavItem
          onClick={() => handleNavigate("/")}
          className={location.pathname === "/" ? "selected" : ""}
        >
          HOME
        </C.NavItem>
        <C.NavItem
          onClick={() => handleNavigate("/about")}
          className={location.pathname === "/about" ? "selected" : ""}
        >
          SOBRE MIM
        </C.NavItem>
        <C.NavItem
          onClick={() => handleNavigate("/projects")}
          className={location.pathname === "/projects" ? "selected" : ""}
        >
          PROJETOS
        </C.NavItem>
        <C.NavItem
          onClick={() => handleNavigate("/art")}
          className={location.pathname === "/art" ? "selected" : ""}
        >
          ART
        </C.NavItem>
        <C.NavItem
          onClick={() => handleNavigate("/contact")}
          className={location.pathname === "/contact" ? "selected" : ""}
        >
          CONTATO
        </C.NavItem>
      </C.NavArea>
    </C.Container>
  );
};
