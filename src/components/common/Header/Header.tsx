import { Link, useLocation, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { ColorsActions, useColors } from "../../../context/SettingsContext";

export const Header = () => {
  const { state, dispatch } = useColors();

  const location = useLocation();
  const navigate = useNavigate();

  const changeMainColor = () => {
    if (state.mainColor === "#1DE9B6") {
      dispatch({ type: ColorsActions.setMainColor, payload: "#CC30FF" });
      return;
    }
    dispatch({ type: ColorsActions.setMainColor, payload: "#1DE9B6" });
  };

  return (
    <C.Header>
      <C.Container>
        <C.NavArea>
          <Link className="logo" to="/">
            <img src="/assets/svg/logo.svg" />
          </Link>
          <C.NavMenu>
            <C.NavItem
              className={location.pathname === "/" ? "selected" : ""}
              onClick={() => navigate("/")}
            >
              Home
            </C.NavItem>
            <C.NavItem
              className={location.pathname === "/about" ? "selected" : ""}
              onClick={() => navigate("/about")}
            >
              Sobre Mim
            </C.NavItem>
            <C.NavItem
              className={location.pathname === "/projects" ? "selected" : ""}
              onClick={() => navigate("/projects")}
            >
              Projetos
            </C.NavItem>
          </C.NavMenu>
        </C.NavArea>

        <C.IconsArea>
          <i className="ri-contrast-2-line icon" onClick={changeMainColor}></i>
          <i className="ri-settings-3-line icon"></i>
        </C.IconsArea>
      </C.Container>
    </C.Header>
  );
};
