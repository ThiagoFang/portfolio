import { Link, useLocation, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { ColorsActions, useColors } from "../../context/SettingsContext";
import { MobileMenu } from "../common/MobileMenu";
import { useState } from "react";
import { OpenSettingsButton } from "../common/OpenSettingsButton";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

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
    <>
      <MobileMenu menu={mobileMenu} changeAction={setMobileMenu} />
      <C.Header>
        <C.Container>
          <C.MobileMenuIcon
            onClick={() => setMobileMenu(true)}
            className="ri-menu-2-line"
          />

          <C.NavArea>
            <Link className="logo" to="/">
              <img src="/svg/logo.svg" />
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
              <C.NavItem
                className={location.pathname === "/art" ? "selected" : ""}
                onClick={() => navigate("/art")}
              >
                Art
              </C.NavItem>
              <C.NavItem
                className={location.pathname === "/contact" ? "selected" : ""}
                onClick={() => navigate("/contact")}
              >
                Contato
              </C.NavItem>
            </C.NavMenu>
          </C.NavArea>
          <C.IconsArea>
            <i
              className="ri-contrast-2-line icon"
              onClick={changeMainColor}
            ></i>
            <OpenSettingsButton />
          </C.IconsArea>
        </C.Container>
      </C.Header>
    </>
  );
};
