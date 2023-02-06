import { Link, useLocation, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { ColorsActions, useColors } from "../../context/SettingsContext";
import { MobileMenu } from "../common/MobileMenu";
import { useEffect, useState } from "react";
import { OpenSettingsButton } from "../common/OpenSettingsButton";
import { useConfig, ConfigActions } from "../../context/ConfigContext";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { state, dispatch } = useColors();
  const configs = useConfig();

  const location = useLocation();
  const navigate = useNavigate();

  const changeMainColor = () => {
    if (state.mainColor === "#1DE9B6") {
      dispatch({ type: ColorsActions.setMainColor, payload: "#CC30FF" });
      return;
    }
    dispatch({ type: ColorsActions.setMainColor, payload: "#1DE9B6" });
  };

  const getLocalStorage = () => {
    const info = localStorage.getItem("language");
    if (info != null) {
      configs.dispatch({ type: ConfigActions.setLanguage, payload: info });
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

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
                {configs.state.language === "pt" ? "Inicio" : "Home"}
              </C.NavItem>
              <C.NavItem
                className={location.pathname === "/about" ? "selected" : ""}
                onClick={() => navigate("/about")}
              >
                {configs.state.language === "pt" ? "Sobre Mim" : "About Me"}
              </C.NavItem>
              <C.NavItem
                className={location.pathname === "/projects" ? "selected" : ""}
                onClick={() => navigate("/projects")}
              >
                {configs.state.language === "pt" ? "Projetos" : "Projects"}
              </C.NavItem>
              <C.NavItem
                className={location.pathname === "/art" ? "selected" : ""}
                onClick={() => navigate("/art")}
              >
                {configs.state.language === "pt" ? "Arte" : "Art"}
              </C.NavItem>
              <C.NavItem
                className={location.pathname === "/contact" ? "selected" : ""}
                onClick={() => navigate("/contact")}
              >
                {configs.state.language === "pt" ? "Contato" : "Contact"}
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
