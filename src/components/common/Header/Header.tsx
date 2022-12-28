import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as C from "./styles";

export const Header = () => {
  const location = useLocation();

  return (
    <C.Header>
      <C.Container>
        <C.NavArea>
          <Link className="logo" to="/">
            <img src="/assets/svg/logo.svg" />
          </Link>
          <C.NavMenu>
            <C.NavItem className={location.pathname === "/" ? "selected" : ""}>
              <Link to="/">Home</Link>
            </C.NavItem>
            <C.NavItem
              className={location.pathname === "/about" ? "selected" : ""}
            >
              <Link to="/about">Sobre Mim</Link>
            </C.NavItem>
            <C.NavItem
              className={location.pathname === "/projects" ? "selected" : ""}
            >
              <Link to="/projects">Projetos</Link>
            </C.NavItem>
          </C.NavMenu>
        </C.NavArea>

        <C.IconsArea>
          <i className="ri-contrast-2-line icon"></i>
          <i className="ri-settings-3-line icon"></i>
        </C.IconsArea>
      </C.Container>
    </C.Header>
  );
};
